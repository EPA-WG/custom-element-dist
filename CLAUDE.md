# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

`@epa-wg/custom-element-dist` is a **distribution and test harness** for the `@epa-wg/custom-element` library. It does not own the core source — `src/custom-element/*.js` and `*.d.ts` files are **copied from the `@epa-wg/custom-element` npm package** by `bin/postinstall.sh` at install time. Do not edit those copied files directly.

The repo exists to:
- Run tests with coverage against the library
- Build and publish the Storybook static site
- Produce the `dist/` bundle for CDN use

## Setup

```bash
yarn cache clean @epa-wg/custom-element   # if checksum mismatch on install
yarn install                               # installs deps + runs postinstall (copies src/custom-element files)
```

`postinstall` resolves `@epa-wg/custom-element` via `node -e "require.resolve(...)"` — works with both yarn PnP and node-modules linker.

## Commands

| Command | Purpose |
|---|---|
| `yarn test` | Full test suite with coverage (chromium, headless) |
| `yarn test:ff` | Same but Firefox |
| `yarn test:watch` | Interactive watch mode, browser visible |
| `yarn t` | Watch a single file: `module-url.test.stories.ts` |
| `yarn tt` | Watch a single file: `external-template.test.stories.ts` |
| `yarn storybook` / `yarn sb` | Dev storybook on port 6006 |
| `yarn build` | `tsc` + vite library build → `dist/` |
| `yarn build-storybook` | Static storybook → `storybook-static/` |
| `bash bin/build.sh` | Full CI build: clean + test + build + build-storybook |
| `bash bin/clean.sh` | Nuke `node_modules/`, `dist/`, `coverage/`, `storybook-static/` |

To run a single test file:
```bash
vitest --no-file-parallelism --watch=false src/stories/some-feature.test.stories.ts
```

## Architecture

### Source layout

```
src/
  custom-element/     ← copied from @epa-wg/custom-element by postinstall (do not edit)
    index.js          ← library entry point (used by vite build)
    custom-element.js ← core DCE implementation
    demo/             ← also copied to public/demo/
    ide/              ← web-types for IDE integration
  stories/            ← Storybook stories AND tests
  mocks/              ← MSW handlers (shared by storybook + vitest)
  material/           ← Material design theme layer (independent)
```

### Testing approach

Tests live in `src/stories/` and follow two patterns:
- `*.test.stories.ts` — Storybook stories used as vitest browser tests via `testStoryBook.ts` helper
- `*.test.ts` — standard vitest unit tests

Tests run **without file parallelism** (`--no-file-parallelism`) due to shared browser/DOM state.

Before running tests, `bin/vitest/vitest-browser-importmaps.mjs` patches the vitest browser HTML to inject import maps for `lib-root/` → `demo/lib-dir/` resolution (needed by `module-url.test.stories.ts`).

MSW is active in both Storybook and vitest. Handlers are in `src/mocks/handlers.ts`. The vitest config sets `dangerouslyIgnoreUnhandledErrors: true` to suppress MSW service worker noise.

### Build output

Vite builds in **lib mode**: entry `src/custom-element/index.js`, outputs `dist/assets/custom-element-bundle.js` (ESM) and `.cjs`. Each source file also gets its own hashed chunk via `manualChunks`.

`dist/`, `coverage/`, and `storybook-static/` are **committed to git** as compliance/release artifacts.

## Package manager

Yarn 4.12.0 with `nodeLinker: node-modules` (see `.yarnrc.yml`). Use `yarn` for all package operations, not `npm`.

## CEM Theme
Apply CEM theme styling to this existing project using the installed `@epa-wg/cem-theme` package.

Before changing styles, read the installed package-local AI instructions:
`node_modules/@epa-wg/cem-theme/dist/lib/tokens/cem-theme-ai-instructions.md`.

Follow that file's read order, token-selection rules, stylesheet setup, theme scoping, and verification checklist.
Prefer these installed Markdown docs over GitHub because they match the installed npm package version. Do not infer CEM
semantics from generated CSS values alone.