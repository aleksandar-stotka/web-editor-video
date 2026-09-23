import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      title: 'Storyline Studio | Video Editor & Visual Storyteller',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio and services website for Storyline Studio.' },
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/logo.jpeg' },
        { rel: 'shortcut icon', type: 'image/jpeg', href: '/logo.jpeg' },
        { rel: 'apple-touch-icon', href: '/logo.jpeg' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})