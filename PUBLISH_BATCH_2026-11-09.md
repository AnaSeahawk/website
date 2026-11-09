# Publish Batch — 2026-11-09

## Approval and scope

Ana reviewed the private mobile navigation preview and approved applying it to the live website: “This looks good let's make this change and see how it feels.”

- `About/index.html` publishes The Life Behind the Work, with Foundations/Freedom Is Love beneath it. `About/the-life-behind-the-work.md` is the approved source, tagged published/public/aptopadesha.
- `Ways-of-Living/index.html` opens a short orientation and the two existing Body as Home essays. The longer introductory essay and further subjects remain in development.
- `index.html` retains the introduction, subscription form and services. Reading Room presents Ways of Living and Sovereign Biophysics. The separate Golden Lexicon spotlight and Living Record/Foundations cards are removed.
- `Map/index.html` mirrors the new hierarchy. Existing article URLs remain usable. Foundations and both Body as Home essays have explicit section return paths.
- All 19 primary HTML reading and workshop pages share About / Reading Room / Map / Work with Ana and the responsive menu in `navigation-v2.css` / `navigation-v2.js`.
- Work with Ana uses the confirmed departure wording “nomadic life with my partner since 2012.”
- Architecture, repository index and review queue reflect the released hierarchy. Source Markdown and test tooling exclusions are recorded in `_config.yml`.

## Publish checklist

1. The new story is a personal account. Body-related passages describe Ana's experience; no treatment directions, protocols or sanitation guarantees were added.
2. Personal observation remains distinct from general claims. The text matches the reviewed story.
3. Existing research and essay body text is preserved. No new clinical instructions are introduced by this navigation release.
4. No raw measurements changed.
5. Existing article addresses retained; new About and Ways of Living routes and their return links checked locally. Public verification follows the Pages deployment.
6. Stable paths: `/About/`, `/Ways-of-Living/`, `/Map/` and the existing article paths.
7. The reviewed story and navigation are explicitly approved for public release. No unrelated private material is included. Preview-only access notices and noindex directives removed.
8. Titles and section labels checked. Homepage introduction preserved verbatim.
9. `REVIEW_QUEUE.md` updated for this release.
10. Atomic release commit covers this navigation and its approved story/short orientation only.

## Validation

Chromium passed 114 combinations across 19 routes, widths 320/390/1440, and light/dark themes. Checks include horizontal overflow, menu access and Escape dismissal, About/Foundations flow, both essay return paths, theme switching, no-JavaScript navigation, preserved introduction and subscription form, and local asset responses. Third-party services were blocked during automated checks; no form submission or booking was made.

The preview's mobile/desktop visual review remains applicable; the live port preserves that design. Shared chapter changes are limited to navigation and its assets. `tests/navigation.mjs` provides a repeatable browser check; instructions are in README.

## Subsequent homepage introduction update

Ana approved the two proposed homepage paragraphs with “Yes let's do that.” The opening line “Returning to what was never absent.” is retained. The introduction names Ana as an Amaroli practitioner, independent researcher and explorer, connects her personal practice to Sovereign Biophysics, and places that inquiry within her work with plants, food, water and living spaces.

Scope: `index.html` introduction only, plus review queue and the existing browser assertion updated to the approved text. This approval does not change the proposed consultation copy on Work with Ana. The text describes personal practice without treatment claims or instructions. No raw measurements, links, filenames, forms or media changed. The existing public homepage remains the intended destination. Spelling and exact approved wording checked; release recorded in the review queue.

## Subsequent consultation introduction update

After publishing the homepage introduction, Ana requested “Ok now for the work with Ana page,” authorizing the consultation opening previously drafted in this conversation. The three reviewed paragraphs replace the original opening paragraph in `work-with-ana/index.html`. They name her Amaroli practice as the foundation of Sovereign Biophysics, describe the scope of private conversations, and retain the wider living subjects.

The practical video-call paragraph, booking links, prices, forms and workshop descriptions remain unchanged. The copy describes Ana’s personal practice and research; it adds no treatment claims, protocols or instructions. No measurements, media or filenames changed. The public destination and exact wording were reviewed; `REVIEW_QUEUE.md` records the release.

## Concise consultation revision

Ana requested removal of the repeated biographical opening and approved the replacement two-paragraph draft with “That's better.” The consultation opening now starts directly with Shivambu (Urine Therapy), Sovereign Biophysics and alchemy, followed by wider subjects including nomadic and minimalist living. This supersedes the longer consultation introduction above.

Only the three opening paragraphs were replaced with the approved two paragraphs. Existing practical details and the rest of the page remain intact. The copy names conversation subjects and the basis in personal practice; no treatment claims, instructions or measurements were introduced. Links and media references are unchanged, paragraph markup checked, and review queue updated for the same public address.
