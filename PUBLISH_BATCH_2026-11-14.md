# Publish Batch — 2026-11-14

## Approval and scope

Ana explicitly approved publishing the latest Urbaculture draft: “Okay can we push this into the website and work on the next piece”. The essay is preserved verbatim in Markdown and reader-facing HTML under `Ways-of-Living/home-and-habitat/urbaculture`. Ways of Living and Map now link to it. The closing link reaches the existing Place Readings offer; the companion essay is not released in this batch.

## Checklist and validation

Published/public/aptopadesha metadata reflects Ana’s approved interpretation. No medical claims, treatment directions, raw measurements, private third-party records or new media are introduced. Existing patterns and author names are retained as approved. Stable filename and canonical site-relative links are used. Review queue and architecture updated.

Chromium checked the new page at 390px and 1440px widths: all 21 essay paragraphs present, correct title, no horizontal overflow, working entry link from Ways of Living, and successful responses from all local navigation destinations. Mobile screenshot reviewed. No booking form submitted. Images remain for a later reviewed addition.

## Second release — Place Readings

Ana approved the companion draft: “let’s make that all live” and requested its placement and links. Exact approved essay published in HTML and Markdown. Ways of Living, Map and Work with Ana link to it; Urbaculture leads forward to it; Place Readings returns to Urbaculture and links to the existing offer. No booking details or promises changed. Public metadata and the same checklist apply. No new images or third-party personal information. Reader prose uses generic rental language.

Validation: Chromium passed 390px and 1440px layouts in light and dark preferences, with no horizontal overflow. All 16 essay paragraphs match the approved text. Verified Ways of Living → Urbaculture → Place Readings → existing offer → Place Readings, and Map → Place Readings. Mobile screenshot reviewed.

## Third release — tidy, hosts on Airbnb, and new booking links

Approval: Ana approved the tidy as the first step of the order of work (“The tidy, I think, is a great idea”), asked for the Airbnb section (“let's add the Airbnb detail”), reviewed the hosts wording in a local preview through three revisions (“This is good”), renamed the Cal.com events and confirmed the prices, then said “Publish”.

Scope:
- Place Readings: new section “For hosts on Airbnb” with a 20-minute booking card; Markdown source mirrors it. Experience is described without naming private people or towns (“a client in British Columbia”, “a host in Vietnam”).
- Work with Ana: booking cards point to `cal.com/anaseahawk/20minutes`, `/60minutes` and `/90minutes`; the 90-minute card is now open; card wording matches the Cal.com descriptions. The previous event addresses no longer exist on Cal.com. Place Readings anchor is `#place-readings`; `#biophilia` still resolves.
- Home: the Circle card no longer says “date to be announced”. “Shivambu (urine therapy)” stays by Ana's decision, for newcomers.
- Women of Alchemy: removed the closing pointer to the Inanna chapter, which is not open (the link returned 404). To be restored when that chapter opens.
- `_config.yml`: unlinked Markdown drafts (Relationship, living-ferments, The-Vessel, archive, The-Living-Year, Home and Habitat sources) and repository working documents are excluded from the build. Files stay in the repository.

Validation: hosts section viewed in the browser at desktop and phone widths; the three Cal.com addresses return 200. `tests/navigation.mjs` not run (Playwright not installed in `tests/`). The `_config.yml` exclusions are confirmed on the live build after the push.
