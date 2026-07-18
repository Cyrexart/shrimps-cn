# Contributing to shrimps-cn

## Workflow

Every change starts on its own branch off `main` and lands via pull request. `main` stays always working.

### Branching

```
<type>/<short-description>
```
```
feat/input-group-composition
fix/input-wrapper-classname
chore/update-lefthook-config
```

### Committing

* Present tense — "Add feature," not "Added feature"
* Imperative mood — "Move cursor to...," not "Moves cursor to..."
* No prefix needed on individual commits — we merge with **Squash and Merge**, so they collapse into one commit on `main` (still viewable on the PR page)
* The **PR title** becomes that final commit, so it needs a prefix:
   * `feat` — a new feature
   * `fix` — a bug fix
   * `chore` — routine maintenance, dependencies, tooling
   * `docs` — documentation only
   * `refactor` — code changes with no external behavior change

```
branch:    feat/input-group-composition
PR title:  feat: Add InputGroup composition
```

Delete the branch after merge.

## Components file structure

Every component file must follow top-to-bottom layout order to ensure maximum readability across the project:

1. IMPORTS — External libraries, React hooks, utilities, and assets.
2. TYPES — TypeScript interfaces or types specific to this file/component.
3. VARIANTS (cva) — Tailwind variants defined using `class-variance-authority`.
4. INTERNAL SUB-COMPONENTS — Small, non-exported components used exclusively within this file.
5. HOOKS & HELPERS — Local functions scoped to this file. Follow `use*` naming convention for functions that call React hooks (`useState`, `useEffect`, `useRef`, etc.).Name Helpers (no React hooks inside) without the `use` prefix (e.g. `getInputState`, not `useInput`).
6. MAIN COMPONENT — The primary functional React component.
7. EXPORTS — Named or default export statements.

## Tailwind CSS classes

Class ordering is handled automatically — do not manually order or reorder Tailwind classes.

- `prettier-plugin-tailwindcss` runs automatically via a Lefthook pre-commit hook.
- On every commit, staged `.ts`/`.tsx` files are formatted and re-staged before the commit completes — sorting applies to `class`, `className`, and anything inside `cn()`/`cva()` calls.
- The order follows Tailwind's own official, non-configurable sort order.
- Write classes in whatever order is convenient while coding — they'll be corrected automatically on commit.
- Running `pnpm install` wires up the hook automatically via the `prepare` script — no manual setup needed.
