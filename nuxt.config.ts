export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "nuxt-swiper",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
  ],
  css: ["public/css/style.css", "public/css/main.css"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/imgs/logo.png" }],
      title: "داده پردازان پارسیان نامی",
    },
  },
  headlessui: {
    prefix: "",
  },
});
