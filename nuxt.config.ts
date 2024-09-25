// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@zadigetvoltaire/nuxt-gtm',
        '@nuxt/ui',
        '@vueuse/nuxt',
        '@vueuse/motion/nuxt',
        '@nuxtjs/seo',
        '@nuxtjs/tailwindcss',
    ],
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
    site: {
        url: 'https://clapham.workfrom.id/',
        defaultLocale: 'id',
    },
    seo: {
        redirectToCanonicalSiteUrl: true,
    },
    sitemap: {
        sources: ['/api/urls'],
    },
    routeRules: {
        '/blog/office-space/serviced-office-adalah/': {
            redirect: {
                to: '/blog/coworking-space-vs-private-office-untuk-bisnis',
                statusCode: 301,
            },
        },
        '/blog/office-space/manfaat-lain-coworking-space/': {
            redirect: {
                to: '/blog/7-coworking-space-di-medan',
                statusCode: 301,
            },
        },
        '/blog/business-tips/event-space-di-jakarta/': {
            redirect: {
                to: '/blog/5-meeting-room-medan-terbaik',
                statusCode: 301,
            },
        },
        '/blog/lifestyle/': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/business-tips/cara-hemat-memulai-bisnis-startup-dengan-virtual-office/': {
            redirect: {
                to: '/blog/keuntungan-menggunakan-virtual-office-untuk-bisnis-di-medan',
                statusCode: 301,
            },
        },
        '/blog/office-space/ruang-kerja-yang-nyaman/': {
            redirect: {
                to: '/blog/fasilitas-sewa-private-office',
                statusCode: 301,
            },
        },
        '/blog/office-space/coworking-space-vs-private-office-untuk-bisnis/': {
            redirect: {
                to: '/blog/coworking-space-vs-private-office-untuk-bisnis',
                statusCode: 301,
            },
        },
        '/blog/lifestyle/sewa-ruang-kantor-di-jakarta/': {
            redirect: {
                to: '/blog/sewa-kantor-murah',
                statusCode: 301,
            },
        },
        '/blog/office-space/private-office-jakarta/': {
            redirect: {
                to: '/blog/kerja-lebih-fleksibel-dengan-private-office',
                statusCode: 301,
            },
        },
        '/blog/lifestyle/perhatikan-4-tips-ini-untuk-networking-di-coworking-space/': {
            redirect: {
                to: '/blog/keuntungan-menggunakan-virtual-office-untuk-bisnis-di-medan',
                statusCode: 301,
            },
        },
        '/blog/business-tips/5-fasilitas-yang-wajib-ada-di-coworking-space/': {
            redirect: {
                to: '/blog/fasilitas-kantor-sewa-untuk-kerja-yang-nyaman',
                statusCode: 301,
            },
        },
        '/blog/lifestyle/collaborative-coworking-space/': {
            redirect: {
                to: '/blog/7-coworking-space-di-medan',
                statusCode: 301,
            },
        },
        '/blog/business-tips/5-meeting-room-hotel-terbaik-di-jakarta/': {
            redirect: {
                to: '/blog/5-meeting-room-medan-terbaik',
                statusCode: 301,
            },
        },
        '/blog/business-tips/kerja-lebih-fleksibel-dengan-private-office/': {
            redirect: {
                to: '/blog/coworking-space-vs-private-office-untuk-bisnis',
                statusCode: 301,
            },
        },
        '/blog/business-tips/jenis-jenis-meeting-room-dan-fungsinya/': {
            redirect: {
                to: '/blog/5-meeting-room-medan-terbaik',
                statusCode: 301,
            },
        },
        '/blog/business-tips/5-meeting-room-di-restoran-terbaik-jakarta/': {
            redirect: {
                to: '/blog/5-meeting-room-medan-terbaik',
                statusCode: 301,
            },
        },
        '/blog/business-tips/5-meeting-room-cafe-jakarta/': {
            redirect: {
                to: '/blog/5-meeting-room-medan-terbaik',
                statusCode: 301,
            },
        },
        '/blog/business-tips/lokasi-kantor-strategis/': {
            redirect: {
                to: '/blog/sewa-kantor-murah',
                statusCode: 301,
            },
        },
        '/blog/business-tips/page/5/': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/lifestyle/kerja-remote/': {
            redirect: {
                to: '/blog/keuntungan-menggunakan-virtual-office-untuk-bisnis-di-medan',
                statusCode: 301,
            },
        },
        '/blog/business-tips/fasilitas-yang-harus-didapatkan-saat-sewa-private-office/': {
            redirect: {
                to: '/blog/fasilitas-sewa-private-office',
                statusCode: 301,
            },
        },
        '/blog/business-tips/diskusi-lebih-nyaman-dengan-ruang-rapat-minimalis/': {
            redirect: {
                to: '/blog/5-meeting-room-medan-terbaik',
                statusCode: 301,
            },
        },
        '/blog/office-space/private-office-jakarta-selatan/': {
            redirect: {
                to: '/blog/fasilitas-sewa-private-office',
                statusCode: 301,
            },
        },
        '/blog/office-space/7-coworking-space-di-medan/': {
            redirect: {
                to: '/blog/7-coworking-space-di-medan',
                statusCode: 301,
            },
        },
        '/blog/business-tips/': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
    },
});
