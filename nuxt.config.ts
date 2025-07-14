// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
  ],
  css: ['@/assets/css/global.css'],
  googleFonts: {
    families: {
      Cardo: [400, 700], 
      Yesteryear:[400, 700]
    },
    display: 'swap',
    preconnect: true,
    download: true,
    inject: true,
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'it', iso: 'it-IT', name: 'Italiano', file: 'it.json' }
    ],
    defaultLocale: 'it',
    lazy: true,
    strategy: 'no_prefix' // puoi anche usare 'prefix' se vuoi sempre il prefisso /en /it
  }
});
