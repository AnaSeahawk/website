# Phoenix development roadmap

- **Updated** · 2026-11-25
- **Current phase** · 1. Verify the method and establish the calculation foundation
- **Immediate milestone** · December 19, 2026 presentation and personal recording
- **Next action** · Record a reproducible December transit fixture, then connect the approved wheel and the plate drafts to the tested longitude module. Compare the numbering with an independent historical passage record when available.

At the start of each Phoenix session, read this file and take the first unchecked task whose dependencies are met. On completion, check the task, link its evidence or commit, date any new decisions, and update **Current phase** and **Next action**. Keep proposed choices marked until Ana reviews them. The original Phoenix context handoff and the November 25 supplementary handoff remain the source material in Ana's Drive. Cite their sections when needed and keep personal records and unpublished recording material in their appropriate private locations.

## Where the work stands

- [x] Reviewed the original handoff, including the draft educational text, worked example, six-plate proposal and verification list. Reviewed the supplementary handoff, including both Mermaid diagrams, the three-part architecture, and the editorial and artistic direction.
- [x] Audited the public website checkout at `adfb103` and checked the First Notebook. Located the shared sky display, page patterns, theme, navigation and browser test harness. Found an existing command-line Phoenix calculator in the parent workspace.
- [x] Built an interactive zodiac-wheel study with the origin, first arc, progressive pattern, complete figure and December passage. Updated the wheel with all twelve zodiac glyphs. The prototype's controls and displayed values passed a scripted check. The glyph revision lives with the conversation visualization. Its base source is in the parent workspace at `output/phoenix-visual-study/phoenix-visual-study.html`. It is a reference for the instrument and some plates, with production assets still to create.
- [x] Recovered the source chart and its recorded solar longitude, 9°52′26″ Scorpio. Its printed UTC offset agrees with the tested Saskatchewan IANA rules for the chart date. Swiss Ephemeris 2.10.03 reproduces the natal longitude within one arcsecond. Use the chart’s recorded longitude for the worked example.
- [x] Reproduced P1 through P136 using the chart anchor and Swiss Ephemeris data files. P136 falls at 28º Sagittarius (27°52′26″ Sagittarius) on December 19, 2026 at about 12:42:28 p.m. Oaxaca time (18:42:28 UTC, rounded). A separate root search using Moshier checks the transit within 0.2 seconds. The wheel preview still uses the earlier rounded input.
- [x] Built the reusable [longitude and zodiac module](phoenix/geometry.mjs) with four passing [geometry tests](../tests/phoenix-geometry.mjs).
- [ ] Create the educational copy, full plate set, site page and instrument. The public site has no Phoenix page or standalone Ephemeris route in the audited checkout.

## What to reuse

| Existing work | Use in Phoenix |
| --- | --- |
| [The Living Year](index.html), [Keeping the Year](keeping-the-year/index.html), and [Living Year styles](living-year-v1.css) | Reuse the page shell, seasonal palette, zodiac glyph treatment, captions and responsive figure patterns. The seasonal wave, analemma and notebook drawing show how the site teaches with diagrams. |
| [The Solar Journal: A First Notebook](https://github.com/AnaSeahawk/living-year/blob/main/notebook/first-notebook.md) | Follow the degree ruler, year strip and nested Sun-to-Moon wheel as a teaching model. Each figure advances the same example by one step. |
| [Sky line](../sky-v1.js) | Reuse the optional current-sky display and its ordinal notation conventions. It interpolates twelve-hour Sun and Moon samples from November 2026 into April 2028. Use a separate ephemeris solver for historical and future personal passages. |
| Parent workspace `.agents/skills/phoenix-calculator/scripts/phoenix.py` and `scripts/run` | Reuse as the starting reference for integer longitude arithmetic, sequence solving, ordinal formatting, time-zone display and the Aries-ingress AM convention. Check ephemeris backend flags and compare fixtures before treating it as the production reference. |
| [Theme tokens](../theme-system-v1.css), [early theme setup](../theme-init-v1.js), [theme controls](../theme-v1.js), [navigation](../navigation-v2.js), and [browser checks](../tests/navigation.mjs) | Use the existing site theme and menu. Extend the browser test patterns for the new route, figure layout and controls. |
| Original educational draft, supplementary brief and wheel study | Start from the existing text, plate sequence, Mermaid architecture and tested interaction. Move production geometry into a shared module before generating final figures. |

## Proposed site architecture for Ana's review

Use `The-Living-Year/phoenix/index.html` at **`/The-Living-Year/phoenix/`** as the single Phoenix entry. Link to it from [The Living Year](index.html#calendar) near the calendar and guide material. Give it a parent link back to The Living Year. Use the established site navigation, theme and page shell.

| Section | Reader's path |
| --- | --- |
| Opening | A short orientation and a large figure that establishes the natal Sun as the point of origin. |
| The Method · `#method` | The complete plate sequence and one worked example. Explain angular steps and elapsed time in the order the figures make them visible. |
| The Instrument · `#instrument` | A progressive, keyboard-accessible zodiac wheel. Add personal passage calculation as a later increment once its ephemeris and inputs are verified. |
| The Practice · `#practice` | Connect observation and recording to **Ephemeris — The Soli-Lunar Journal**. Include a short journaling example or link to a reviewed record if available. Decide on a separate Ephemeris route when there is a concrete resource to link. |

The three names are working section labels as well as the agreed conceptual relationships. Keep the route proposal and labels open for Ana's review. Production geometry and rendering can live beside the page or under the site's existing asset conventions. Math should be usable independently of the browser DOM, styling, ephemeris provider and personal record.

## Implementation phases

### 1. Verify the method and build the calculation foundation

- [x] Locate the source chart and compare its solar longitude and printed UTC offset with an ephemeris calculation and historical timezone rules.
- [ ] Compare the documented 138° step and P0 numbering with an independent historical Phoenix record if one is located. The archive definition and the existing calculator agree on the step, and a natal-to-P136 calculation reproduces the documented December date.
- [x] Reproduce the chronology from the natal anchor through P136 using apparent geocentric tropical longitude, check that the Swiss data-file backend was active, and cross-check the December instant with a separate root search.
- [ ] Verify the AM convention if the presentation or instrument displays it.
- [x] Create a browser-ready longitude module using integer arcseconds, separate from time conversion and solar-transit solving.
- [ ] Record the reproducible December transit fixture. Use the same inputs for the written example, wheel and plates.
- [x] Test P0, P1, wraparound and sign boundaries, cardinal versus ordinal degrees, distinct points, closure and P136. Run `node --test tests/phoenix-geometry.mjs` from the website repo. The positional fixture uses the source chart’s recorded solar longitude.

**Complete when** a later session can rerun the checks, trace the natal anchor and numbering to their documented sources, and reproduce the passage data used by the presentation. The plate sequence and instrument can then use the same verified coordinates.

### 2. Settle the page outline and develop the text

**Depends on** the route review and the verified foundation for worked numbers. Draft the outline while source verification proceeds.

- [ ] Review the proposed route, section labels, entry link and Ephemeris relationship with Ana.
- [ ] Refine the original handoff's educational draft before final artwork. Pair each concept with a figure, a short caption and a text equivalent. Preserve Ana's concrete observations, stories and short statements. Keep mathematical calculation, personal observation and interpretation distinct.
- [ ] Agree on the amount of mathematics for beginners, the personal details to include, and which material belongs in the presentation versus the page.

**Complete when** Ana can review one readable draft with a caption and purpose for each plate, and the intended page and presentation text are identified.

### 3. Produce the six educational plates

**Depends on** Phase 1 coordinates and Phase 2's agreed teaching sequence. Sketch composition in parallel with the text.

- [ ] **Point of Origin** · locate the natal Sun on the zodiac.
- [ ] **The Solar Arc** · show the measured arc and its destination, with a distinct treatment for the connecting chord.
- [ ] **The Unfolding Pattern** · show successive passages using the same wheel and scale.
- [ ] **Complete Phoenix Geometry** · show the completed figure and the return to origin.
- [ ] **The Personal Passage** · highlight the verified December point within the full figure and explain its place in the repeating pattern.
- [ ] **Living the Cycle** · connect the observed passage to a journal entry or recording in Ephemeris.

**Complete when** all six plates have reusable vector masters where applicable, zodiac glyphs, captions and accessible text equivalents. Check them as a sequence, at phone width and slide size, with readable linework in light and dark. Use the supplement's fine linework and luminous colour direction, with geometry determining the technical marks.

### 4. Prepare the December 19 presentation

**Depends on** Phase 1 verification, the Phase 2 text and the presentation versions of the Phase 3 plates. This is the deadline path. The website and complete calculator can follow it.

- [ ] Assemble the short educational talk, six plates and worked example into a recording-ready sequence with speaking cues.
- [ ] Verify the event and any chart interpretation included, beginning with the Sun and soli-lunar relationship. Check the Moon's sign, relevant angles and aspects, and house or declination claims if used. Keep the chart notes with the private presentation material.
- [ ] Review the recording format, length, and which excerpts or visuals Ana may want to share. Keep the transit instant, recording time and any publication date distinct.

**Complete when** the verified event material, slides and a rehearsal-ready outline are available to Ana before the recording, with any sharing decision recorded separately.

### 5. Build the page and interactive instrument

**Depends on** the approved route, reviewed copy and shared geometry. Use the presentation assets once ready.

- [ ] Assemble the page in the existing site shell with the complete static educational sequence, accessible captions, navigation links and theme-aware assets.
- [ ] Port the approved wheel interaction into the site. Support one passage at a time, jumping to the full figure and the worked example, and a readable current position. Use the chart-derived input and provide a static fallback for the educational sequence.
- [ ] Draft a companion sunflower visual next to the wheel. Compare the exact 138° Phoenix step on a fixed ring with the golden angle (about 137.508°) in an outward-growing seed-head model. Show the 0.492° difference and the 60-step return of the Phoenix wheel. Label the seed head as a model and avoid claiming that 138° was derived from the golden angle. [Sunflower head growth model](https://www.sciencedirect.com/science/article/pii/S0025556403001500) · [Observed sunflower seed-head patterns](https://pubmed.ncbi.nlm.nih.gov/27293788/)
- [ ] Plan and build personal calculations as a separate increment. Agree on input requirements, treatment of unknown birth times, historical timezone resolution, ephemeris coverage and licensing, and how birth details will be handled. Validate previous and upcoming passages against verified fixtures. An event chart remains optional.

**Complete when** the static page and geometry explorer work together on the proposed route. Track the personalized calculator independently until it handles supported inputs, boundary cases and error states with reproducible results.

### 6. Integrate, review and release

**Depends on** Phase 5 for each release increment. The first review can cover the page and wheel while personal calculations are still in development.

- [ ] Extend the existing browser suite for the route and its inbound and return links. Check 320, 390 and 1440 px widths, light and dark themes, keyboard controls, reduced motion, no-JavaScript reading, glyph rendering, asset loading and overflow.
- [ ] Review copy and visuals with Ana and follow the site's [review queue](../REVIEW_QUEUE.md) and [publish checklist](../PUBLISH_CHECKLIST.md). Verify the canonical route and assets after an approved release.
- [ ] Revisit the recording archive after the first recording. Record the agreed destination if Ana wants a continuing public or private record.

**Complete when** the approved increment passes the browser checks, meets the site's review process and has a verified canonical route. Record the release and the next open increment here.

## Decisions and review points

| Date | Status | Decision or question |
| --- | --- | --- |
| 2026-11-25 | Established | Visuals carry the educational sequence. Use zodiac glyphs and carry the approved interactive wheel into the site. |
| 2026-11-25 | Established | Use **Ana Seahawk** for all display names, including chart labels, captions, filenames and metadata. Prepare any chart artwork from verified data under that name. |
| 2026-11-25 | Proposed | Place a golden-angle sunflower comparison beside the interactive wheel. Review its teaching sketch before final artwork. |
| 2026-11-25 | Established | Prioritize the December 19 presentation. Apply the supplemental editorial and artistic direction to broader website work as well. |
| 2026-11-25 | Proposed | Place Phoenix under The Living Year. Review the link placement, section labels and how the page introduces Ephemeris. |
| 2026-11-25 | Open | Confirm the depth of the worked example, the personal material usable on the page, the final plate treatment and the recording format. |
| 2026-11-25 | Open | Confirm the personalized instrument's birth-input policy, scope and ephemeris approach after the geometry explorer is tested. |
