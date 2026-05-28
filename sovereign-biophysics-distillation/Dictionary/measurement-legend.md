---
date: 2026-05-28
type: dictionary
visibility: public
status: draft
claim_tier: orientation
---

# Measurement Legend

This page explains the instrument shorthand that appears throughout Sovereign Biophysics.

These readings belong to the Instrument Table. They describe one sample, with one tool, under stated conditions. They do not identify exact compounds by themselves.

## Tools Named In The Archive

### PIOUS 5-in-1 Water Quality Meter

Used in early distillation records for pH, TDS/PPM, salt percentage, conductivity, and related salinity scales.

This tool is useful for field comparison across fractions. It is not a laboratory assay.

### UIUZMAR 6-in-1 Meter

Used in later records for pH, TDS, EC, ORP, dissolved hydrogen, and temperature.

This tool adds ORP and H2 readings, making it useful for tracking electrochemical shifts.

### Vevor YMK40202 Distillation Unit

The countertop distiller named in the experiment reports.

This is process apparatus, not an analytical instrument. It creates the fractions; it does not measure their composition.

## Core Readings

### pH

pH measures acid/alkaline balance.

- pH 7 is neutral.
- Lower than 7 is acidic.
- Higher than 7 is alkaline.

In this archive, fresh source material often sits near neutral or mildly acidic. Aged material and Solar fractions often move alkaline through urea breakdown into ammonia chemistry. Saturn retentate may move acidic after the volatile alkaline fraction has risen.

**Guardrail:** pH describes acidity or alkalinity. It does not identify what molecules are present.

### ORP / mV

ORP means oxidation-reduction potential. It is measured in millivolts.

- Positive ORP suggests electron-accepting or oxidizing character.
- Negative ORP suggests electron-donating or reducing character.
- Near 0 mV suggests a neutral redox point under the measured conditions.

In this archive, ORP helps track the charge difference between fresh source material, Solar spirit, Lunar essence, and Saturn retentate.

**Guardrail:** ORP is not the same as Reich's surface-charge measurements, qi, prana, or "energy" in a total sense. It is one electrochemical reading of a liquid sample.

### EC / Conductivity

EC means electrical conductivity.

It measures how easily a liquid conducts electrical current. In water-based samples, conductivity usually rises when dissolved ions and mineral salts rise.

Common units:

- `uS/cm` - microsiemens per centimeter. The archive sometimes writes this as `US/CM` or `USCM`.
- `mS/cm` - millisiemens per centimeter. 1 mS/cm = 1000 uS/cm.

In this archive, conductivity helps distinguish low-mineral clear fractions from dense retentates.

**Guardrail:** conductivity shows ionic load. It does not tell which ions are present without additional testing.

### TDS

TDS means total dissolved solids.

On handheld meters, TDS is usually estimated from conductivity. It is a useful comparison number, but it is not a direct weighing of solids.

**Guardrail:** TDS is an estimate. It should be read beside EC, pH, sample state, and temperature.

### PPM

PPM means parts per million.

In the archive's meter readings, PPM usually appears as the TDS scale for lower dissolved-solid ranges.

**Guardrail:** PPM from a handheld meter is usually derived from conductivity. It does not identify the dissolved material.

### PPT

PPT means parts per thousand.

Meters may use PPT when a sample is too dense for the lower PPM scale. It often appears with retentates or high-mineral samples.

**Guardrail:** PPT indicates a much denser dissolved load than PPM, but it still does not identify the salts.

### Salt %

Salt percentage is a meter estimate based on conductivity and salinity assumptions.

In ordinary water testing, "salt" often implies sodium chloride. In this archive, that assumption is not safe. On a zero-sodium-chloride baseline, a high salt percentage may reflect endogenous mineral salts rather than dietary NaCl.

**Guardrail:** salt percentage does not prove sodium chloride content. It names conductivity interpreted through the meter's salinity model.

### H2 / ppb

H2 refers to dissolved molecular hydrogen.

PPB means parts per billion.

This reading appears when the UIUZMAR meter is used. It is treated as a field reading, not as a full dissolved-gas analysis.

**Guardrail:** H2 readings should be interpreted cautiously unless calibration and sample conditions are documented.

### Temperature

Temperature is usually recorded in degrees C.

Temperature matters because pH, ORP, conductivity, and dissolved gas readings can shift as a sample warms or cools.

**Guardrail:** compare readings taken at similar temperatures whenever possible.

## Reading A Measurement Line

Example structure:

> pH 9.9 / TDS 307 ppm / EC 630 uS/cm / ORP -30 mV / H2 80 ppb

Read this as:

- the sample is alkaline;
- the dissolved load is relatively low;
- the sample conducts lightly compared with mineral-dense material;
- the redox reading is negative under those conditions;
- dissolved hydrogen was registered by the meter.

This line does not tell the full composition of the fraction. It gives the Instrument Table a stable set of numbers to compare across runs.

## Archive Thresholds

Some numbers become meaningful because they repeat inside this archive.

Examples:

- **Solar spirit:** often alkaline, negative ORP, chemically sharp.
- **Lunar essence:** clearer, lower conductivity, quieter carrier fraction.
- **Saturn retentate:** dense, high conductivity or TDS, fixed mineral matrix.
- **0 mV event:** a near-neutral redox point observed in the polishing run.
- **133 uS/cm range:** a low-conductivity endpoint observed after polishing aged input.

**Guardrail:** an archive threshold is not a universal law. It is a pattern worth tracking.

---

*[Back to Dictionary](README.md)*
