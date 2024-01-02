// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  'routeRules': {
    "/": {
      'prerender': true,
    },
  },

  'css': ["~/assets/css/main.css"],

  'postcss': {
    'plugins': {
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },

  'devtools': { 'enabled': false },
});
