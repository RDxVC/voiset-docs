// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-studio'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  studio: {
    route: '/admin',
    repository: {
      provider: 'github',
      owner: 'RDxVC',
      repo: 'repo-name',
      branch: 'main'
    }
  }
})
