// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// ponytail: GITHUB_ACTIONS is set automatically by GitHub's own runners, never by `astro dev`
// or a local `astro build`. That's the one signal that reliably tells "are we the GH Pages
// deploy build" apart from "are we running on a laptop" — NODE_ENV would lie here, since
// `astro build` sets it to "production" even when run locally.
const isGithubActionsBuild = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'kampung-cakap-english-center';

// https://astro.build/config
export default defineConfig({
  site: 'https://rimba-maker.github.io',
  base: isGithubActionsBuild ? `/${repoName}` : '/',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});