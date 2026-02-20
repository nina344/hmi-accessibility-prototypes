// --------------------------------------------------
// DOM Elements Selection
// --------------------------------------------------
const ambientLeft = document.getElementById("ambient-left");
const ambientRight = document.getElementById("ambient-right");
const hmiStatus = document.getElementById("system-status");
const seatIcon = document.getElementById("seat-icon");
const adasIndicator = document.getElementById("adas-indicator");
const adasText = document.getElementById("adas-text");
const hmiInfo = document.getElementById("hmi-info");
const hmiCritical = document.getElementById("hmi-critical");

// --------------------------------------------------
// Mocked user settings (accessibility preferences)
// --------------------------------------------------
const userSettings = {
  accessibility: {
    hapticAlertsEnabled: true
  }
};

// --------------------------------------------------
// Helper Functions (Vehicle Systems Simulation)
// --------------------------------------------------

// Updates ADAS visual and textual status
function updateAdasStatus(state) {
  if (!adasIndicator || !adasText) return;

  adasIndicator.classList.remove("safe", "danger");

  if (state === "danger") {
    adasIndicator.classList.add("danger");
    adasText.textContent = "ADAS: Emergency detected";
  } else {
    adasIndicator.classList.add("safe");
    adasText.textContent = "ADAS: Operating normally";
  }
}

// Simulates seat haptic feedback
const triggerSeatVibration = (settings) => {
  console.log(
    `>>> [HAPTIC FEEDBACK] Zone: ${settings.zone} | Intensity: ${settings.intensity} | Pattern: ${settings.pattern}`
  ); // Simulation: in real system, this would trigger seat ECU via CAN bus

  if (seatIcon) {
    seatIcon.classList.add("haptic-active");
    setTimeout(() => seatIcon.classList.remove("haptic-active"), 800);
  }
};

// Simulates ambient interior lighting system
const ambientLightSystem = {
  setZoneColor: (zone, color, effect) => {
    console.log(
      `>>> [INTERIOR LIGHTS] Zone: ${zone} | Color: ${color} | Effect: ${effect}`
    );

    const target = zone.includes("left") ? ambientLeft : ambientRight;

    if (target) {
      target.classList.add("danger-pulse");
      setTimeout(() => target.classList.remove("danger-pulse"), 1200);
    }
  }
};

// Simulates visual message on the HMI display
function updateHmiDisplay(message, priority) {
  console.log(`>>> [HMI DISPLAY - ${priority}] ${message}`);

  if (priority === "CRITICAL") {
    if (hmiCritical) {
      hmiCritical.textContent = message;
    }
  } else {
    if (hmiInfo) {
      hmiInfo.textContent = message;
    }
  }
}

// --------------------------------------------------
// Core HMI Logic (Emergency handling)
// --------------------------------------------------
function onEmergencySignalDetected(signal) {
  // CRITICAL priority overrides all other notifications
  const priority = "CRITICAL";
  const { direction } = signal;

  if (userSettings.accessibility.hapticAlertsEnabled) {
    // 1. Haptic warning
    triggerSeatVibration({
      intensity: "high",
      pattern: "pulsing",
      zone: direction === "left" ? "side-left" : "side-right"
    });

    // 2. Ambient light warning (Peripheral awareness)
    ambientLightSystem.setZoneColor(
      direction === "left" ? "door-trim-left" : "door-trim-right",
      "#FF0000",
      "pulsing"
    );

    // 3. Visual dashboard message
    updateHmiDisplay(
      `Warning: Emergency vehicle on the ${direction}`,
      priority
    );

    // 4. Update ADAS state
    updateAdasStatus("danger");
  }
}

// --------------------------------------------------
// Initialization: Set UI to a known safe state on load
// --------------------------------------------------
function initHmi() {
  if (ambientLeft) ambientLeft.classList.remove("danger-pulse");
  if (ambientRight) ambientRight.classList.remove("danger-pulse");
  
  // Explicitly confirm system is operational
  updateAdasStatus("safe");
  
  console.log(">>> [HMI SYSTEM] Initialized and in SAFE state.");
}

// Execute initialization
initHmi();