<template>
    <main>
        <!-- Hero -->
        <section class="section bg-c-black pt-[80px] xl:py-0 xl:pb-0">
            <div class="div xl:grid xl:grid-cols-2 xl:gap-[60px] xl:pr-0">
                <div class="flex flex-col gap-[32px] xl:pt-[120px]">
                    <img src="/img/hero2.png" alt="" />
                    <div>
                        <p class="font-20 mb-[8px] font-semibold text-c-teal">Clapham Collective</p>
                        <p class="font-36 font-bold text-c-white">Solusi Sewa Ruang Kantor dan Acara di Medan.</p>
                    </div>
                    <div class="flex gap-[24px]">
                        <a
                            href="https://api.whatsapp.com/send/?phone=6282127832456&text&type=phone_number&app_absent=0"
                            class="btn-green mt-[16px]"
                        >
                            <img src="/img/wa-white.png" alt="" />
                            WhatsApp Kami</a
                        >
                    </div>
                    <div class="flex justify-between gap-[8px] xl:pb-[32px]">
                        <div class="flex flex-col items-center gap-[8px]">
                            <p class="font-36 font-bold text-c-white">35+</p>
                            <p class="font-14 font-normal text-c-grey xl:text-[20px]">Ruang Rapat</p>
                        </div>
                        <div class="flex flex-col items-center gap-[8px]">
                            <p class="font-36 font-bold text-c-white">20+</p>
                            <p class="font-14 font-normal text-c-grey xl:text-[20px]">Ruang Kerja</p>
                        </div>
                        <div class="flex flex-col items-center gap-[8px]">
                            <p class="font-36 font-bold text-c-white">10+</p>
                            <p class="font-14 font-normal text-c-grey xl:text-[20px]">Perusahaan</p>
                        </div>
                    </div>
                </div>
                <div class="hidden xl:flex">
                    <img src="/img/hero1.png" alt="" />
                </div>
            </div>
        </section>

        <!-- Logo -->
        <section class="section bg-c-white">
            <div
                class="div flex animate-loop-scroll items-center justify-center gap-[64px] overflow-hidden text-center opacity-50 grayscale"
                aria-hidden="true"
            >
                <img src="/img/logo1.png" alt="" />
                <img src="/img/logo2.png" alt="" />
                <img src="/img/logo3.png" alt="" />
                <img src="/img/logo4.png" alt="" />
                <img src="/img/logo5.png" alt="" />
                <img src="/img/logo1.png" alt="" />
                <img src="/img/logo2.png" alt="" />
                <img src="/img/logo3.png" alt="" />
                <img src="/img/logo4.png" alt="" />
                <img src="/img/logo5.png" alt="" />
                <img src="/img/logo1.png" alt="" />
                <img src="/img/logo2.png" alt="" />
                <img src="/img/logo3.png" alt="" />
                <img src="/img/logo4.png" alt="" />
                <img src="/img/logo5.png" alt="" />
                <img src="/img/logo1.png" alt="" />
                <img src="/img/logo2.png" alt="" />
                <img src="/img/logo3.png" alt="" />
                <img src="/img/logo4.png" alt="" />
                <img src="/img/logo5.png" alt="" />
            </div>
        </section>

        <!-- Layanan Kami -->
        <section v-motion-slide-visible-once-right :duration="500" class="section bg-c-white">
            <div class="div flex-col gap-[24px]">
                <div class="flex flex-col gap-[8px] xl:grid xl:grid-cols-2 xl:gap-[80px]">
                    <p class="font-28 font-bold xl:text-[56px]"><span class="text-red">Layanan </span>Kami</p>
                    <p class="font-16 font-medium">
                        Ruang kantor dan acara yang modern dan mewah, lengkap dengan berbagai fasilitas, siap disewakan untuk
                        pengguna Clapham.
                    </p>
                </div>
                <div
                    class="mx-auto flex max-w-[420px] flex-col gap-[24px] xl:mt-[32px] xl:grid xl:max-w-full xl:grid-cols-2 xl:gap-[40px]"
                >
                    <div class="flex flex-col xl:flex-row">
                        <img src="/img/layanan-kami-1.png" class="w-full xl:w-[260px] xl:object-cover" />
                        <div class="flex flex-col gap-[8px] bg-[#F6F7F8] p-[16px] xl:p-[24px]">
                            <p class="font-20 font-bold">Private Office</p>
                            <p class="font-14">Ruang kantor ekslusif dan privat untuk tim dengan berbagai ukuran.</p>
                            <p class="font-14 font-semibold">Mulai dari</p>
                            <div class="mt-[-8px] flex items-center gap-[4px]">
                                <p class="font-20 font-bold">Rp 5.000.000</p>
                                <p class="font-14 font-semibold">/bulan</p>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send/?phone=6282127832456&text&type=phone_number&app_absent=0"
                                class="btn-green mt-[16px] w-full"
                            >
                                <img src="/img/wa-white.png" alt="" />
                                WhatsApp Kami</a
                            >
                        </div>
                    </div>
                    <div class="flex flex-col xl:flex-row">
                        <img src="/img/layanan-kami-2.png" class="w-full xl:w-[260px] xl:object-cover" />
                        <div class="flex flex-col gap-[8px] bg-[#F6F7F8] p-[16px] xl:p-[24px]">
                            <p class="font-20 font-bold">Event Space</p>
                            <p class="font-14">
                                Cocok untuk seminar, konferensi, dan pertemuan hingga 500 orang dengan opsi katering tambahan.
                            </p>
                            <p class="font-14 font-semibold">Mulai dari</p>
                            <div class="mt-[-8px] flex items-center gap-[4px]">
                                <p class="font-20 font-bold">Rp 550.000</p>
                                <p class="font-14 font-semibold">/jam</p>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send/?phone=6282127832456&text&type=phone_number&app_absent=0"
                                class="btn-green mt-[16px] w-full"
                            >
                                <img src="/img/wa-white.png" alt="" />
                                WhatsApp Kami</a
                            >
                        </div>
                    </div>
                    <div class="flex flex-col xl:flex-row">
                        <img src="/img/layanan-kami-3.png" class="w-full xl:w-[260px] xl:object-cover" />
                        <div class="flex flex-col gap-[8px] bg-[#F6F7F8] p-[16px] xl:p-[24px]">
                            <p class="font-20 font-bold">Daily Pass</p>
                            <p class="font-14">Untuk menunjang produktivitas seharian penuh di berbagai lokasi.</p>
                            <p class="font-14 font-semibold">Mulai dari</p>
                            <div class="mt-[-8px] flex items-center gap-[4px]">
                                <p class="font-20 font-bold">Rp 100.000</p>
                                <p class="font-14 font-semibold">/orang/hari</p>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send/?phone=6282127832456&text&type=phone_number&app_absent=0"
                                class="btn-green mt-[16px] w-full"
                            >
                                <img src="/img/wa-white.png" alt="" />
                                WhatsApp Kami</a
                            >
                        </div>
                    </div>
                    <div class="flex flex-col xl:flex-row">
                        <img src="/img/layanan-kami-4.png" class="w-full xl:w-[260px] xl:object-cover" />
                        <div class="flex flex-col gap-[8px] bg-[#F6F7F8] p-[16px] xl:p-[24px]">
                            <p class="font-20 font-bold">Meeting Room</p>
                            <p class="font-14">
                                Solusi untuk ruang rapat atau pertemuan kecil hingga 10 orang di lokasi yang strategis.
                            </p>
                            <p class="font-14 font-semibold">Mulai dari</p>
                            <div class="mt-[-8px] flex items-center gap-[4px]">
                                <p class="font-20 font-bold">Rp 165.000</p>
                                <p class="font-14 font-semibold">/jam</p>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send/?phone=6282127832456&text&type=phone_number&app_absent=0"
                                class="btn-green mt-[16px] w-full"
                            >
                                <img src="/img/wa-white.png" alt="" />
                                WhatsApp Kami</a
                            >
                        </div>
                    </div>
                    <div class="flex flex-col xl:flex-row">
                        <img src="/img/layanan-kami-5.png" class="w-full xl:w-[260px] xl:object-cover" />
                        <div class="flex flex-col gap-[8px] bg-[#F6F7F8] p-[16px] xl:p-[24px]">
                            <p class="font-20 font-bold">Flexible Desk</p>
                            <p class="font-14">Cukup bawa laptop Anda, pilih kursi, dan mulai bekerja.</p>
                            <p class="font-14 font-semibold">Mulai dari</p>
                            <div class="mt-[-8px] flex items-center gap-[4px]">
                                <p class="font-20 font-bold">Rp 1.250.000</p>
                                <p class="font-14 font-semibold">/orang/bulan</p>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send/?phone=6282127832456&text&type=phone_number&app_absent=0"
                                class="btn-green mt-[16px] w-full"
                            >
                                <img src="/img/wa-white.png" alt="" />
                                WhatsApp Kami</a
                            >
                        </div>
                    </div>
                    <div class="flex flex-col xl:flex-row">
                        <img src="/img/layanan-kami-6.png" class="w-full xl:w-[260px] xl:object-cover" />
                        <div class="flex flex-col gap-[8px] bg-[#F6F7F8] p-[16px] xl:p-[24px]">
                            <p class="font-20 font-bold">Dedicated Desk</p>
                            <p class="font-14">
                                Ruang kantor yang cocok untuk setiap kebutuhan dengan tempat yang sama setiap hari.
                            </p>
                            <p class="font-14 font-semibold">Mulai dari</p>
                            <div class="mt-[-8px] flex items-center gap-[4px]">
                                <p class="font-20 font-bold">Rp 2.250.000</p>
                                <p class="font-14 font-semibold">/orang/bulan</p>
                            </div>
                            <a
                                href="https://api.whatsapp.com/send/?phone=6282127832456&text&type=phone_number&app_absent=0"
                                class="btn-green mt-[16px] w-full"
                            >
                                <img src="/img/wa-white.png" alt="" />
                                WhatsApp Kami</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Fasilitas Dan Kelengkapan -->
        <section v-motion-slide-visible-once-left :duration="500" class="section bg-c-white">
            <div class="div flex-col gap-[24px] xl:gap-[40px]">
                <div class="flex flex-col gap-[16px] bg-black px-[16px] py-[24px] xl:flex-row xl:items-center xl:justify-end">
                    <img src="/img/redbar.png" alt="" class="w-fit" />
                    <p class="font-28 font-bold text-white">Fasilitas dan Kelengkapan</p>
                </div>
                <div class="grid grid-cols-2 gap-[20px] xl:grid-cols-4 xl:gap-[40px]">
                    <div class="flex flex-col gap-[16px] bg-c-light-grey p-[20px]">
                        <img src="/img/amenities1.png" alt="" class="w-fit" />
                        <p class="font-16 font-bold">Wi-fi Berkecepatan Tinggi</p>
                    </div>
                    <div class="flex flex-col gap-[16px] bg-c-light-grey p-[20px]">
                        <img src="/img/amenities2.png" alt="" class="w-fit" />
                        <p class="font-16 font-bold">Minuman Gratis</p>
                    </div>
                    <div class="flex flex-col gap-[16px] bg-c-light-grey p-[20px]">
                        <img src="/img/amenities3.png" alt="" class="w-fit" />
                        <p class="font-16 font-bold">Projektor HD</p>
                    </div>
                    <div class="flex flex-col gap-[16px] bg-c-light-grey p-[20px]">
                        <img src="/img/amenities4.png" alt="" class="w-fit" />
                        <p class="font-16 font-bold">Layanan Printing</p>
                    </div>
                    <div class="flex flex-col gap-[16px] bg-c-light-grey p-[20px]">
                        <img src="/img/amenities5.png" alt="" class="w-fit" />
                        <p class="font-16 font-bold">Layanan Resepsionis</p>
                    </div>
                    <div class="flex flex-col gap-[16px] bg-c-light-grey p-[20px]">
                        <img src="/img/amenities6.png" alt="" class="w-fit" />
                        <p class="font-16 font-bold">Pantry</p>
                    </div>
                    <div class="flex flex-col gap-[16px] bg-c-light-grey p-[20px]">
                        <img src="/img/amenities7.png" alt="" class="w-fit" />
                        <p class="font-16 font-bold">Penanganan Surat & Paket</p>
                    </div>
                    <div class="flex flex-col gap-[16px] bg-c-light-grey p-[20px]">
                        <img src="/img/amenities8.png" alt="" class="w-fit" />
                        <p class="font-16 font-bold">Akses ke Area Umum</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Fasilitas Di Sekitar -->
        <section v-motion-slide-visible-once-right :duration="500" class="section bg-c-white">
            <div class="div flex-col gap-[24px] xl:gap-[40px]">
                <div class="flex flex-col gap-[16px] bg-black px-[16px] py-[24px] xl:flex-row xl:items-center xl:justify-start">
                    <img src="/img/redbar.png" alt="" class="w-fit xl:order-1" />
                    <p class="font-28 font-bold text-white">Fasilitas di Sekitar</p>
                </div>
                <!--  -->
                <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-2 xl:gap-[40px]">
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31855.820557039493!2d98.681436!3d3.592618!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131c784afcce9%3A0x1c0f6a9ddeb16361!2sClapham%20Collective%20-%20Office%20Space%2C%20Meeting%20Room%2C%20Private%20Office%2C%20Coworking%20and%20Event%20Space!5e0!3m2!1sen!2sus!4v1719458383393!5m2!1sen!2sus"
                            width="100%"
                            height="450"
                            style="border: 0"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div class="flex flex-col gap-[16px] xl:grid xl:grid-cols-2">
                        <div class="flex flex-row items-start gap-[16px] bg-c-light-grey p-[20px]">
                            <img src="/img/facilities1.png" alt="" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Kereta Api</p>
                                <p class="font-12 xl:font-14">Stasiun Kereta Api Bandara (400 m)</p>
                            </div>
                        </div>
                        <div class="flex flex-row items-start gap-[16px] bg-c-light-grey p-[20px]">
                            <img src="/img/facilities2.png" alt="" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Taksi & Kendaraan Online</p>
                                <p class="font-12 xl:font-14">
                                    Base Camp Bluebird (210 m) <br />
                                    Base Camp Grab (210 m)
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-row items-start gap-[16px] bg-c-light-grey p-[20px]">
                            <img src="/img/facilities3.png" alt="" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Rumah Sakit</p>
                                <p class="font-12 xl:font-14">Rumah Sakit Murni Teguh Memoria (290 m)</p>
                            </div>
                        </div>
                        <div class="flex flex-row items-start gap-[16px] bg-c-light-grey p-[20px]">
                            <img src="/img/facilities4.png" alt="" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Hotel</p>
                                <p class="font-12 xl:font-14">
                                    Hotel deSatu (30 m) <br />
                                    Hotel Boutique Karibia (250 m)
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-row items-start gap-[16px] bg-c-light-grey p-[20px]">
                            <img src="/img/facilities5.png" alt="" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Gym</p>
                                <p class="font-12 xl:font-14">Vista Gym (76 m)</p>
                            </div>
                        </div>
                        <div class="flex flex-row items-start gap-[16px] bg-c-light-grey p-[20px]">
                            <img src="/img/facilities6.png" alt="" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Mall</p>
                                <p class="font-12 xl:font-14">Center Point (230 m)</p>
                            </div>
                        </div>
                        <div class="flex flex-row items-start gap-[16px] bg-c-light-grey p-[20px]">
                            <img src="/img/facilities7.png" alt="" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Restoran</p>
                                <p class="font-12 xl:font-14">Nasi Padang Istana Krakatau (220 m)</p>
                            </div>
                        </div>
                        <div class="flex flex-row items-start gap-[16px] bg-c-light-grey p-[20px]">
                            <img src="/img/facilities8.png" alt="" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Cafe</p>
                                <p class="font-12 xl:font-14">
                                    Starbucks (80 m) <br />
                                    J.Co Donuts (80 m) <br />
                                    Coffeenatics (80 m)
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-row items-start gap-[16px] bg-c-light-grey p-[20px]">
                            <img src="/img/facilities9.png" alt="" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Bar</p>
                                <p class="font-12 xl:font-14">
                                    Healymacs Irish (50 m) <br />
                                    Merdeka Walk (50 m)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!--  -->
            </div>
        </section>

        <!-- Galeri Kami -->
        <section v-motion-slide-visible-once-left :duration="500" class="section">
            <div class="div flex-col gap-[24px] text-center xl:text-left">
                <p class="font-28 font-bold">Galeri <span class="text-red">Kami</span></p>
                <img src="/img/gallery2.png" alt="" class="xl:hidden" />
                <img src="/img/gallery1.png" alt="" class="hidden xl:block" />
            </div>
        </section>

        <!-- Testimonial -->
        <Testimonials />

        <!-- Tentang Clapham -->
        <section v-motion-slide-visible-once-left :duration="500" class="section bg-white">
            <div class="div xl:gap- [80px] flex-col gap-[24px] xl:grid xl:grid-cols-2 xl:items-center">
                <div>
                    <img src="/img/foo2.png" alt="" />
                </div>
                <div class="flex flex-col gap-[16px]">
                    <img src="/img/greenbar.png" alt="" class="w-fit" />
                    <p class="font-28 font-bold">Tentang Clapham</p>
                    <p class="font-16">
                        Berdiri sejak 2015, Clapham Collective Private Office Space and Event Space hadir untuk menjawab kebutuhan
                        sewa ruangan kerja bulanan dengan harga murah bagi komunitas wirausaha dan kreatif di Medan. Dengan tekad
                        menjadi tempat para pengusaha dan kreator di Indonesia melepaskan diri dari lingkungan kerja tradisional
                        dengan fasilitas yang nyaman dan modern untuk mencapai potensi terbaik mereka di Clapham. Temukan ruang
                        kantor bulanan yang tepat dan nyaman untuk Anda sewa di Clapham Medan!
                    </p>
                    <a href="#forms" class="btn-red mt-[16px] w-full xl:w-fit">Pesan Ruangan Sekarang</a>
                </div>
            </div>
        </section>

        <!-- Kami Menyediakan -->
        <section v-motion-slide-visible-once-right :duration="500" class="section bg-c-white">
            <div class="div flex-col gap-[24px] xl:grid xl:grid-cols-2 xl:items-center xl:gap-[80px]">
                <div class="xl:order-1">
                    <img src="/img/foo1.png" alt="" class="w-full" />
                </div>
                <div class="flex flex-col gap-[16px]">
                    <img src="/img/greenbar.png" alt="" class="w-fit" />
                    <p class="font-28 font-bold">Kami Menyediakan Tempat Kerja yang Nyaman</p>
                    <p class="font-16">
                        Kami menawarkan sewa ruang kerja yang sempurna untuk disewakan, cocok untuk seminar, acara konferensi
                        pers, dan pertemuan perusahaan besar dengan kapasitas hingga 500 orang. Kami juga menyediakan sewa space
                        kantor untuk tim dengan berbagai ukuran.
                    </p>
                    <a href="#forms" class="btn-red mt-[16px] w-full xl:w-fit">Pesan Ruangan Sekarang</a>
                </div>
            </div>
        </section>

        <!-- Forms -->
        <Forms />

        <!-- FAQ -->
        <FAQ />
    </main>
</template>
