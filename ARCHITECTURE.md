# Architecture

## Purpose
Public-facing archive for Ana Seahawk.

## Lanes
- `README.md`: front door and navigation.
- `Foundations/`: worldview, lineage, orientation texts.
- `The-Living-Year/`: redirect surface for the temporal framework.
- `The-Vessel/`: displayed publicly as **The Living Record**; public companion archive for backstory, dreams, journal, and temporal framework.
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
- Public-facing language uses **The Living Record** for the companion archive and **The Vessel** for the private source/access container.

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
