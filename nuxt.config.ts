// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@nuxt/ui"],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English" },
      { code: "fr", iso: "fr-FR", name: "Français" },
      { code: "de", iso: "de-DE", name: "Deutsch" },
    ],
    defaultLocale: "en",
    strategy: "prefix",
  },
  devtools: { enabled: true },
});
