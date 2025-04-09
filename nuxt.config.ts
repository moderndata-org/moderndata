// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/mdc", "nuxt-headlessui"],
    headlessui: {
        prefix: ''
    },
    css:['/public/css/main.css'],
    app: {
        head: {
          title: 'chatbot', // default fallback title
          htmlAttrs: {
            lang: 'en',
          },
          link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          ]
        }
      }
});
