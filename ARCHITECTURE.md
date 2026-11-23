# Architecture

## Purpose
Public-facing archive for Ana Seahawk.

## Lanes
- `index.html`: Home on three doors (Gather: The Living Year · Read: The Writing · Talk: Conversations), the Soli Lunar Guide sign-up, sister sites.
- `README.md`: repository index.
- `About/`: The Life Behind the Work, with Foundations linked beneath it.
- `Shivambu/`: reader entry for introductory writing, workshops, private conversations and the Sovereign Biophysics research archive.
- `Ways-of-Living/`: The Body as Home and Home & Habitat, including Urbaculture, A Room for Living, and Place Readings under `Ways-of-Living/home-and-habitat/`. The Shivambu introduction retains its original address here and returns to the Shivambu entry.
- `Writing/`: the writing in rooms, each with one piece to begin with. `Map/` now forwards here.
- `conversations/`: one-to-one conversations, subjects and booking. `work-with-ana/` and `Consultations/` forward here, anchors kept.
- `Foundations/`: existing lineage article, reached through About; its address is preserved. Other source material remains subject to review.
- `The-Living-Year/`: the year, its calendar, the Circles in the seasons, Keeping the Year and the guide. Circle pages live beneath it (`shivambu-beginning/`, `somatic-awareness/`); their old `work-with-ana/` addresses forward.
- `The-Vessel/`: legacy companion archive retained at its existing paths; removed from homepage and Map navigation. This release opens only the reviewed story under About.
- `archive/`: draft generated living-map pilot. It uses metadata to show entries chronologically and by thread without moving the source files or replacing the reader paths.
- `ACCESS_BOUNDARIES.md`: operational meaning of `public`, `community`, and
  `private` before publishing or paid-access work.
- `Relationship/`: plant relationship notes.
- `sovereign-biophysics-distillation/`: bounded research layer.
- `tools/`: local helpers for generated website indexes and archive views.

## Public/Private Split
- Public repo keeps bounded summaries and orientation.
- Sensitive operational detail is migrated to private repo: `the-vessel`.
- Frontmatter visibility is not access control; see `ACCESS_BOUNDARIES.md`.
- Public navigation is **The Living Year / Writing / Conversations / About**. Group gatherings are Circles; one-to-ones are conversations. `sky-v1.js` writes today's Sun and Moon into any `[data-sky]` element from a Swiss Ephemeris table running to April 2028; `shape-v1.css` holds the doors, threshold and season styles. The private source container remains The Vessel.
- `site-menu-v1.css`, `navigation-v2.css` and `navigation-v2.js` provide the shared menu. The mobile menu opens with a button, closes with Escape, and leaves links available when JavaScript is disabled.

## Workflow
1. Draft and clean.
2. Add metadata (`status`, `visibility`, `claim_tier`).
3. Validate with `PUBLISH_CHECKLIST.md`.
4. Update `REVIEW_QUEUE.md`.
5. Publish in small batches.

## Guardrails
- No medical claims.
- No instruction-like operational detail in public lane.
- Preserve raw data context and chronology.
- Keep generated views subordinate to the source entries and reader paths.
