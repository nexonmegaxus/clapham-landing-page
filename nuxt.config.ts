// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@zadigetvoltaire/nuxt-gtm', '@nuxt/ui', '@vueuse/nuxt', '@vueuse/motion/nuxt', '@nuxtjs/seo'],
    devtools: { enabled: true },

    // GTM
    gtm: {
        id: 'GTM-WM5BPQP',
    },

    // NuxtUI
    ui: {
        icons: ['heroicons'],
    },
    runtimeConfig: {
        BACKEND_URL: process.env.NUXT_BACKEND_URL,
    },
    compatibilityDate: '2024-08-14',
    colorMode: {
        preference: 'light',
    },
});
