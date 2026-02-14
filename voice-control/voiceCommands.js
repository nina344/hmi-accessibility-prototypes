// --------------------------------------------------
// Mocked vehicle services (comfort & accessibility)
// --------------------------------------------------

// Simulates climate control system
const climateService = {
  setTemp: (value) => {
    console.log(`>>> [CLIMATE] Temperature set to ${value}°C`);
  },
  increaseTemp: (delta) => {
    console.log(`>>> [CLIMATE] Temperature increased by ${delta}°C`);
  }
};

// Simulates seat comfort features
const seatService = {
  toggleHeat: (enabled) => {
    console.log(
      `>>> [SEAT COMFORT] Seat heating ${enabled ? "enabled" : "disabled"}`
    );
  }
};

// Simulates text-to-speech system (accessibility feedback)
const textToSpeech = {
  speak: (message) => {
    console.log(`>>> [TTS] ${message}`);
  }
};

// Simulates visual confirmation on the HMI display
const showVisualConfirmation = (message) => {
  console.log(`>>> [HMI DISPLAY] ${message}`);
};

// --------------------------------------------------
// Voice command mapping (speech → system action)
// --------------------------------------------------

const voiceCommands = {
  "set temperature to 22": () => climateService.setTemp(22),
  "i am cold": () => climateService.increaseTemp(2),
  "turn on seat heating": () => seatService.toggleHeat(true)
};

// --------------------------------------------------
// Voice input handler (intent recognition logic)
// --------------------------------------------------

function handleVoiceInput(transcript) {
  // Normalize speech input for reliable command matching
  const normalizedTranscript = transcript.toLowerCase();
  const action = voiceCommands[normalizedTranscript];

  if (action) {
    // Execute matched system action
    action();

    // Visual feedback confirms that the command was understood
    showVisualConfirmation("Adjusting comfort settings...");
  } else {
    // Accessibility fallback:
    // Spoken feedback when the system does not understand the command
    textToSpeech.speak("I didn't catch that. Could you repeat?");
  }
}

// --------------------------------------------------
// Simulation scenarios (console-based testing)
// --------------------------------------------------

console.log("--- Scenario 1: Successful Intent Recognition ---");
// Expected outcome: Temperature increase + visual confirmation
handleVoiceInput("I am cold");

console.log("--- Scenario 2: Precise Command ---");
// Expected outcome: Temperature set to a specific value
handleVoiceInput("set temperature to 22");

console.log("--- Scenario 3: Error Handling / Accessibility Feedback ---");
// Expected outcome: TTS asks the user to repeat the command
handleVoiceInput("play some music");
