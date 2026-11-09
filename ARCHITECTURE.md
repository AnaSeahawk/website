# Architecture

## Purpose
Public-facing archive for Ana Seahawk.

## Lanes
- `index.html`: visual homepage, existing introduction and Reading Room.
- `README.md`: repository index.
- `About/`: The Life Behind the Work, with Foundations linked beneath it.
- `Ways-of-Living/`: ecological writing and The Body as Home essays.
- `Map/`: overview of available public reading.
- `work-with-ana/`: conversations, workshops and booking.
- `Foundations/`: existing lineage article, reached through About; its address is preserved. Other source material remains subject to review.
- `The-Living-Year/`: redirect surface for the temporal framework.
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
- Public navigation is **About / Reading Room / Map / Work with Ana**. The private source container remains The Vessel.
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
