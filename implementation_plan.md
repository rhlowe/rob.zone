# Implementation Plan - Upgrade Nuxt 2 to Nuxt 4

This plan details the steps to upgrade `rob.zone` from Nuxt 2 to Nuxt 4 (using Node v24). This migration will remove the legacy Webpack and `node-sass` build pipeline, eliminating the requirement for Python 2 and compiler toolchains.

## User Review Required

> [!IMPORTANT]
> **Google Analytics Removal:** The project currently uses the legacy `@nuxtjs/google-analytics` module, which targets Universal Analytics (UA-*). Universal Analytics has been shut down by Google in favor of Google Analytics 4 (GA4). I propose removing this legacy module. If you want GA4, we can install a modern module like `nuxt-gtag` in a follow-up.
>
> **Linter Deprecation:** The current ESLint/Stylelint dependencies are specific to Vue 2 and Nuxt 2. I propose removing them for now to avoid peer dependency conflicts during the upgrade. We can set up the modern `@nuxt/eslint` module afterwards.

## Proposed Changes

### Build and Package Configuration

We will upgrade dependencies in `package.json` and replace the Webpack-based configuration with the new Vite-based `nuxt.config.ts`.

#### [MODIFY] [package.json](file:///Users/rhlowe/Code/rob.zone/package.json)
- Update scripts to standard Nuxt 3/4 scripts.
- Replace legacy `"nuxt": "^2.0.0"` with `"nuxt": "^4.0.0"`.
- Replace legacy `"node-sass": "^4.13.1"` and `"sass-loader": "^8.0.2"` with `"sass": "^1.80.0"` (Dart Sass, which compiles in pure JavaScript/Dart).
- Remove old eslint/stylelint dependencies to prevent install conflicts.
- Keep `date-fns` and update it to a version compatible with Vue 3 (e.g. `^2.30.0` or `^3.0.0`).

#### [DELETE] [nuxt.config.js](file:///Users/rhlowe/Code/rob.zone/nuxt.config.js)
- Remove the old Webpack/Nuxt 2 configuration.

#### [NEW] [nuxt.config.ts](file:///Users/rhlowe/Code/rob.zone/nuxt.config.ts)
- Create a modern Nuxt 4 configuration file using `defineNuxtConfig`.
- Set up target/prerendering options if necessary.

---

### File Structure Migration

Nuxt 3/4 serves static assets from `/public` rather than `/static`. We will migrate the directory structure.

#### [NEW] [public/](file:///Users/rhlowe/Code/rob.zone/public)
- Move static assets like `favicon.svg`, `up.svg`, `photos/`, `social/`, and `logos/` from `static/` to `public/`.

#### [DELETE] [static/](file:///Users/rhlowe/Code/rob.zone/static)
- Remove the old static directory after moving files.

#### [NEW] [assets/json/jobs.js](file:///Users/rhlowe/Code/rob.zone/assets/json/jobs.js)
- Move the job experience data file out of the public assets directory into `assets/json/jobs.js` since it is imported directly into the source code and does not need to be served publicly as a static asset.

---

### Code Migrations

#### [MODIFY] [layouts/default.vue](file:///Users/rhlowe/Code/rob.zone/layouts/default.vue)
- Replace the Vue 2 `<nuxt />` layout injection tag with the Vue 3 `<slot />` tag.

#### [MODIFY] [components/LazyImg.vue](file:///Users/rhlowe/Code/rob.zone/components/LazyImg.vue)
- Update component lifecycle: change `destroyed()` hook to `unmounted()` to match Vue 3 standards.

#### [MODIFY] [components/Resume.vue](file:///Users/rhlowe/Code/rob.zone/components/Resume.vue)
- Update the import for the job experience data to point to the new location: `import jobs from '~/assets/json/jobs.js'`.

---

## Verification Plan

### Automated Tests
1. **Dependency Installation**: Run `npm install` and verify it succeeds on Node v24 without any python/node-gyp compilation issues.
2. **Development Server**: Run `npm run dev` to verify the site builds and starts.
3. **Production Build**: Run `npm run generate` to verify the static site generation works.

### Manual Verification
- Open the site in the browser to ensure the layout, styling, and CV content load correctly.
- Verify Netlify form submission matches original behavior.
