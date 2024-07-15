// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@zadigetvoltaire/nuxt-gtm', '@nuxt/ui', '@vueuse/nuxt', '@vueuse/motion/nuxt'],
    devtools: { enabled: true },
    // GTM
    gtm: {
        id: 'GTM-WM5BPQP',
    },
    // NuxtUI
    ui: {
        icons: ['heroicons'],
    },
});
