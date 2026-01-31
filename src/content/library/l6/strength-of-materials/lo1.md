---
title: "LO1: Beams"
unit: "strength-of-materials"
order: 1
---

**LO1:** Determine shear forces and bending moments for simply supported beams and cantilevers.

### Introduction to Beams

A beam is an element of a larger structure (e.g., a building or bridge) that lies in a horizontal orientation and is used to transmit vertical loading acting at various points along its length to points of support.

The most common support arrangement for a beam is when a beam is supported at each end by a column. This arrangement allows a beam to transmit the vertical loading acting along its length down through the columns, eventually transferring the loading on the structure down to the foundations.

* **Loading:** Upper parts of the structure resting on the beam and applying forces to the beam at various points along its length.
* **Reaction Support Force ($R$):** Lower parts of the structure upon which the beam rests or is supported (e.g., columns) apply a force to the beam at the point of contact.

In this unit, the internal forces (**shear forces** and **bending moments**) generated in the beam as a result of external loading and support will be examined.

One of the best ways to analyze these internal forces is to first determine the reaction support forces required to keep the beam in **equilibrium**.

---

### Applying the Equations of Equilibrium

For problems represented by two-dimensional diagrams where all loading acts in the same 2D plane, there are **3 equations of equilibrium**:

1.  The sum of the forces left = The sum of the forces right
    $$\Sigma F_{\leftarrow} = \Sigma F_{\rightarrow}$$
2.  The sum of the forces up = The sum of the forces down
    $$\Sigma F_{\uparrow} = \Sigma F_{\downarrow}$$
3.  The sum of the clockwise moments = The sum of the anti-clockwise moments
    $$\Sigma CWM = \Sigma ACWM$$

To determine the size of reaction forces, we create a **Free-Body Diagram (FBD)**. This involves replacing the physical supports with vectors representing the position and direction of the reaction forces.

#### Types of Supports

| Support Type | Representation on Initial Diagram | Forces on FBD (Vertical Loading) |
| :--- | :--- | :--- |
| **Roller Support** | Circle on ground | $R$ (Linear force) |
| **Hinge/Pin Support** | Triangle on ground | $R$ (Linear force) |
| **Cantilevered/Fixed Support** | Beam embedded in wall | $M$ (Rotational force) <br> $R$ (Linear force) |

> **Note:** Roller and Hinge supports are typically used together for "simply supported" beams. A Cantilever/Fixed support can support a beam on its own.

---

### Section 1: Simply Supported Beams

#### Worked Examples: Calculating Reaction Forces
*Note: These correspond to the handwritten solutions in the original document.*

**Example 1 Setup:**
* **Beam Length:** 3m
* **Supports:** Ends (0m and 3m)
* **Point Loads:**
    * 15kN at 0.5m from left
    * 12kN at 1.5m from left
    * 24kN at 2.25m from left

**Example 2 Setup:**
* **Beam Configuration:** Overhanging beam supported at two points.
* **Supports:**
    * $R_1$ at 1m from left end.
    * $R_2$ at 3.5m from left end (2.5m from $R_1$).
* **Point Loads:**
    * 14kN at 0m (Left end tip)
    * 21kN at 3.5m (Directly above $R_2$) - *Note: Based on standard diagrams, this load is typically acting at the support or slightly offset, but in the tutorial answers, specific values are given.*

---

### Tutorial Questions: Simply Supported Beams

**Task:** For the following simply supported beams:
1.  Calculate the hinge and roller reaction support forces.
2.  Draw the shear force and bending moment diagrams (SFD & BMD).
3.  State the magnitude and position of the maximum bending moment.

**(a)**
* **Total Span:** 8m (Supports at ends)
* **Loads:**
    * 26kN at 3m from left support.
    * 30kN at 6m from left support (3m + 3m).

**(b)**
* **Total Span:** 6m (Supports at ends)
* **Loads:**
    * 18kN at 2m from left support.
    * 6kN at 4m from left support (2m + 2m).

**(c)**
* **Total Span:** 7.5m (Supports at 1.5m and 7.5m positions?)
    * *Correction based on diagram:* Beam starts at 0. Support at 1.5m. Support at 7.5m (end).
* **Loads:**
    * 5kN at 0m (Left end tip).
    * 30kN at 3.5m from left end (1.5m + 2m).

**(d)**
* **Total Span:** Beam length 5m.
* **Supports:** Left end (0m) and at 4m (1.5m + 2.5m).
* **Loads:**
    * 20kN at 1.5m from left.
    * 12kN at 5m (Right end tip).

**(e)**
* **Total Span:** Beam length 3.5m.
* **Supports:** at 1m and 3.5m (Right end).
* **Loads:**
    * 40kN at 0m (Left end tip).
    * 52kN at 2.5m from left end (1m + 1.5m).

**(f)**
* **Total Span:** Beam length 5.5m.
* **Supports:** Left end (0m) and at 3.5m (1.5m + 2m).
* **Loads:**
    * 36kN at 1.5m from left.
    * 15kN at 5.5m (Right end tip).

---

### Answers: Simply Supported Beams
*($R_1$ = left hand support; $R_2$ = right hand support)*

**1. (a)**
* i) $R_1 = 23.75\text{ kN}$; $R_2 = 32.25\text{ kN}$
* iii) $M_{max} = +71.25\text{ kNm}$ (3m from the LH end)

**1. (b)**
* i) $R_1 = 14.0\text{ kN}$; $R_2 = 10.0\text{ kN}$
* iii) $M_{max} = +28.0\text{ kNm}$ (2m from the LH end)

**1. (c)**
* i) $R_1 = 26.25\text{ kN}$; $R_2 = 8.75\text{ kN}$
* iii) $M_{max} = +35.0\text{ kNm}$ (3.5m from the LH end)

**1. (d)**
* i) $R_1 = 9.5\text{ kN}$; $R_2 = 22.5\text{ kN}$
* iii) $M_{max} = +14.25\text{ kNm}$ (1.5m from the LH end)

**1. (e)**
* i) $R_1 = 76.8\text{ kN}$; $R_2 = 15.2\text{ kN}$
* iii) $M_{max} = -40.0\text{ kNm}$ (1m from the LH end)

**1. (f)**
* i) $R_1 = 12\text{ kN}$; $R_2 = 39\text{ kN}$
* iii) $M_{max} = -30.0\text{ kNm}$ (3.5m from the LH end)

---

### Section 2: Cantilevered Beams

**Worked Example Setup:**
Determine the reaction support forces provided by the fixed support.
* **Support:** Fixed at Left Hand (LH) wall.
* **Length:** 5m total.
* **Loads:**
    * 12kN at 2m from wall.
    * 18kN at 5m from wall (end tip).

**Method:**
1.  **Calculate Moment ($M_A$):** Sum of Clockwise Moments about the wall = Resisting Anti-Clockwise Moment ($M_A$).
    $$(12 \times 2) + (18 \times 5) = 114\text{ kNm}$$
2.  **Calculate Vertical Reaction ($R_A$):** Sum of forces down = Sum of forces up.
    $$12 + 18 = 30\text{ kN}$$

---

### Tutorial Questions: Cantilevered Beams

**Task:** For the following cantilevered beams:
1.  Calculate the reaction support forces provided by the fixed support.
2.  Draw the SF and BM diagrams.
3.  State the magnitude and position of the maximum bending moment.

**(a)**
* **Support:** Fixed at Left Wall.
* **Length:** 5m.
* **Loads:**
    * 15kN at 3m from wall.
    * 22kN at 5m from wall (end tip).

**(b)**
* **Support:** Fixed at Left Wall.
* **Length:** 4m.
* **Loads:**
    * 16kN at 1.5m from wall.
    * 10kN at 4m from wall (end tip).

---

### Answers: Cantilevered Beams

**1. (a)**
* i) Moment ($M$) = $-155\text{ kNm}$; Vertical Reaction ($R$) = $37.0\text{ kN}$
* iii) $M_{max} = -155\text{ kNm}$ (at the LH end, i.e., at the support)

**1. (b)**
* i) Moment ($M$) = $-64\text{ kNm}$; Vertical Reaction ($R$) = $26.0\text{ kN}$
* iii) $M_{max} = -64\text{ kNm}$ (at the LH end, i.e., at the support)