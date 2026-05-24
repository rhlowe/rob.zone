import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  compatibilityDate: '2026-05-24',

  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en-US',
      },
      title: 'rob.zone',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'My personal web site',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.svg',
        },
      ],
    },
  },
});
