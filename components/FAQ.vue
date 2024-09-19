<template>
    <section class="section bg-c-light-grey">
        <div class="div flex-col gap-[34px]">
            <div>
                <img src="/img/redbar.png" alt="Image" class="mb-[34px]" />
                <p class="font-28 font-bold">Apa yang ingin Anda ketahui?</p>
            </div>
            <UAccordion
                color="black"
                variant="ghost"
                :items="items"
                :ui="{
                    wrapper: 'gap-[16px]',
                    container: 'shadow-lg rounded-xl bg-c-white px-3 py-4',
                    item: {
                        padding: 'px-2',
                    },
                }"
                class="font-quicksand"
            >
                <template #default="{ item, open }">
                    <UButton color="white" variant="ghost">
                        <span class="text-left text-xl font-semibold">
                            {{ item.label }}
                        </span>

                        <template #trailing>
                            <UIcon
                                name="i-heroicons-chevron-right-20-solid"
                                class="ms-auto h-5 w-5 transform transition-transform duration-200"
                                :class="[open && 'rotate-90']"
                            />
                        </template>
                    </UButton>
                </template>
            </UAccordion>
        </div>
    </section>
</template>

<script setup lang="ts">
const items = [
    {
        label: 'Apa keuntungan sewa private office space di Clapham?',
        defaultOpen: true,
        content:
            'Sewa space kantor di Clapham menawarkan berbagai keuntungan karena dirancang secara cermat untuk memenuhi kebutuhan unik Anda.',
    },
    {
        label: 'Berapa harga sewa awal untuk space kantor di Clapham Medan?',
        content: 'Harga awal untuk biaya sewa bulanan kantor di Clapham Medan mulai dari Rp 5.000.000 per bulan.',
    },
    {
        label: 'Apa jam operasional untuk kantor pribadi dan ruang acara?',
        content:
            'Jam operasional kami adalah Senin hingga Jumat dari jam 09:00 pagi hingga 17:00 sore, dan Sabtu dari jam 09:00 pagi hingga 14:00 siang.',
    },
    {
        label: 'Fasilitas apa saja yang tersedia di sekitar ruang kantor?',
        content:
            'Dengan sewa ruang kantor kami di Medan, Anda akan mendapati fasilitas kerja terbaik seperti dekat dengan Stasiun Kereta Api Bandara (400 m), Rumah Sakit Murni Teguh Memorial (290 m), Vista Gym (76 m), serta berbagai pilihan tempat makan, belanja, dan akomodasi. Untuk pertanyaan tambahan atau untuk mempelajari lebih lanjut tentang sewa space kantor dan ruang aula acara kami, silakan hubungi kami langsung di (+6261) 805 109 77 atau kunjungi kami di Clapham Co-working & Event Space, Ruko Centre Point Medan, Jalan Timor Blok G No. III/IV Lantai 2, Gang Buntu, Medan Timur, Kota Medan, Sumatera Utara 20231.',
    },
    {
        label: 'Jenis acara apa saja yang bisa diadakan di ruang acara Clapham?',
        content:
            'Ruang aula acara kami sempurna untuk seminar, konferensi pers, dan pertemuan perusahaan besar karena ruangan ini dapat menampung hingga 500 orang.',
    },
    {
        label: 'Berapa harga awal untuk menyewa ruang acara di Clapham Medan?',
        content: 'Harga awal untuk ruang sewa ruang aula acara kami mulai dari Rp 550.000 per jam.',
    },
    {
        label: 'Jenis ruang kerja atau kantor pribadi apa saja yang Clapham Medan tawarkan?',
        content:
            'Kami menawarkan sewa kantor pribadi dengan biaya bulanan yang murah dan ruangan kerja yang nyaman untuk tim dengan berbagai ukuran. Ruang kerja yang kami sewakan dirancang untuk menyediakan lingkungan kerja yang didedikasikan dan profesional sesuai kebutuhan bisnis Anda.',
    },
];
</script>
