# Contributing to shrimps-cn
## Commiting 
* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Consider starting the commit message with an applicable prefix:
  * `feat`: A new feature (triggers a **minor** version bump)
  * `fix`: A bug fix (triggers a **patch** version bump)
  * `chore`: Routine maintenance, dependency updates, or tooling configuration (no version bump)
  * `docs`: Documentation changes only (no version bump)
  * `refactor`: Code improvings that don't change the external functional(triggers a **patch** version bump)
## Components file structure
Every component file must follow this strict top-to-bottom layout order to ensure maximum readability across the project:

1. **IMPORTS** — External libraries, React hooks, utilities, and assets.
2. **TYPES** — TypeScript interfaces or types specific to this file/component.
3. **VARIANTS (cva)** — Tailwind variants defined using `class-variance-authority`.
4. **INTERNAL SUB-COMPONENTS** — Small, non-exported helper components used exclusively within this file.
5. **HOOKS** — Dedicated custom hooks or functions if they belong locally to this component logic.
6. **MAIN COMPONENT** — The primary functional React component.
7. **EXPORTS** — Named or default export statements.

## Tailwind CSS classes
When styling with Tailwind CSS utility classes, always arrange them in separate lines via `cn` function in the following order:

1. **LAYOUT** — `display`, `position`, `flex`, `grid`, `overflow`, `z-index`
2. **SIZE** — `w-*`, `h-*`, `min-w-*`, `max-w-*`
3. **SPACING** — `p-*`, `px-*`, `py-*`, `m-*`, `gap-*`
4. **APPEARANCE** — `bg-*`, `border-*`, `rounded-*`, `shadow-*`, `outline-*`, `ring-*`, `opacity-*`
5. **TYPOGRAPHY** — `text-*`, `font-*`, `whitespace-*`, `leading-*`, `tracking-*`
6. **TRANSITION** — `transition-*`, `duration-*`, `ease-*`, `animate-*`
7. **INTERACTIVE** — `hover:*`, `active:*`, `focus-visible:*`
8. **DISABLED** — `disabled:*`
9. **VALIDATION** — `aria-invalid:*`, `data-[state]:*`
10. **CHILDREN** — `placeholder:*`, `file:*`, `[&_svg]:*`
