// --------------------------------------------------
// Mocked user settings (accessibility preferences)
// --------------------------------------------------
const userSettings = {
  accessibility: {
    hapticAlertsEnabled: true
  }
};

// --------------------------------------------------
// Mocked HMI / vehicle systems
// --------------------------------------------------

// Simulates seat haptic feedback
const triggerSeatVibration = (settings) => {
  console.log(
    `>>> [HAPTIC FEEDBACK] Zone: ${settings.zone} | Intensity: ${settings.intensity} | Pattern: ${settings.pattern}`
  );
};

// Simulates ambient interior lighting system
const ambientLightSystem = {
  setZoneColor: (zone, color, effect) => {
    console.log(
      `>>> [INTERIOR LIGHTS] Zone: ${zone} | Color: ${color} | Effect: ${effect}`
    );
  }
};

// Simulates visual message on the HMI display
const updateHmiDisplay = (message, priority) => {
  console.log(`>>> [HMI DISPLAY - ${priority}] ${message}`);
};

// --------------------------------------------------
// Emergency signal handling (multimodal HMI alert)
// --------------------------------------------------
function onEmergencySignalDetected(signal) {
  // CRITICAL priority:
  // Emergency-related alerts must override all other HMI notifications
  const priority = "CRITICAL";

  const { direction } = signal;

  if (userSettings.accessibility.hapticAlertsEnabled) {
    // Haptic warning through seat vibration
    triggerSeatVibration({
      intensity: "high",
      pattern: "pulsing",
      zone: direction === "left" ? "side-left" : "side-right"
    });

    // Visual warning through ambient lighting (Peripheral Vision Alert)
    ambientLightSystem.setZoneColor(
      direction === "left" ? "door-trim-left" : "door-trim-right",
      "#FF0000", // Alarm red color
      "pulsing"  // Pulsing effect attracts peripheral attention
    );

    // Visual message on the HMI display
    updateHmiDisplay(
      `Warning: Emergency vehicle on the ${direction}`,
      priority
    );
  }
}

// --------------------------------------------------
// Simulation trigger (for console testing)
// --------------------------------------------------

// Simulate detection of an emergency vehicle approaching from the left
onEmergencySignalDetected({
  type: "siren",
  direction: "left"
});
