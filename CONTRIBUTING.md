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

When styling with Tailwind CSS utility classes, always arrange them in separate lines via the `cn` function in the following order:

1. LAYOUT — `display`, `position`, `flex`, `grid`, `overflow`, `z-index`
2. SIZE — `w-*`, `h-*`, `min-w-*`, `max-w-*`
3. SPACING — `p-*`, `px-*`, `py-*`, `m-*`, `gap-*`
4. APPEARANCE — `bg-*`, `border-*`, `rounded-*`, `shadow-*`, `outline-*`, `ring-*`, `opacity-*`, and `text-*` when used for **color** (e.g. `text-danger`)
5. TYPOGRAPHY — `text-*` when used for **size** (e.g. `text-sm`), plus `font-*`, `whitespace-*`, `leading-*`, `tracking-*`
6. TRANSITION — `transition-*`, `duration-*`, `ease-*`, `animate-*`
7. INTERACTIVE — `hover:*`, `active:*`, `focus-visible:*`
8. DISABLED — `disabled:*`
9. STATE & VALIDATION — `aria-invalid:*`, `data-[state]:*`, `has-[...]:*`, `group-*:`, `peer-*:`
10. CHILDREN — `placeholder:*`, `file:*`, `[&_svg]:*`
