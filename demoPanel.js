// Trigger emergency
document.getElementById("demo-emergency").addEventListener("click", () => {
  onEmergencySignalDetected({ type: "siren", direction: "left" });
});

// Trigger voice command
document.getElementById("demo-voice").addEventListener("click", () => {
  handleVoiceInput("I am cold");
});
