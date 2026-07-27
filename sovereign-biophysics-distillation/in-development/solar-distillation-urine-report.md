---
date: 2026-07-27
type: development-draft
visibility: private
status: draft
claim_tier: evidential
---

# Solar Distillation of Human Urine: A Research Overview

*A plain-language survey of the science, the leading studies, what they found, and what's still unsolved.*

---

## Why anyone is studying this

Human urine is roughly 90-95% water. The rest is a concentrated mix of the exact nutrients crops need - nitrogen (as urea), phosphorus (as phosphate), and potassium - plus salts and trace contaminants. That combination makes urine two useful things at once: a potential source of clean water, and a potential fertilizer.

Two pressures drive the research:

- **Phosphorus depletion.** Commercial phosphate fertilizer is mined from finite rock reserves, and supply is vulnerable to price shocks and geopolitics. Urine is a renewable, locally available phosphorus source that could be recycled indefinitely.
- **Water scarcity.** In arid regions and off-grid settings, recovering even non-potable water from a waste stream is valuable.

The problem with ordinary distillation is that it's energy-hungry - you normally have to boil the liquid. Solar distillation sidesteps this by using free sunlight as the heat source, which is why it's especially attractive for low-income and developing-world sanitation, arid regions, and off-grid use.

---

## The core idea, in plain terms

All of this work rests on one simple principle: **evaporate, then re-condense.**

When water evaporates from urine, it leaves the salts, nitrogen, phosphorus, and most dissolved contaminants behind. The water vapor rises, hits a cooler surface, and condenses back into liquid - now separated from most of what it was mixed with. You end up with three possible products:

1. **Purified water** (the condensed vapor, called the *distillate*)
2. **A concentrated nutrient sludge or solid** (what's left behind, called the *distillation bottoms* or concentrate)
3. **A recoverable mineral** - often phosphorus precipitated out as a solid salt

The research divides into two families based on *how* they capture the sun's heat.

---

## Family 1: Simple passive solar stills

These are deliberately low-tech: a covered basin where sunlight slowly heats a pool of urine, and condensed water is collected off the underside of the cover. The appeal is that almost anyone could build one.

### The leading study: Bucholtz et al. (2023), *Water Science & Technology*

Conducted by Treavor Boyer's group at Arizona State University and funded by the U.S. National Science Foundation's STEPS Center (Science and Technologies for Phosphorus Sustainability), this was the first solar distillation study of urine conducted in North America.

**The apparatus was strikingly simple.** They used 27 cm clear plastic bowls, each with a small amber glass collection bottle sitting inside. Plastic wrap was stretched over the top of each bowl, with a small weight placed in the center directly above the bottle - so condensed water would run down to the low point and drip into the bottle. The bowls sat outdoors on a parking-structure roof in direct sun for 6 hours. The urine surface exposed to the sun was only about 89 cm^2 per bowl.

**They compared four kinds of urine:** synthetic (lab-made) fresh, synthetic hydrolyzed, real fresh, and real hydrolyzed. ("Hydrolyzed" means aged/stored urine in which urea has broken down into ammonia - which raises the pH and changes the chemistry significantly.) They also tested an acidified fresh urine.

**Key findings:**

- **Hydrolyzed urine produced more water, but dirtier water.** It yielded noticeably more distillate (about 16 mL versus 9.5 mL for fresh urine per run), because the volatile ammonia and carbon dioxide in aged urine help drive evaporation. But those same volatile compounds carried into the condensed water - the distillate's electrical conductivity was around 70 times higher than for fresh urine, and it contained more organic compounds. So the water was less pure.
- **Fresh urine produced cleaner water.** Less volatile carryover meant a higher-purity product, just less of it.
- **Air temperature barely mattered.** As the daily high ranged from about 99 deg F to 115 deg F, there was essentially no relationship with how much water was recovered (the correlation was near zero). What matters is solar radiation hitting the surface, not how warm the day feels. Humidity showed a small positive effect.
- **Phosphorus can be pulled out as a solid.** They tested 14 different metal chloride salts to precipitate phosphate out of the concentrate. Cerium, iron(III), lanthanum, and magnesium worked best; cerium performed best across all urine types. In fresh urine, iron phosphate formed well; in hydrolyzed urine, struvite (magnesium ammonium phosphate) - a known slow-release fertilizer - formed in greater amounts. Phosphate removal reached roughly 45% for real fresh urine and 39% for real hydrolyzed urine, likely limited by the lack of any stirring.
- **A caution for researchers:** synthetic urine behaved like real urine for water recovery, but *not* for phosphate precipitation - so lab-made urine can't fully stand in for the real thing in this kind of study.
- **Pharmaceuticals mostly stay behind, but not entirely.** Using diclofenac (a common anti-inflammatory drug often found in urine) as a test case, most of it stayed in the concentrate, though a small amount carried into the distillate.

**The bottom line from this study:** a very simple, sun-powered rig can turn urine into three usable outputs - non-potable water, a phosphorus mineral, and a nitrogen-rich concentrate - with fresh urine giving cleaner water and hydrolyzed urine giving more of it plus easier phosphorus recovery.

---

## Family 2: Interfacial solar evaporation (the engineered approach)

This is the more sophisticated and faster-growing branch. Instead of heating a whole pool of liquid, researchers build a thin, sunlight-absorbing film that floats at the surface and concentrates all the heat exactly where evaporation happens. This wastes far less energy warming liquid that isn't evaporating, so it's much more efficient.

### The leading study: Zhang et al. (2022), *Resources, Conservation and Recycling*

A group at Tongji University in China built photothermal ("light-to-heat") films from **polypyrrole** - a black, electrically conductive polymer that's excellent at converting sunlight into heat - synthesized using pyrrole and ferric chloride. They coated the polymer onto cheap, porous substrates: **cotton cloth** and thin **paulownia wood**. The cloth acts as a wick, drawing urine up to the sunlit black surface; the black coating supplies the heat; the water evaporates off the top and is condensed for collection. They arranged their best-performing version in a tree-like evaporator structure for outdoor testing.

**Key result:** in outdoor testing under *low* light intensity, the device recovered about **1.1 kg/m^2 (roughly 1.1 liters per square meter) of condensed freshwater in 7.5 hours - and that water met World Health Organization drinking-water standards** on the parameters tested. That's a meaningfully higher bar than the "non-potable" (irrigation/flushing) quality of the simple stills.

A closely related study in this same space reported even higher output - around 6.13 kg/m^2 of purified water over an 8-hour day, even during cool autumn conditions (about 17.6 deg C, 648 W/m^2 of solar radiation), with an estimated vapor-collection efficiency near 58%.

**Why this branch matters:** the framing throughout is explicitly practical - simple to operate, cheap, and suited to rural areas of developing countries, replacing chemical- and energy-intensive treatment with sunlight and inexpensive materials.

---

## What "meets WHO standards" actually means (and doesn't)

It's worth being precise here, because it's easy to over-read. When a study says the recovered water met WHO drinking-water standards, it means the collected water passed the specific safety thresholds the researchers actually measured. That's a genuinely strong proof-of-concept result.

But it is not a blanket guarantee that this method, in any hands, always produces safe drinking water. Two things ride along with water vapor and can end up in the distillate:

- **Ammonia** - abundant in aged/hydrolyzed urine, and volatile
- **Some volatile organic compounds**, potentially including trace pharmaceuticals

This is exactly why water quality is one of the parameters researchers in this field scrutinize most closely, and why fresh (or acid-stabilized) urine tends to yield cleaner water than aged urine.

---

## The recurring challenges across all this research

- **Nitrogen loss.** Nitrogen escaping as volatile ammonia is both a loss of fertilizer value and a source of odor and contamination in the water. Managing urine chemistry (e.g., acid stabilization) to keep nitrogen locked in as urea is a central problem.
- **Water-quality carryover.** Volatile organics and ammonia degrading the distillate - the trade-off seen clearly in the fresh-vs-hydrolyzed comparison.
- **Contaminant and pathogen fate.** Reviews repeatedly warn that many nutrient-recovery schemes underexamine where pharmaceuticals, hormones, and pathogens actually end up.
- **Throughput and scale.** Around 1 liter per square meter per day is small. A person needs roughly 2-3 liters of drinking water daily, so meaningful output requires substantial surface area. These remain demonstrations, not deployable household systems.
- **No single technology does everything.** The consensus is that practical systems will need to combine two or more processes (e.g., stabilization + evaporation + a polishing step for contaminants).

---

## Where this is meant to be used

The realistic near-term applications researchers point to are:

- **Arid regions** with abundant sun and scarce water
- **Off-grid and developing-world sanitation**, where low cost and no electricity are decisive
- **Urine source separation in buildings** (e.g., office restrooms), where collected urine could yield non-potable water for cooling or irrigation and reduce demand on potable supplies

---

## Key references

- Bucholtz, P., Steele, M., Tripathi, V., Graham, C., Crane, L., & Boyer, T. H. (2023). *Solar distillation of human urine to recover non-potable water and metal phosphate mineral.* Water Science & Technology, 88(2), 486-501. https://doi.org/10.2166/wst.2023.218
- Zhang, L., Liu, J., Yang, L., Yu, Z., Chen, J., Zhang, Y., & Zhou, X. (2022). *Interfacial solar evaporation toward efficient recovery of clean water and concentration of nutrients from urine with polypyrrole-based photothermal conversion films.* Resources, Conservation and Recycling, 188, 106645. https://doi.org/10.1016/j.resconrec.2022.106645
- Related low-tech and developing-world work includes solar thermal evaporation of urine for nitrogen and phosphorus recovery (e.g., field-oriented studies in Vietnam), and the earlier natural-sunlight evaporation work of Antonini et al. (2012).

---

*Note: This report covers resource-recovery research - reclaiming water and fertilizer from urine. It is not medical or therapeutic guidance, and the water-quality results described are laboratory findings on tested parameters, not a certification that any given setup produces safe drinking water.*
