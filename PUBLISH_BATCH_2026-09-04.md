# Publish Batch — 2026-09-04

Status: approved for public presentation by Ana

## Approved in this batch

- `index.html`
- `styles.css`
- `sovereign-biophysics-distillation/index.html`
- `sovereign-biophysics-distillation/assets/sovereignBioCover.webp`
- `sovereign-biophysics-distillation/00-orientation/golden-lexicon.html`

## Processing notes

- Publishes the approved portrait-first homepage and cohesive identity banner.
- Replaces GitHub source links with rendered website routes.
- Adds a book-like visual frontispiece, reader routes, chapter glyphs, and archive-room navigation for Sovereign Biophysics.
- Preserves the Golden Lexicon's substantive text while completing its document structure, correcting its display-font reference, and adding clear reading-room navigation.
- Preserves the existing Kit subscription form and public social and contact links.
- Leaves all source archive prose, measurements, claims, and privacy boundaries unchanged.

## Refinement hold

Status: approved by Ana for immediate public navigation cleanup

- Keeps Mother Spirit and The Water of Life active on the homepage.
- Holds Sovereign Biophysics as **In refinement** and Foundations, Relationship, and The Vessel as **In the works**.
- Removes public links from those four room cards without removing their visual presence.
- Keeps the Sovereign Biophysics frontispiece visible as a design preview while holding every chapter, reader-route, and archive-room link closed.
- Leaves all underlying archive prose, measurements, metadata, and source files unchanged.

## Dark theme and first chapter release

Status: approved by Ana for publication on 2026-09-04

### Published surfaces

- `_config.yml`
- `theme-system-v1.css`
- `theme-init-v1.js`
- `theme-v1.js`
- `index.html`
- `sovereign-biophysics-distillation/index.html`
- `sovereign-biophysics-distillation/chapter-v1.css`
- `sovereign-biophysics-distillation/00-orientation/how-to-read-this.md`
- `sovereign-biophysics-distillation/00-orientation/how-to-read-this.html`
- `sovereign-biophysics-distillation/00-orientation/golden-lexicon.html`
- `sovereign-biophysics-distillation/assets/archive-field-plate-v1.png`
- `sovereign-biophysics-distillation/assets/archive-field-plate-v1.webp`
- `sovereign-biophysics-distillation/assets/archive-field-plate-dark-v1.png`
- `sovereign-biophysics-distillation/assets/archive-field-plate-dark-v1.webp`

### Processing notes

- Adds a standards-based light and dark theme using `color-scheme`, `prefers-color-scheme`, a keyboard-accessible manual toggle, and one persisted site-wide preference.
- Publishes the approved book-like edition of **How to Read This Archive**, including separate light and dark field plates.
- Opens that chapter from the Sovereign Biophysics index while keeping every other chapter, reader route, and archive-room card non-clicking and visibly in refinement.
- Excludes the Markdown source from Jekyll output so it cannot overwrite the designed HTML at the chapter’s public URL.
- Uses release-versioned asset filenames so newly deployed files cannot be masked by Cloudflare’s cached 404 responses.
- Preserves the chapter’s single-subject boundary, distinction between kinds of knowing, and statement that the archive is not instruction or medical guidance.
- Leaves Mother Spirit and The Water of Life open on the homepage and leaves the four internal room cards held closed.
