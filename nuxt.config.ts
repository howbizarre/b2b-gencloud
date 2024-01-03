// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "app": {
    "baseURL": "/b2b",
    "head": {
      "charset": "utf-8",
      "viewport": "width=device-width, initial-scale=1",
      "meta": [
        { "name": "description", "content": "B2B от GenCloud, защото пазаруването онлайн е страхотно. Защото е винаги под ръка, в джоба, на бюрото, в колата... Защото е лесно, много бързо и ефективно." },
        { "name": "theme-color", "content": "blue" },
        { "name": "msapplication-TileColor", "content": "#da532c" },
      ],
      "link": [
        { "rel": "icon", "href": "/b2b/favicon.ico", "type": "image/x-icon" },
        { "rel": "icon", "href": "/b2b/images/icons/favicon-32x32.png", "type": "image/png", "sizes": "32x32" },
        { "rel": "icon", "href": "/b2b/images/icons/favicon-16x16.png", "type": "image/png", "sizes": "16x16" },
        { "rel": "apple-touch-icon", "href": "/b2b/images/icons/apple-touch-icon.png", "sizes": "180x180" },
        { "rel": "manifest", "href": "/b2b/site.webmanifest" },
        { "rel": "mask-icon", "href": "/b2b/images/icons/safari-pinned-tab.svg", "color": "#5bbad5" },
        { "rel": "stylesheet", "href": "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Play:wght@400;700&display=swap" },
      ],
    },
  },

  "routeRules": {
    "/": {
      "prerender": true,
    },
    "/b2b": {
      "prerender": true,
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
