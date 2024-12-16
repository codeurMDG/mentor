// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@picocss/pico/css/pico.min.css', 'remixicon/fonts/remixicon.css'],
  modules: ['@nuxt/image', './modules/velite'],
})