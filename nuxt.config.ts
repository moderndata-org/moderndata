export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-aos", "nuxt-swiper", "@nuxtjs/tailwindcss"],
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/imgs/logo.png" }],
      title: "داده پردازان پارسیان نامی",
    },
  },
});
