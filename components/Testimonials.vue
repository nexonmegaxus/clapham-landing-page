<template>
    <section class="section bg-c-white">
        <div class="div flex-col gap-[24px]">
            <p class="font-28 font-bold">
                Kata Mereka tentang
                <span class="text-red">Clapham</span>
            </p>
            <UCarousel
                v-slot="{ item }"
                :items="items"
                :ui="{ item: 'basis-full xl:basis-1/2 snap-start' }"
                class="overflow-hidden rounded-lg"
                arrows
            >
                <div class="m-[8px] flex w-full flex-col gap-[16px] bg-c-light-grey p-[16px]">
                    <div class="flex items-center justify-between">
                        <img :src="item.avatar" alt="Image" class="w-[80px] rounded-full" />
                        <img src="/img/semicolon.webp" alt="Image" class="w-[32px]" />
                    </div>
                    <div>
                        <p class="font-16 font-bold xl:mb-[8px] xl:text-[28px]">{{ item.name }}</p>
                        <p class="font-14 font-medium text-[#414346] xl:text-[20px]">{{ item.role }}</p>
                    </div>
                    <p class="font-14 xl:text-[16px]">
                        {{ item.testimony }}
                    </p>
                </div>
            </UCarousel>
        </div>
    </section>
</template>

<script setup lang="ts">
const items = [
    {
        name: 'Ben Johnson',
        role: 'CTO di Dealjava',
        testimony:
            'Akselerator startup terbaik di Medan! Clapham memberikan kenyamanan dan ruang kantor profesional. Banyak perusahaan startup berkumpul di sini untuk berbagi ilmu.',
        avatar: '/img/avatar1.webp',
    },
    {
        name: 'Benny Batara',
        role: 'Chief Investment Strategist',
        testimony: 'Pengalaman bagus, lokasi strategis, dan layanan yang luar biasa.',
        avatar: '/img/avatar2.webp',
    },
    {
        name: 'Steven Guntur',
        role: 'Dokter Anak',
        testimony:
            'Salah satu tempat paling inspiratif di kota. Saya tumbuh selangkah lebih baik setiap kali saya meninggalkan gedung ini. Kudos to the team!!!',
        avatar: '/img/avatar3.webp',
    },
    {
        name: 'Hendra Soewarno',
        role: 'Dosen IT di STMIK IBBI',
        testimony: 'Tempat yang sangat bagus untuk persewaan ruang kantor dan acara seminar.',
        avatar: '/img/avatar4.webp',
    },
];
</script>
