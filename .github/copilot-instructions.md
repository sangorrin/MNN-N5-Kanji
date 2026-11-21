# Copilot instructions

## Project overview

MNN N5 Kanji is a static React/Vite PWA for Spanish-speaking learners of Minna no Nihongo N5. It is also packaged for Android and iOS with Capacitor. There is no application backend or database: study counts, favorites, and sound preferences are stored in the browser's `localStorage`.

## Build, run, and validation

Install dependencies using the same compatibility flag used by CI:

```bash
npm install --legacy-peer-deps
```

Available commands:

```bash
npm run dev       # Vite development server at http://localhost:3000
npm run build     # Production build in dist/
npm run preview   # Serve the production build locally
npm run lint      # TypeScript check (tsc --noEmit)
npm run clean     # Remove dist/ and server.js
```

There is no configured test runner or automated test suite, so there is no single-test command. For a focused change, run `npm run lint` and `npm run build`; exercise UI behavior through the Vite dev server.

The GitHub Pages workflow builds with `npm run build`. Native release workflows build the web assets first, then run `npx cap sync android` or `npx cap sync ios`; Android uses JDK 21 and iOS produces unsigned archives.

## Architecture

- `src/main.tsx` mounts `App.tsx`. `App` is the central state coordinator: it owns the selected lesson, study mode, selected kanji, search/favorites filters, navigation between linked content, and persisted study-count updates.
- The header selects the top-level study mode (`kanji`, `flashcards`, `sentensu`, `tango`, `bunpo`, or `ref`). `LessonSelector` controls the active lesson. `App` conditionally renders the corresponding view and passes callbacks so vocabulary, sentences, grammar, and reference entries can navigate back to kanji or another mode.
- `src/data/` is the static content layer. `kanji_all.ts` is the canonical combined kanji list; `index.ts` derives lookup maps and exports lesson, vocabulary, grammar, sentence, and reference data. Cross-content links use lesson IDs and kanji characters (`targetKanji`).
- `src/utils/storage.ts` is the persistence boundary for study counts, favorites, and sound settings. Keep storage key changes deliberate because they affect existing users' browser data.
- Kanji stroke animation is loaded on demand from KanjiVG via jsDelivr with a GitHub raw-content fallback, parsed and cached by `src/utils/kanjiSvg.ts`. Pronunciation uses the browser Web Speech API and lightweight Web Audio effects from `src/utils/audio.ts`.
- Vite emits a relative-path static build (`base: './'`) so the same `dist/` output works on GitHub Pages and inside Capacitor. Tailwind CSS is integrated through `@tailwindcss/vite`.

## Repository-specific conventions

- Lesson IDs are `pre`, `l01` through `l25`, with `all` used only for the aggregate view. Preserve these IDs when adding or moving content because filtering, navigation, and generated lesson counts depend on them.
- Content is intentionally modeled as typed static data in Spanish/Japanese. Follow the interfaces in `src/data/types.ts`; use existing `segments`, `targetKanji`, `lessonId`, and stable item IDs instead of introducing parallel link formats.
- `src/data/kanji_all.ts` and `src/data/lessons.ts` are generated/assembled data outputs. When changing the kanji catalog or its lesson assignment, inspect and use `scripts/build_all_data.py` rather than making an isolated change that can be overwritten.
- The data builder reads the original kanji source files and vocabulary, assigns each kanji to its first vocabulary lesson, adds fallback assignments for unmatched kanji, and rewrites both the combined kanji list and lesson metadata. Run it from the repository root with `python scripts/build_all_data.py` only when intentionally regenerating those outputs.
- UI state changes that select related content should go through the callbacks in `App.tsx` so the active lesson, mode, highlight, and selected kanji remain synchronized.
- Flashcards maintain a local shuffled deck and reset their position when the filtered kanji list changes. Preserve keyboard behavior: Space/Enter flips, Right Arrow or `j` advances, and Left Arrow or `k` goes back.
- Keep KanjiVG and external-link behavior intact: stroke assets are remote, Jisho links open in a new tab, and the app must remain usable when browser speech or remote SVG loading is unavailable.
- Do not alter the `DISABLE_HMR` handling in `vite.config.ts` casually; AI Studio/agent editing relies on it to disable file watching and prevent flicker.
