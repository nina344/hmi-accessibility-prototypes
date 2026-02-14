# Automotive HMI: Multimodal Safety Alerts (POC) 🚗✨

This repository contains a **Proof of Concept (POC)** exploring how modern web technologies can be utilized to build robust, safety-critical Human-Machine Interfaces (HMI) for the next generation of **Software-Defined Vehicles (SDV)**.

## 🎯 Research Focus
The primary goal of this logic is to reduce **driver cognitive load** and increase situational awareness through **Multimodal Interaction**. By synchronizing haptic, visual, and ambient feedback, we ensure that critical alerts are perceivable even in high-stress or high-noise environments.

### Key Concepts Applied:
*   **Accessibility (a11y) First:** Providing redundant alert channels for users with hearing or visual impairments.
*   **Peripheral Vision Integration:** Utilizing ambient lighting to alert the driver without requiring a direct gaze shift.
*   **Message Arbitration:** Implementing priority-based logic (`CRITICAL` vs. standard notifications).

---

## 🛠️ Integrated Safety Logic
The simulation demonstrates a synchronized response to an external emergency signal:

1.  **Haptic Feedback:** Directional seat vibration (Left/Right) to provide immediate tactile spatial awareness.
2.  **Ambient Lighting:** Peripheral visual alerts using interior zone color shifts (e.g., Pulsing Red).
3.  **HMI Display:** High-priority visual messaging on the main dashboard.

---

## 💻 How to Run
1.  Clone the repository.
2.  Open the `hapticFeedback.js` file.
3.  Run it using **Node.js** (`node hapticFeedback.js`) or paste the code into your **Browser Console (F12)**.

### Expected Console Output:
```text
>>> [HAPTIC FEEDBACK] Zone: side-left | Intensity: high | Pattern: pulsing
>>> [INTERIOR LIGHTS] Zone: door-trim-left | Color: #FF0000 | Effect: pulsing
>>> [HMI DISPLAY - CRITICAL] Warning: Emergency vehicle on the left
```

---

## 🚀 Future Roadmap

*   **Integration with Web Speech API:** Adding voice-over alerts for eyes-on-the-road safety.
*   **ISO 26262 Compliance:** Aligning interaction patterns with functional safety standards.
*   **Dynamic Scaling:** Adjusting alert intensity based on real-time vehicle speed and environmental noise.

---

*Created as part of HMI & Accessibility engineering research.*