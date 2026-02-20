# Automotive HMI: Multimodal Safety & ADAS Alerts (POC) 🚗✨

This Proof of Concept (POC) demonstrates a **multimodal, safety-critical Human-Machine Interface (HMI)** designed for **Software-Defined Vehicles (SDV)**, with a strong focus on **ADAS awareness** and **accessibility-aware alerting**.

The simulation explores how **haptic feedback, ambient lighting, and visual HMI messaging** can work together to communicate critical vehicle states while minimizing driver distraction and cognitive load.

---

## 🎯 Research Focus

The primary goal of this POC is to improve **driver situational awareness** and **reaction time** by distributing safety information across multiple sensory channels.

Special attention is given to:

- Safety-critical prioritization
- Peripheral perception
- Accessibility patterns adapted to automotive HMI constraints

---

## 🔹 Core Concepts Applied

- **Multimodal Safety Alerts**  
  Visual, haptic, and ambient feedback operate together instead of relying on a single channel.

- **ADAS State Management**  
  Explicit system states are modeled:
  - `SAFE` – normal operating conditions  
  - `DANGER` – safety-critical situation requiring immediate attention

- **Priority-Based Message Arbitration**  
  Critical alerts override non-critical UI feedback.

- **Accessibility-Aware HMI Patterns**
  - `aria-live` for screen-reader compatibility
  - No continuous speech spam
  - Critical alerts always take precedence

- **Known Initial State**
  - HMI initializes explicitly in a `SAFE` state to avoid ambiguous system behavior

---

## 🛠️ Integrated Safety Logic

When a simulated emergency or hazard signal is detected, the system triggers a synchronized response:

1. **Haptic Feedback**
   - Directional seat vibration (Left / Right)
   - Provides immediate spatial awareness without visual dependency

2. **Ambient Lighting**
   - Peripheral alerts using interior light zones
   - Color and pulsing effects indicate urgency (e.g. red pulsing for danger)

3. **Visual HMI Messaging**
   - High-priority warnings displayed on the HMI
   - ADAS state clearly indicated (`SAFE` → `DANGER`)

4. **Screen-Reader Awareness**
   - Critical messages announced via `aria-live`
   - Non-critical updates remain silent

---

## 💻 How to Run

1. Clone the repository.
2. Navigate to the `haptic-alerts` folder.
3. Open the main JavaScript file (e.g. `hapticFeedback.js`).
4. Run using one of the following options:
   - **Node.js**  
     ```bash
     node hapticFeedback.js
     ```
   - **Browser Console**  
     Paste the code directly into DevTools (`F12`).

---

### Expected Console Output

```text
>>> [ADAS STATE] SAFE → DANGER
>>> [HAPTIC FEEDBACK] Zone: side-left | Intensity: high | Pattern: pulsing
>>> [INTERIOR LIGHTS] Zone: door-trim-left | Color: #FF0000 | Effect: pulsing
>>> [HMI DISPLAY - CRITICAL] Emergency vehicle detected on the left
```

---

## ♿ Accessibility & HMI Philosophy

This POC intentionally adapts **WCAG principles to an in-vehicle context**, where:

- Not all information should be spoken continuously
- Critical alerts must interrupt secondary feedback
- Motion respects `prefers-reduced-motion`
- Multimodal feedback **complements — not duplicates — information**

---

## 🚀 Future Roadmap

*   Voice alerts integrated with ADAS state changes
*   Dynamic alert scaling based on speed and driving context
*   ISO 26262-aligned interaction patterns
*   Integration with intent-based voice control modules

---

## ⚠️ Disclaimer

This is a **conceptual prototype** intended for:

- HMI design exploration  
- Accessibility research  
- Portfolio and demonstration purposes  

It does **not** represent production vehicle software.


*Created as part of HMI & Accessibility engineering research.*