export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-graphql-client"],
  debug: true,
    
  // Настройки путей
  dir: {
    assets: 'assets',
    static: 'static'
  },
});
