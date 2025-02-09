// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  // compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  css: ["~/assets/css/styles.css", "~/assets/css/input.css"],

  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
    {
      path: "~/components/partials/menu",
      prefix: "Menu",
    },
  ],

  modules: ["@nuxtjs/tailwindcss"],
  plugins: ["~/plugins/flowbite.client.ts", "~/plugins/pocketbase.client.ts"],
});
