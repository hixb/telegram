// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400&display=swap' },
        {
          rel: 'stylesheet',
          type: 'text/css',
          href: 'https://fonts.font.im/css?family=Barlow|Roboto+Mono|Titillium+Web',
        },
      ],
    },
  },
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
