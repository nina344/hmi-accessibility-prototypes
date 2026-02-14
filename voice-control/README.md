# Automotive HMI: Intent-Based Voice Control (POC) 🎙️🚗

This repository contains a **Proof of Concept (POC)** focused on **Natural Language Understanding (NLU)** logic for automotive environments. It explores how speech-to-intent mapping can reduce driver distraction and improve accessibility within a **Software-Defined Vehicle (SDV)** ecosystem.

## 🎯 Research Focus
The primary goal is to shift from rigid voice commands to **intent-based interaction**. Instead of requiring precise technical phrases, the system interprets the user's underlying needs (e.g., *"I am cold"*) and maps them to specific vehicle services.

### Key Concepts Applied:
*   **Intent Mapping:** Decoupling raw speech transcripts from system actions to allow for natural language variety.
*   **Accessibility Feedback Loop:** Utilizing **Text-to-Speech (TTS)** as a fallback mechanism to ensure the user is always informed of the system's state.
*   **Eyes-on-the-Road Safety:** Reducing the need for physical interaction with the dashboard for common comfort adjustments.

---

## 🛠️ System Architecture
The simulation mimics several key vehicle services:
1.  **Climate Service:** Dynamic temperature adjustment (Absolute and Delta values).
2.  **Seat Comfort Service:** Control over interior heating elements.
3.  **TTS & HMI Display:** Synchronized auditory and visual confirmation of successful or failed intent recognition.

---

## 💻 How to Run
1.  Clone the repository.
2.  Open the `voiceCommands.js` file.
3.  Run it using **Node.js** (`node voiceCommands.js`) or paste the code into your **Browser Console (F12)**.

### Expected Console Output:
```text
--- Scenario 1: Successful Intent Recognition ---
>>> [CLIMATE] Temperature increased by 2°C
>>> [HMI DISPLAY] Adjusting comfort settings...

--- Scenario 2: Precise Command ---
>>> [CLIMATE] Temperature set to 22°C
>>> [HMI DISPLAY] Adjusting comfort settings...

--- Scenario 3: Error Handling / Accessibility Feedback ---
>>> [TTS] I didn't catch that. Could you repeat?
```

---

## 🚀 Future Roadmap
*    **Contextual Awareness:** Adjusting seat heating automatically if "I am cold" is detected multiple times.
*    **Web Speech API Integration:** Real-time speech-to-text processing for live testing.
*    **Multilingual Support:** Mapping intents across different languages while maintaining the same core system actions.

---

*Created as part of HMI & Accessibility engineering research.*