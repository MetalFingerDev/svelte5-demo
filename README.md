# svelte5-demo

Everything you need to build a Svelte 5 demo project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
pnpm dlx sv create --template minimal --types ts --add prettier eslint mdsvex mcp="ide:vscode+setup:remote" --install pnpm .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

---

## Developer quick start — resume a session fast ⚡

If you're returning to this project or picking it up in a new session, follow these steps:

1. Checkout the repository and change into the project folder:

   ```sh
   cd c:\projects\svelte
   pnpm install
   ```

2. Start development server and open: `http://localhost:5173/`

   ```sh
   pnpm run dev
   ```

3. Useful checks & formatting:
   - `pnpm run check` — run `svelte-check` to find Svelte/TS issues
   - `pnpm run format` — fix formatting with Prettier
   - `pnpm run lint` — run ESLint
   - `pnpm run build` — create a production build

4. Quick file map:
   - `src/app.css` — design tokens & global interactive styles
   - `src/lib/components/Header.svelte` — top navigation header
   - `src/lib/components/Card.svelte` — modular card shell
   - `src/lib/components/ThemeSwitcher.svelte` — theme toggle logic
   - `src/routes/+layout.svelte`, `src/routes/+page.svelte` — layout & homepage

5. Notes:
   - Prefer Svelte 5 runes (`$state`, `$props`) and the `#snippet` / `@render` patterns for component composition.
   - Use `static/` for local images to avoid relying on external CDNs during dev.
