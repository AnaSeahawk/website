# Phoenix development roadmap

- **Updated** · 2026-11-25
- **Current phase** · 4. Prepare the December 19 recording
- **Immediate milestone** · December 19, 2026 presentation and personal recording
- **Next action** · Rehearse from the revised live reader page. Develop the personal reflection and any chart interpretation for Phoenix CXXXVI with Ana.

At the start of each Phoenix session, read this file and take the first unchecked task whose dependencies are met. On completion, check the task, link its evidence or commit, date any new decisions, and update **Current phase** and **Next action**. Keep proposed choices marked until Ana reviews them. The original context handoff, supplementary handoff and November 25 Second Editorial and Development Review are in Ana’s Drive. The second review and Ana’s confirmation of the live wheel guide this revision. Cite their sections when needed and keep personal records and unpublished recording material in their appropriate private locations.

## Where the work stands

- [x] Reviewed the original handoff, including the draft educational text, worked example, six-plate proposal and verification list. Reviewed the supplementary handoff, including both Mermaid diagrams, the three-part architecture, and the editorial and artistic direction.
- [x] Audited the public website checkout at `adfb103` and checked the First Notebook. Located the shared sky display, page patterns, theme, navigation and browser test harness. Found an existing command-line Phoenix calculator in the parent workspace.
- [x] Built an interactive zodiac-wheel study with the origin, first arc, progressive pattern, complete figure and December passage. Updated the wheel with all twelve zodiac glyphs. The prototype's controls and displayed values passed a scripted check. The glyph revision lives with the conversation visualization. Its base source is in the parent workspace at `output/phoenix-visual-study/phoenix-visual-study.html`. It is a reference for the instrument and some plates, with production assets still to create.
- [x] Recovered the source chart and its recorded solar longitude, 9°52′26″ Scorpio. Its printed UTC offset agrees with the tested Saskatchewan IANA rules for the chart date. Swiss Ephemeris 2.10.03 reproduces the natal longitude within one arcsecond. Use the chart’s recorded longitude for the worked example.
- [x] Reproduced P1 through P136 using the chart anchor and Swiss Ephemeris data files. P136 falls at 28º Sagittarius (27°52′26″ Sagittarius) on December 19, 2026 at about 12:42:28 p.m. Oaxaca time (18:42:28 UTC, rounded). A separate root search using Moshier checks the transit within 0.2 seconds. The revised wheel and plate drafts use the exact chart input.
- [x] Built the reusable [longitude and zodiac module](phoenix/geometry.mjs) with four passing [geometry tests](../tests/phoenix-geometry.mjs).
- [x] Drafted the six spoken sections and calculated all 135 elapsed passages in UTC, with the first ten open and the rest grouped by decade in Ana’s local review copy. The first passage, the two full returns, and why Oaxaca is on the December slide now have a place in the narration.
- [x] Published the illustrated reader edition with the interactive wheel and scalable drawings, 135 past passages and 26 future passages. Verified the reader path from The Living Year. Release commit `cbdf2ad`. [The Phoenix](https://anaseahawk.com/The-Living-Year/phoenix/)
- [x] Published Ana’s approved opening and removed the closing illustration. The closing stands as prose.
- [x] Ana confirmed on November 25 that the live interactive wheel is visible and the figure-building controls work. [Explore the wheel](https://anaseahawk.com/The-Living-Year/phoenix/#phoenix-visual-study)
- [x] Prepared the second reader revision for Ana’s review. The first-person worked example, origins, recurrence plate, practice section and factual December entry are in the same page. Verified the three Sagittarius crossings and P180 against Swiss Ephemeris.
- [x] Ana approved the second reader revision for publication on November 25. Personalization has its own later increment.

## What to reuse

| Existing work | Use in Phoenix |
| --- | --- |
| [The Living Year](index.html), [Keeping the Year](keeping-the-year/index.html), and [Living Year styles](living-year-v1.css) | Reuse the page shell, seasonal palette, zodiac glyph treatment, captions and responsive figure patterns. The seasonal wave, analemma and notebook drawing show how the site teaches with diagrams. |
| [The Solar Journal: A First Notebook](https://github.com/AnaSeahawk/living-year/blob/main/notebook/first-notebook.md) | Follow the degree ruler, year strip and nested Sun-to-Moon wheel as a teaching model. Each figure advances the same example by one step. |
| [Sky line](../sky-v1.js) | Reuse the optional current-sky display and its ordinal notation conventions. It interpolates twelve-hour Sun and Moon samples from November 2026 into April 2028. Use a separate ephemeris solver for historical and future personal passages. |
| Parent workspace `.agents/skills/phoenix-calculator/scripts/phoenix.py` and `scripts/run` | Reuse as the starting reference for integer longitude arithmetic, sequence solving, ordinal formatting, time-zone display and the Aries-ingress AM convention. Check ephemeris backend flags and compare fixtures before treating it as the production reference. |
| [Theme tokens](../theme-system-v1.css), [early theme setup](../theme-init-v1.js), [theme controls](../theme-v1.js), [navigation](../navigation-v2.js), and [browser checks](../tests/navigation.mjs) | Use the existing site theme and menu. Extend the browser test patterns for the new route, figure layout and controls. |
| [Live wheel implementation](phoenix/wheel-v1.mjs), [shared geometry](phoenix/geometry.mjs), and the second review | Extend the functioning renderer and its input model. Use the same longitude arithmetic for the new recurrence plate. |

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
- [x] Record the [December transit fixture](../tests/fixtures/phoenix-december-2026.json). Replay its final crossing with the existing solar solver after 2026-12-18 UTC, using the verified Swiss data-file backend and rounding to the nearest second. Generate the wheel and plate draft positions from the same anchor and longitude module.
- [x] Test P0, P1, wraparound and sign boundaries, cardinal versus ordinal degrees, distinct points, closure and P136. Run `node --test tests/phoenix-geometry.mjs` from the website repo. The positional fixture uses the source chart’s recorded solar longitude.

**Complete when** a later session can rerun the checks, trace the natal anchor and numbering to their documented sources, and reproduce the passage data used by the presentation. The plate sequence and instrument can then use the same verified coordinates.

### 2. Settle the page outline and develop the text

**Depends on** the route review and the verified foundation for worked numbers. Draft the outline while source verification proceeds.

- [x] Use the approved reader preview under The Living Year. The live page connects the personal practice to Ephemeris in the closing section.
- [x] Draft the spoken sequence around the points and their meaning. The history distinguishes the documented solar-return tradition, the proposed 138-year Archaix interval, and the personal 138° practice described in the Solar Journal reference.
- [x] Revise the existing worked example in first person and rename the table section **My life in Phoenix passages**. Preserve the approved opening, the journal marker lines and the historical tables. Keep mathematics, personal observation and astrological interpretation distinct.
- [x] Draft **Keeping the Phoenix** as an emerging practice. Use a contextual Ephemeris or existing journal link and leave room for each person’s way of observing.
- [x] Move the historical material below the illustrated explanation as **Origins of the Phoenix**. Preserve the references and distinguish Ptolemy’s timing, Abū Maʿshar’s solar revolutions, Archaix’s proposed chronological interval, and Ana’s angular practice.
- [x] Review the proposed order from opening through illustrated method and recurrence, origins, wheel, dates, practice, December entry and calculation notes. Update the contents links and keep the ten-year table collapsed.
- [ ] Agree on the amount of mathematics for beginners, the personal details to include, and which material belongs in the presentation versus the page.

**Complete when** Ana can review one readable draft with a caption and purpose for each plate, and the intended page and presentation text are identified.

### 3. Refine the educational plates and add the recurrence

**Depends on** the chart-derived geometry and teaching sequence. Review the visuals and captions together before the presentation artwork.

- [x] Prepare a conversation review draft of all six captioned diagrams, a corrected interactive wheel and a side-by-side sunflower comparison. The November 25 review includes the draft plates. The list below tracks the plate masters and the prose closing.

- [ ] **Point of Origin** · locate the natal Sun on the zodiac.
- [ ] **The Solar Arc** · show the measured arc and its destination, with a distinct treatment for the connecting chord.
- [ ] **The Unfolding Pattern** · show successive passages using the same wheel and scale.
- [ ] **Complete Phoenix Geometry** · show the completed figure and the return to origin.
- [ ] **The Personal Passage** · highlight the verified December point within the full figure and explain its place in the repeating pattern.
- [x] Keep the closing as prose. The former timeline was removed at Ana’s request.
- [x] Add **When the geometry returns**. Draw the complete star polygon with a single shared point for P16, P76 and P136 at 28º Sagittarius (27°52′26″). Label their verified dates and ages 6, 29 and 52, with 23 solar revolutions between them.
- [x] Cross-reference the natal longitude at P0, P60 and P120. Calculate P180 precisely if printing a date. Label completed solar revolutions and leave biographical associations for Ana’s recollection.
- [x] Keep both sunflower drawings. Briefly explain the 60-step closure of 138° and why the ideal, irrational golden-angle sequence has no exact return. Label the sunflower as a geometrical model.

**Complete when** the published plates and the recurrence plate have reusable vectors where applicable, zodiac glyphs, captions and accessible text equivalents. Check them as a sequence, at phone width and slide size, with readable linework in light and dark. Use the supplement's fine linework and luminous colour direction, with geometry determining the technical marks.

### 4. Prepare the December 19 presentation

**Depends on** Phase 1 verification, the Phase 2 text and the presentation versions of the Phase 3 plates. This is the deadline path. The website and complete calculator can follow it.

- [x] Established that the website page is the presentation. The historical rehearsal draft informed the reader edition.
- [x] Published the reasons for keeping dates and the historical context of natal timing and annual returns. Collapsed the full ten-year passage list by default in reader release `6fdc59a`.
- [ ] Rehearse by screen-sharing the live page.
- [x] Prepare **Phoenix CXXXVI** using the verified December fixture. The factual reference is on the main page.
- [ ] Add Ana’s approved reflection and recording when available.
- [ ] Verify the event and any chart interpretation included, beginning with the Sun and soli-lunar relationship. Check the Moon's sign, relevant angles and aspects, and house or declination claims if used. Keep the chart notes with the private presentation material.
- [ ] Review the recording format, length, and which excerpts or visuals Ana may want to share. Keep the transit instant, recording time and any publication date distinct.

**Complete when** Ana can screen-share the verified and reviewed website page from start to finish and has the recording and sharing decisions in hand.

### 5. Build the page and interactive instrument

**Depends on** the approved route, reviewed copy and shared geometry. Use the presentation assets once ready.

- [x] Assemble the approved reader page in the existing site shell with the complete educational sequence, accessible captions, navigation links and theme-aware vector plates.
- [x] Interactive geometry demonstration is live and functional. Ana confirmed the wheel and figure-building controls. The HTML’s initial hidden state is a progressive enhancement fallback. The initialized module reveals the control and its link. Preserve the demonstration and investigate only a reproducible issue.
- [ ] Stage 1 · Add natal longitude input in sign, degrees, minutes and seconds, arbitrary passage selection, previous and next controls, and reset. Reuse the current wheel, slider and progression, with visible current and natal points and no duplicate chords after closure. Report cumulative arc, completed revolutions and repeating position. Retain Ana’s worked preset and keep its December date from appearing on a visitor’s P136.
- [ ] Stage 2 · Add ephemeris-based personal dates using birth date, time and place, with historical civil-time resolution, observation-zone display, and verified fixtures. Keep birth details local where possible. The geometry-only stage shows longitudes and sequence positions.
- [ ] Stage 3 · Consider optional event chart, natal comparison and interpretation after the geometry and timing stages are stable.
- [x] Publish the companion sunflower visual within the illustrated talk. Compare the exact 138° Phoenix step on a fixed ring with the golden angle (about 137.508°) in an outward-growing seed-head model. Show the 0.492° difference and the 60-step return of the Phoenix wheel. Label the seed head as a model and avoid claiming that 138° was derived from the golden angle. [Sunflower head growth model](https://www.sciencedirect.com/science/article/pii/S0025556403001500) · [Observed sunflower seed-head patterns](https://pubmed.ncbi.nlm.nih.gov/27293788/)
- [ ] Review supported inputs, unknown birth times, ephemeris coverage and licensing before the date-solving increment. Protect time for the December 19 materials.

**Complete when** the static page and geometry explorer work together on the proposed route. Track the personalized calculator independently until it handles supported inputs, boundary cases and error states with reproducible results.

### 6. Maintain passage data, integrate and review

**Depends on** Phase 5 for each release increment. The first review can cover the page and wheel while personal calculations are still in development.

- [ ] Unify the date data or document a simple regeneration process. Derive as-of counts and previous/next labels, retain stable passage IDs and permanent event records, label UTC and local dates clearly, and make the forward date range explicit.
- [ ] Extend the existing browser suite for the route and its inbound and return links. Check 320, 390 and 1440 px widths, light and dark themes, keyboard controls, reduced motion, no-JavaScript reading, glyph rendering, asset loading and overflow.
- [x] Review copy and visuals with Ana, record the approved release, and verify the canonical route and assets.
- [ ] Revisit the recording archive after the first recording. Record the agreed destination if Ana wants a continuing public or private record.

**Complete when** the approved increment passes the browser checks, meets the site's review process and has a verified canonical route. Record the release and the next open increment here.

## Decisions and review points

| Date | Status | Decision or question |
| --- | --- | --- |
| 2026-11-25 | Established | Visuals carry the educational sequence. Use zodiac glyphs and carry the approved interactive wheel into the site. |
| 2026-11-25 | Established | Use **Ana Seahawk** for all display names, including chart labels, captions, filenames and metadata. Prepare any chart artwork from verified data under that name. |
| 2026-11-25 | Established | Use Ana’s first-person voice for the worked example, as requested in the second review. Keep the geometry reader-centred and explain Oaxaca in relation to the local clock and any chart drawn for the passage. |
| 2026-11-25 | Established | Keep the existing sunflower comparison and refine the explanation of closure. Build on the functioning wheel. |
| 2026-11-25 | Established | Prioritize the December 19 presentation. Use the public Phoenix page as the single reading and speaking edition. Apply the supplemental editorial and artistic direction to broader website work as well. |
| 2026-11-25 | Proposed | Place Phoenix under The Living Year. Review the link placement, section labels and how the page introduces Ephemeris. |
| 2026-11-25 | Open | Confirm the depth of the worked example, the personal material usable on the page, the final plate treatment and the recording format. |
| 2026-11-25 | Open | Confirm the personalized instrument's birth-input policy, scope and ephemeris approach after the geometry explorer is tested. |
