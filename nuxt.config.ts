// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: ['@nuxtjs/google-fonts'],
  css: ['@/assets/css/global.css'],
  googleFonts: {
    families: {
      Cardo: true,
    },
    display: 'swap' // Optional for performance
  }
})