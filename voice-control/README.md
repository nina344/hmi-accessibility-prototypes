# Automotive HMI: Intent-Based Voice Control & Accessibility (POC) 🎙️🚗

This Proof of Concept (POC) explores **intent-based voice interaction** for automotive Human-Machine Interfaces (HMI), with a strong focus on **accessibility, driver distraction reduction**, and **Software-Defined Vehicle (SDV)** principles.

Instead of relying on rigid command syntax, the system interprets **user intent** and maps it to appropriate vehicle actions, simulating how modern digital cockpits can support natural, inclusive voice interaction.

---

## 🎯 Research Focus

The primary goal of this POC is to move from **command-driven voice control** to **intent-driven interaction**, enabling drivers to communicate naturally while keeping their eyes on the road.

Key objectives include:

- Reducing cognitive and visual load
- Improving accessibility for diverse user needs
- Providing clear system feedback without overwhelming the driver

---

## 🔹 Core Concepts Applied

- **Intent-Based Voice Interaction**
  - Natural language phrases (e.g. *"I am cold"*) are mapped to system intents
  - Speech input is decoupled from hard-coded commands

- **Voice → Action → Feedback Loop**
  - Voice input triggers a system action
  - Visual confirmation is shown on the HMI
  - Text-to-Speech (TTS) provides accessible fallback feedback

- **Accessibility-Aware Design**
  - Clear confirmation and error handling
  - Spoken feedback only when necessary
  - No continuous or distracting voice output

- **Eyes-on-the-Road Safety**
  - Comfort functions are adjusted without physical interaction
  - Voice is treated as a complementary input, not a replacement for visual HMI

---

## 🛠️ Simulated Vehicle Services

The POC simulates several vehicle subsystems typically found in modern cockpits:

1. **Climate Control Service**
   - Absolute temperature setting
   - Incremental temperature adjustment

2. **Seat Comfort Service**
   - Seat heating activation

3. **HMI & Accessibility Feedback**
   - Visual confirmation messages
   - Text-to-Speech (TTS) fallback for unrecognized commands

---

## 💻 How to Run

1. Clone the repository.
2. Navigate to the `voice-control` folder.
3. Open the main JavaScript file (e.g. `voiceCommands.js`).
4. Run using one of the following options:
   - **Node.js**
     ```bash
     node voiceCommands.js
     ```
   - **Browser Console**
     Paste the code directly into DevTools (`F12`).

---

### Expected Console Output

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

## ♿ Accessibility & HMI Philosophy

This POC applies **WCAG-inspired principles adapted to automotive HMI**, where:

- Voice feedback is informative but not intrusive
- Errors are handled gracefully and accessibly
- Visual and auditory feedback complement each other
- Accessibility is treated as a system behavior, not a feature toggle

---

## 🚀 Future Roadmap

*   Context-aware intent handling (e.g. repeated comfort requests)
*   Real-time speech recognition integration
*   Multilingual intent mapping
*   Integration with safety and ADAS-related voice feedback

---

## ⚠️ Disclaimer

This is a **conceptual prototype** intended for:

- HMI design exploration  
- Accessibility research  
- Portfolio and demonstration purposes  

It does **not** represent production vehicle software.


*Created as part of HMI & Accessibility engineering research.*