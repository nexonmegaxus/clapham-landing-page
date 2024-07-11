// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@zadigetvoltaire/nuxt-gtm', '@nuxt/ui'],
    devtools: { enabled: true },
    gtm: {
        id: 'GTM-WM5BPQP',
    },

    ui: {
        icons: ['heroicons'],
    },
});
