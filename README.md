# Ana Seahawk

Living as Art.

[anaseahawk.com](https://anaseahawk.com/)

- [About](https://anaseahawk.com/About/): The Life Behind the Work, with Foundations and Freedom Is Love.
- [Reading Room](https://anaseahawk.com/#reading-room): Ways of Living and Sovereign Biophysics.
- [Map](https://anaseahawk.com/Map/): the available reading and its connections.
- [Work with Ana](https://anaseahawk.com/work-with-ana/): conversations and workshops.

## Maintenance

GitHub Pages serves the static HTML from `main`. Preserve existing article addresses. Source Markdown and test tooling are excluded where configured in `_config.yml`; repo visibility still controls access to source files.

`ARCHITECTURE.md` describes the current lanes. `REVIEW_QUEUE.md` and dated publish batches track releases. Only explicitly reviewed material is released.

Navigation checks: install the test dependency with `npm ci --prefix tests`, serve this directory on localhost port 18770, then run `node tests/navigation.mjs`. `ANA_TEST_BASE_URL` can point to another local server or the live site; `ANA_TEST_CHROME` selects an installed Chromium executable. `ANA_PLAYWRIGHT_MODULE` can select an existing Playwright module when using shared tooling.
