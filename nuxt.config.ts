// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // ssr: false,
    devtools: { enabled: true },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    image: {
        domains: ['assets.volkswagen.com']
    },
    nitro: {
        plugins: ["~/server/plugins/mongodb.ts"],
    },
})
