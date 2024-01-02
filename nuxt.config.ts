// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "app": {
    baseURL: "/b2b",
  },

  "routeRules": {
    "/": {
      "prerender": true,
      "ssr": false,
    },
    "/b2b": {
      "prerender": true,
      "ssr": false,
    },
  },

  "css": ["~/assets/css/main.css"],

  "postcss": {
    "plugins": {
      "tailwindcss": {},
      "autoprefixer": {},
    },
  },

  "devtools": { "enabled": false },
});
