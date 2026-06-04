---
date: 2026-06-04
type: experiment
visibility: private
status: draft
claim_tier: preliminary-observation
note: Fresh plasma collected through the evening and early morning of June 3-4, distilled June 4 from about 7:00 to 10:00. Raw baseline, source provenance by jar, and exact measurement timing were not tracked.
---

# Experiment Report: June 4 Fresh Plasma Distillation

**Operator:** Ana Seahawk
**Date:** June 4, 2026
**Input:** Fresh plasma collected through the evening and early morning of June 3-4
**Run structure:** Four morning distillation runs, each about 900 ml
**Known limits:** Mixed-source input; no raw source readings; jar provenance not tracked

*Single-subject observational record. Not medical guidance.*

---

## Run Context

This was a fresh plasma morning, not a controlled comparative run.

The material was collected across the evening and early morning, then distilled between about 7:00 and 10:00. Four jars were produced. Some source material was Ana's, some was her partner's, and some was blended. The jars were not labelled by source, collection time, or exact run order.

The raw material was not measured before heat. That means this entry can record the state of the distillates, but it cannot establish how far distillation moved the material from its starting baseline.

The useful feature of the run is narrower: pH stayed almost fixed across the jars while dissolved hydrogen shifted sharply.

---

## Distillate Measurements

| Jar / sample | Relative timing | Temp deg C | pH | EC uS/cm | TDS ppm | ORP mV | H2 ppb |
|:---|:---|---:|---:|---:|---:|---:|---:|
| **Jar 1** | Freshest, about 1 hour post-distillation | 36.0 | 9.4 | 979 | 489 | -18 | 44-52 |
| **Jar 2** | Oldest jar from the morning | 27.4 | 9.4 | 813 | 406 | not captured | 0 |
| **Jar 3** | Timing not fixed | 28-29 | 9.4 | 1084 | 542 | -22 | 24 |
| **Jar 4** | Timing not fixed | 31.0 | 9.3 | 705 | 347 | not captured | 40 |

---

## Observations

**The pH held.** All four jars remained tightly clustered at pH 9.3-9.4. That is the most stable feature in the batch.

**The dissolved load varied inside a moderate band.** Conductivity ranged from 705 to 1084 uS/cm, with TDS estimated between 347 and 542 ppm. These values sit in the working range of a first-pass fresh distillate, not in the low-conductivity range of a polished carrier fraction.

**The ORP was mildly negative where captured.** Jar 1 measured -18 mV. Jar 3 measured -22 mV. These are near-neutral reducing readings, not a strong charge signature by themselves.

**The H2 signal did not hold evenly.** Dissolved hydrogen ranged from 0 to 52 ppb. The freshest and warmest sample carried the highest captured H2 range. The oldest and coolest sample registered 0 ppb.

The hydrogen reading moved more than the pH did. That is the key observation.

---

## What Can Be Said

This batch shows stable alkalinity across four fresh distillate jars under incomplete tracking conditions.

It does not show that dissolved H2 collapsed. It shows that the H2 readings were less stable than the pH readings under these measurement conditions.

The variation may be tracking elapsed time after distillation, cooling temperature, jar headspace, sealing, opening, agitation, source mixture, meter stabilization, or several of those at once. It may also be fluctuation rather than simple loss.

The run does not identify which variable matters most. It only shows which variable needs better handling next.

---

## Related Measurement Literature

The hydrogen-water literature has tracked dissolved molecular hydrogen across storage, temperature, container material, opening, and measurement method. Those studies do not use plasma distillate, but they help frame the variables in this run.

- Kurokawa et al. tracked super-saturated H2 water and H2-rich saline. Sealed bottles held high H2 for days, while opened bottles lost H2 over 1-2 hours; headspace mattered. Their saline-bag work also showed measurable loss after removal from the H2 bath.
- Tanaka et al. tracked dissolved hydrogen and ORP across water hardness, temperature, and storage containers. In their setup, container material mattered: aluminum and stainless steel retained H2 much better over 12 hours than diverse plastics.
- Asada et al. reported strong retention when hydrogen-rich water was sealed in an aluminum bottle with internal air removed: above 99% overnight, and above 98% at 4 deg C for more than 30 days.
- Mouzakis et al. used continuous monitoring of dissolved H2 in water and physiological saline for haemodialysis applications. Their sensor system showed long response time, sensor-to-sensor divergence, and temperature-dependent fluctuation.
- LeBaron and Sharpe argue that ORP should not be used to estimate or compare aqueous H2 concentration. pH and temperature can dominate ORP readings, and a dedicated H2 method is needed when the concentration itself matters.
- Seo et al. describe a methylene-blue/platinum-colloid titration method for dissolved H2. In their calibration, one drop of reagent in a 20 ml sample corresponds to about 0.03 mg/L, or 30 ppb, placing this archive's 24-52 ppb readings in a low, handling-sensitive range.

Taken together, the outside record supports caution. Dissolved H2 may decline, persist, or fluctuate depending on the vessel and method. The June 4 run cannot yet distinguish those possibilities.

---

## What Remains Open

The missing raw baseline is the largest limitation. Without pH, EC, TDS, ORP, and H2 readings from the unheated source material, the archive cannot measure the shift caused by distillation.

The missing source map is the second limitation. Because the jars were not tracked as Ana, partner, or blend, the numbers cannot be compared by source.

The missing timing map is the third limitation. H2 may change quickly after distillation, or the meter may read it differently as temperature and sample conditions settle. This run did not hold measurement time constant.

---

## Next Clean Run

The next fresh plasma run should hold the H2 question directly.

Each jar should be labelled before distillation. The raw material should be measured before heat. Each distillate should be measured on a fixed rhythm: immediately after collection, 15 minutes, 60 minutes, 3 hours, and 24 hours if possible.

Record source category, collection window, distillation start, first drip, jar change, run end, fill level, headspace, lid timing, and whether the jar was opened before measurement.

At least two stabilized readings per variable would make the record stronger.

The next question is simple: does dissolved H2 decline, fluctuate, rebound, or measure inconsistently as time, cooling, source composition, and handling change?

---

## Working Hypothesis

The alkaline volatile fraction appears stable across this batch. The H2 signal appears more condition-sensitive than the pH signal.

The jar can hold a pH pattern while the gas reading moves.

---

## References

- Kurokawa R, Seo T, Sato B, et al. "Convenient methods for ingestion of molecular hydrogen: drinking, injection, and inhalation." *Medical Gas Research* 5, 2015. https://doi.org/10.1186/s13618-015-0034-2
- Tanaka Y, Teraoka F, Nakagawa M, Miwa N. "Dependencies of hydrogen-water on mineral-based hardness, temperatures and the container materials, and effects of the oral washing and drinking." *Medical Gas Research* 10(2), 2020. https://doi.org/10.4103/2045-9912.285559
- Asada R, Tazawa K, Sato S, Miwa N. "Effects of hydrogen-rich water prepared by alternating-current-electrolysis on antioxidant activity, DNA oxidative injuries, and diabetes-related markers." *Medical Gas Research* 10(3), 2020. https://doi.org/10.4103/2045-9912.296041
- Mouzakis FL, Khadka LB, da Silva MP, Mottaghy K. "Quantification of dissolved H2 and continuous monitoring of hydrogen-rich water for haemodialysis applications: An experimental study." *The International Journal of Artificial Organs* 45(3), 2022. https://doi.org/10.1177/03913988211070588
- LeBaron TW, Sharpe R. "ORP should not be used to estimate or compare concentrations of aqueous H2: An in silico analysis and narrative synopsis." *Frontiers in Food Science and Technology* 2, 2022. https://doi.org/10.3389/frfst.2022.1007001
- Seo T, Kurokawa R, Sato B. "A convenient method for determining the concentration of hydrogen in water: use of methylene blue with colloidal platinum." *Medical Gas Research* 2, 2012. https://doi.org/10.1186/2045-9912-2-1

---

*[← Back to Index](../README.md)*
