---
archive_entry: true
title: Experiment Report: June 10 Three-Batch Fresh Plasma Comparison
date: 2026-06-10
sun:
moon:
moon-phase:
type: experiment
visibility: public
status: draft
claim_tier: preliminary-observation
summary: Three-run fresh plasma comparison with paired fresh-baseline and distilled-product readings on two independent batches plus a redistillation.
phase: distillation
significance: major
threads:
  - distillation-record
  - fresh-plasma
inquiries:
  - what-does-distillation-reveal
  - how-does-fresh-plasma-behave
entry_points:
  - water
  - measurement
  - practice
source_layer: public-website
note: Three runs — Batch A and Batch B fresh plasma with before/after measurements, plus a redistillation of a previous blow-over batch with before/after measurements at the redistillation step. First day with paired fresh-baseline and distilled-product readings on two independent batches.
---

# Experiment Report: June 10 — Three-Batch Fresh Plasma Comparison

**Operator:** Ana Seahawk  
**Date:** June 10, 2026  
**Input:** Two independent fresh plasma batches (< 12 hours old) and one redistillation of a prior blow-over fraction  
**Run structure:** Three sequential measurements — Batch A (fresh → distilled), Batch B (fresh → distilled), Redistillation Run (blow-over distillate → re-distilled)

---

## Run 1 — Batch A

### Fresh Plasma (< 12 hours old)

| Parameter   |     Reading |
| :---------- | ----------: |
| Temperature |      26.7°C |
| pH          |         6.1 |
| EC          | 4,160 µS/cm |
| TDS         |   2,090 ppm |
| H₂ ppb      |           0 |

### Distilled Plasma

| Parameter   |     Reading |
| :---------- | ----------: |
| Temperature |      30.4°C |
| pH          |         9.6 |
| EC          | 1,110 µS/cm |
| TDS         |     553 ppm |
| ORP         |      -25 mV |
| H₂ ppb      |          58 |

### Change Through Distillation

| Parameter  | Fresh | Distilled |
| :--------- | ----: | --------: |
| pH         |   6.1 |       9.6 |
| EC µS/cm   | 4,160 |     1,110 |
| TDS ppm    | 2,090 |       553 |
| H₂ ppb     |     0 |        58 |

pH shifted from mildly acidic to strongly alkaline. EC and TDS decreased by approximately 74%. Measurable dissolved hydrogen appeared in the distillate where none was present in the fresh source.

---

## Run 2 — Batch B

### Fresh Plasma (< 12 hours old)

| Parameter   |      Reading |
| :---------- | -----------: |
| Temperature |       28.6°C |
| pH          |          6.6 |
| EC          | 10,080 µS/cm |
| TDS         |    5,100 ppm |
| ORP         |       +56 mV |
| H₂ ppb      |            0 |

### Distilled Plasma

| Parameter   |                            Reading |
| :---------- | ---------------------------------: |
| Temperature |                             43.4°C |
| pH          |                                9.4 |
| EC          | 1,120 µS/cm *(reading while cooling from 1,160)* |
| TDS         |                            579 ppm |
| ORP         |                             -73 mV |
| H₂ ppb      |                                152 |

### Change Through Distillation

| Parameter  |  Fresh | Distilled |
| :--------- | -----: | --------: |
| pH         |    6.6 |       9.4 |
| EC µS/cm   | 10,080 |     1,120 |
| TDS ppm    |  5,100 |       579 |
| ORP mV     |    +56 |       -73 |
| H₂ ppb     |      0 |       152 |

Starting concentration was more than double that of Batch A — 10,080 µS/cm versus 4,160 µS/cm. Despite that difference, the distilled fraction landed in nearly the same range as Batch A. The distilled sample carried substantially higher dissolved hydrogen and a more negative ORP.

---

## Run 3 — Redistillation of Previous Blow-Over Batch

This material had been distilled once before and was suspected to contain blow-over. The blow-over distillate was measured before re-distillation, then distilled a second time to clean the fraction further. No measurements of the original fresh plasma source are available, but the intermediate state entering this run was recorded.

### Blow-Over Distillate (input to this run)

| Parameter   |     Reading |
| :---------- | ----------: |
| pH          |         9.4 |
| EC          | 2,110 µS/cm |
| TDS         |  ~1,040 ppm |
| ORP         |      -54 mV |
| H₂ ppb      |         124 |

### Re-Distilled Plasma

| Parameter   |     Reading |
| :---------- | ----------: |
| Temperature |      38.4°C |
| pH          |         9.5 |
| EC          | 1,186 µS/cm |
| TDS         |     603 ppm |
| ORP         |      -40 mV |
| H₂ ppb      |          82 |

### Change Through Re-Distillation

| Parameter  | Blow-Over Distillate | Re-Distilled |
| :--------- | -------------------: | -----------: |
| pH         |                  9.4 |          9.5 |
| EC µS/cm   |                2,110 |        1,186 |
| TDS ppm    |               ~1,040 |          603 |
| ORP mV     |                  -54 |          -40 |
| H₂ ppb     |                  124 |           82 |

EC and TDS reduced by approximately 44% through re-distillation. pH held in the same narrow alkaline range. ORP became less negative (-54 → -40 mV), moving in the opposite direction from the fresh-to-distilled runs. H₂ decreased from 124 to 82 ppb.

---

## End-of-Day Comparison

| Parameter  | Batch A Distilled | Batch B Distilled | Blow-Over Distillate | Re-Distilled Blow-Over |
| :--------- | ----------------: | ----------------: | -------------------: | ---------------------: |
| pH         |               9.6 |               9.4 |                  9.4 |                    9.5 |
| EC µS/cm   |             1,110 |             1,120 |                2,110 |                  1,186 |
| TDS ppm    |               553 |               579 |               ~1,040 |                    603 |
| ORP mV     |               -25 |               -73 |                  -54 |                    -40 |
| H₂ ppb     |                58 |               152 |                  124 |                     82 |

---

## Observations

**pH held across all measured fractions.** Every distilled or re-distilled fraction landed between 9.4 and 9.6 regardless of starting conditions or pass number. That pattern is consistent with the June 4 session and the March two-pass run. Even the blow-over distillate entering Run 3 already sat at 9.4 before re-distillation.

**EC and TDS converged toward a narrow band in the first-pass distillates.** Both Batch A and Batch B distillates fell between approximately 1,100 and 1,200 µS/cm and 550 and 600 ppm. This is the first session where two paired fresh-baseline runs were available to show this directly: a source at 4,160 µS/cm and a source at 10,080 µS/cm both produced distillates in the same working range. The starting material differed by more than 2.4×; the distilled output differed by less than 7%.

**Re-distillation drove EC and TDS lower but did not change pH.** The blow-over distillate entered Run 3 at 2,110 µS/cm and ~1,040 ppm — above the first-pass range. After re-distillation it landed at 1,186 µS/cm and 603 ppm, within the same band as Batch A and Batch B. pH barely moved (9.4 → 9.5).

**ORP was negative in every distilled sample measured.** Values ranged from -25 mV to -73 mV across all first-pass distillates. The fresh source for Batch B carried a positive ORP (+56 mV) that inverted through distillation. In Run 3, ORP moved in the opposite direction through re-distillation: -54 mV → -40 mV, becoming less negative rather than more.

**Dissolved hydrogen varied considerably and decreased through re-distillation.** Across the three first-pass distillates (Batch A, Batch B, and the blow-over entering Run 3), H₂ ranged from 58 to 152 ppb. Re-distillation in Run 3 reduced H₂ from 124 to 82 ppb, moving in the same direction as EC and TDS — downward. Whether that is a consistent property of re-distillation or a feature of this specific material is not established.

---

## What Remains Open

The wide H₂ spread across first-pass distillates is the largest open question. Batch B produced 2.6× the hydrogen of Batch A despite similar distillate profiles on every other measured parameter. Measurement timing, sample temperature, headspace, meter stabilization, and source-material differences are all plausible contributors, but none can be assigned from today's data alone.

The ORP direction in Run 3 is a new open question. In fresh-to-distilled runs, ORP moved toward more negative values. In re-distillation, it moved toward less negative. This may reflect a difference in the material being processed, in what the second pass removes, or in something about measurement conditions. It needs more observations before it can be treated as a pattern.

---

## Working Hypothesis

Distillation appears to drive the plasma toward a characteristic profile — alkaline pH, moderate conductivity, negative ORP — that is substantially independent of the starting concentration within the range tested today. The alkaline volatile fraction is the stable anchor. The hydrogen reading remains the most condition-sensitive variable.

---

*One practitioner's record — measurements from one body, one run. Not medical guidance. → [How to read this archive](../00-orientation/how-to-read-this.md)*

---

*Continue reading: [Experiment Report: June 13 — Menstrual Plasma Distillation Series →](experiment-report-june13-menstrual-plasma.md)*

*[← Back to Index](../README.md)*
