// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  modules: ["@pinia/nuxt"],
  plugins: ['~/plugins/fontawesome.ts'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    storesDirs: ['./src/store/**'],
  },
  extensions: [
    ".js",
    ".jsx",
    ".mjs",
    ".ts",
    ".tsx",
    ".vue"
  ],
})