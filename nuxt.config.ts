// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/tailwind.scss',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  typescript: {
    strict: true,
  },
})
