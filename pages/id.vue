<template>
    <main>
    
    <!-- Navbar -->
    <section
      class="section fixed bg-black py-[8px] xl:bg-opacity-0 xl:py-[30px]"
    >
      <div class="div flex items-center justify-between">
        <a href="/"
          ><img src="/img/logo.png" alt="" class="w-[100px] xl:w-fit"
        /></a>
        <a href="/"><img src="/img/hamburger.png" alt="" /></a>
      </div>
    </section>

    <!-- Hero -->
    <section class="section bg-black pt-[80px] xl:py-0 xl:pb-0">
      <div class="div xl:grid xl:grid-cols-2 xl:gap-[60px] xl:pr-0">
        <div class="flex flex-col gap-[32px] xl:pt-[120px]">
          <img src="/img/hero2.png" alt="" />
          <div>
            <p class="font-20 mb-[8px] font-semibold text-teal">
              Clapham Collective
            </p>
            <p class="font-36 font-bold text-white">
              Solusi Sewa Ruang Kantor dan Acara di Medan.
            </p>
          </div>
          <div class="flex gap-[24px]">
            <a href="/" class="btn-red">Dapatkan Penawaran</a>
          </div>
          <div class="flex justify-between gap-[8px] xl:pb-[32px]">
            <div class="flex flex-col items-center gap-[8px]">
              <p class="font-36 font-bold text-white">35+</p>
              <p class="font-14 font-normal text-grey xl:text-[20px]">
                Ruang Rapat
              </p>
            </div>
            <div class="flex flex-col items-center gap-[8px]">
              <p class="font-36 font-bold text-white">20+</p>
              <p class="font-14 font-normal text-grey xl:text-[20px]">
                Ruang Kerja
              </p>
            </div>
            <div class="flex flex-col items-center gap-[8px]">
              <p class="font-36 font-bold text-white">10+</p>
              <p class="font-14 font-normal text-grey xl:text-[20px]">
                Perusahaan
              </p>
            </div>
          </div>
        </div>
        <div class="hidden xl:flex">
          <img src="/img/hero1.png" alt="" />
        </div>
      </div>
    </section>

    <!-- Logo -->
    <section class="section bg-white">
      <div
        class="div grid grid-cols-3 items-center justify-center justify-items-center gap-[32px] text-center opacity-50 grayscale xl:grid-cols-5"
      >
        <img src="/img/logo1.png" alt="" />
        <img src="/img/logo2.png" alt="" />
        <img src="/img/logo3.png" alt="" />
        <img src="/img/logo4.png" alt="" />
        <img src="/img/logo5.png" alt="" />
      </div>
    </section>

    <!-- Building Overview -->
    <section class="section bg-white">
      <div
        class="div xl:gap- [80px] flex-col gap-[24px] xl:grid xl:grid-cols-2 xl:items-center"
      >
        <div>
          <img src="/img/foo2.png" alt="" />
        </div>
        <div class="flex flex-col gap-[16px]">
          <img src="/img/greenbar.png" alt="" class="w-fit" />
          <p class="font-28 font-bold">Tentang Clapham</p>
          <p class="font-16">
            Berdiri sejak 2015, Clapham Collective Private Office Space and Event Space hadir untuk menjawab kebutuhan sewa ruangan kerja bulanan dengan harga murah bagi komunitas wirausaha dan kreatif di Medan. Dengan tekad menjadi tempat para pengusaha dan kreator di Indonesia melepaskan diri dari lingkungan kerja tradisional dengan fasilitas yang nyaman dan modern untuk mencapai potensi terbaik mereka di Clapham. Temukan ruang kantor bulanan yang tepat dan nyaman untuk Anda sewa di Clapham Medan!
          </p>
          <a href="/" class="btn-red mt-[16px] w-full xl:w-fit">Pesan Ruangan Sekarang</a>
        </div>
      </div>
    </section>

    <!-- Our Space -->
    <section class="section bg-white">
      <div class="div flex-col gap-[24px]">
        <div
          class="flex flex-col gap-[8px] xl:grid xl:grid-cols-2 xl:gap-[80px]"
        >
          <p class="font-28 font-bold xl:text-[56px]">
            <span class="text-red">Layanan </span>Kami
          </p>
          <p class="font-16 font-medium">
            Ruang kantor dan acara yang modern dan mewah, lengkap dengan berbagai fasilitas, siap disewakan untuk pengguna Clapham.
          </p>
        </div>
        <div class="flex flex-row gap-[12px] overflow-x-auto">
          <img src="/img/space1.png" class="w-[140px] xl:w-fit" />
          <img src="/img/space2.png" class="w-[140px] xl:w-fit" />
          <img src="/img/space3.png" class="w-[140px] xl:w-fit" />
          <img src="/img/space4.png" class="w-[140px] xl:w-fit" />
          <img src="/img/space5.png" class="w-[140px] xl:w-fit" />
        </div>
      </div>
    </section>

    <!-- Amenities -->
    <section class="section bg-white">
      <div class="div flex-col gap-[24px] xl:gap-[40px]">
        <div
          class="flex flex-col gap-[16px] bg-black px-[16px] py-[24px] xl:flex-row xl:items-center xl:justify-end"
        >
          <img src="/img/redbar.png" alt="" class="w-fit" />
          <p class="font-28 font-bold text-white">Fasilitas dan Kelengkapan</p>
        </div>
        <div class="grid grid-cols-2 gap-[20px] xl:grid-cols-4 xl:gap-[40px]">
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities1.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Wi-fi Berkecepatan Tinggi</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities2.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Minuman Gratis</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities3.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Projektor HD</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities4.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Layanan Printing</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities5.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Layanan Resepsionis</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities6.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Pantry</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities7.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Penanganan Surat & Paket</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities8.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Akses ke Area Umum</p>
          </div>
        </div>
      </div>
    </section>

    <!-- We Provide You -->
    <section class="section bg-white">
      <div
        class="div flex-col gap-[24px] xl:grid xl:grid-cols-2 xl:items-center xl:gap-[80px]"
      >
        <div class="flex flex-col gap-[16px]">
          <img src="/img/greenbar.png" alt="" class="w-fit" />
          <p class="font-28 font-bold">
            Kami Menyediakan Tempat Kerja yang Nyaman
          </p>
          <p class="font-16">
            Kami menawarkan sewa ruang kerja yang sempurna untuk disewakan, cocok untuk seminar, acara konferensi pers, dan pertemuan perusahaan besar dengan kapasitas hingga 500 orang. Kami juga menyediakan sewa space kantor untuk tim dengan berbagai ukuran.
          </p>
          <a href="/" class="btn-red mt-[16px] w-full xl:w-fit">Pesan Ruangan Sekarang</a>
        </div>
        <div>
          <img src="/img/foo1.png" alt="" class="w-full" />
        </div>
      </div>
    </section>

    <!-- Facilities -->
    <section class="section bg-white">
      <div class="div flex-col gap-[24px] xl:gap-[40px]">
        <div
          class="flex flex-col gap-[16px] bg-black px-[16px] py-[24px] xl:flex-row xl:items-center xl:justify-start"
        >
          <img src="/img/redbar.png" alt="" class="w-fit xl:order-1" />
          <p class="font-28 font-bold text-white">
            Fasilitas Sekitar
          </p>
        </div>
        <!--  -->
        <div
          class="flex flex-col gap-[24px] xl:grid xl:grid-cols-2 xl:gap-[40px]"
        >
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31855.820557039493!2d98.681436!3d3.592618!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131c784afcce9%3A0x1c0f6a9ddeb16361!2sClapham%20Collective%20-%20Office%20Space%2C%20Meeting%20Room%2C%20Private%20Office%2C%20Coworking%20and%20Event%20Space!5e0!3m2!1sen!2sus!4v1719458383393!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="flex flex-col gap-[16px] xl:grid xl:grid-cols-2">
            <card
              class="flex flex-row items-start gap-[16px] bg-light-grey p-[20px]"
            >
              <img src="/img/facilities1.png" alt="" class="w-fit" />
              <div>
                <p class="font-16 mb-[8px] font-bold">Kereta Api</p>
                <p class="font-12 xl:font-14">
                  Stasiun Kereta Api Bandara (400 m)
                </p>
              </div>
            </card>
            <card
              class="flex flex-row items-start gap-[16px] bg-light-grey p-[20px]"
            >
              <img src="/img/facilities2.png" alt="" class="w-fit" />
              <div>
                <p class="font-16 mb-[8px] font-bold">Taksi & Kendaraan Online</p>
                <p class="font-12 xl:font-14">
                  Base Camp Bluebird (210 m) <br />
                  Base Camp Grab (210 m)
                </p>
              </div>
            </card>
            <card
              class="flex flex-row items-start gap-[16px] bg-light-grey p-[20px]"
            >
              <img src="/img/facilities3.png" alt="" class="w-fit" />
              <div>
                <p class="font-16 mb-[8px] font-bold">Rumah Sakit</p>
                <p class="font-12 xl:font-14">
                    Rumah Sakit Murni Teguh Memoria (290 m)
                </p>
              </div>
            </card>
            <card
              class="flex flex-row items-start gap-[16px] bg-light-grey p-[20px]"
            >
              <img src="/img/facilities4.png" alt="" class="w-fit" />
              <div>
                <p class="font-16 mb-[8px] font-bold">Hotel</p>
                <p class="font-12 xl:font-14">
                    Hotel deSatu (30 m) <br />
                    Hotel Boutique Karibia (250 m)
                </p>
              </div>
            </card>
            <card
              class="flex flex-row items-start gap-[16px] bg-light-grey p-[20px]"
            >
              <img src="/img/facilities5.png" alt="" class="w-fit" />
              <div>
                <p class="font-16 mb-[8px] font-bold">Gym</p>
                <p class="font-12 xl:font-14">Vista Gym (76 m)</p>
              </div>
            </card>
            <card
              class="flex flex-row items-start gap-[16px] bg-light-grey p-[20px]"
            >
              <img src="/img/facilities6.png" alt="" class="w-fit" />
              <div>
                <p class="font-16 mb-[8px] font-bold">Mall</p>
                <p class="font-12 xl:font-14">Center Point (230 m)</p>
              </div>
            </card>
            <card
              class="flex flex-row items-start gap-[16px] bg-light-grey p-[20px]"
            >
              <img src="/img/facilities7.png" alt="" class="w-fit" />
              <div>
                <p class="font-16 mb-[8px] font-bold">Restoran</p>
                <p class="font-12 xl:font-14">
                  Nasi Padang Istana Krakatau (220 m)
                </p>
              </div>
            </card>
            <card
              class="flex flex-row items-start gap-[16px] bg-light-grey p-[20px]"
            >
              <img src="/img/facilities8.png" alt="" class="w-fit" />
              <div>
                <p class="font-16 mb-[8px] font-bold">Cafe</p>
                <p class="font-12 xl:font-14">
                  Starbucks (80 m) <br />
                  J.Co Donuts (80 m) <br />
                  Coffeenatics (80 m)
                </p>
              </div>
            </card>
            <card
              class="flex flex-row items-start gap-[16px] bg-light-grey p-[20px]"
            >
              <img src="/img/facilities9.png" alt="" class="w-fit" />
              <div>
                <p class="font-16 mb-[8px] font-bold">Bar</p>
                <p class="font-12 xl:font-14">
                  Healymacs Irish (50 m) <br />
                  Merdeka Walk (50 m)
                </p>
              </div>
            </card>
          </div>
        </div>
        <!--  -->
      </div>
    </section>

    <!-- Our Gallery -->
    <section class="section">
      <div class="div flex-col gap-[24px] text-center xl:text-left">
        <p class="font-28 font-bold">
          Galeri <span class="text-red">Kami</span>
        </p>
        <img src="/img/gallery2.png" alt="" class="xl:hidden" />
        <img src="/img/gallery1.png" alt="" class="hidden xl:block" />
      </div>
    </section>

    <!-- Testimonial -->
    <section class="section">
      <div class="div flex-col gap-[24px]">
        <p class="font-28 font-bold">
          Kata Mereka tentang
          <span class="text-red">Clapham</span>
        </p>
        <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-2">
          <card class="flex flex-col gap-[16px] bg-light-grey p-[16px]">
            <div class="flex items-center justify-between">
              <img
                src="/img/avatar1.png"
                alt=""
                class="w-[80px] rounded-full"
              />
              <img src="/img/semicolon.png" alt="" class="w-[32px]" />
            </div>
            <div>
              <p class="font-16 font-bold xl:mb-[8px] xl:text-[28px]">
                Ben Johnson
              </p>
              <p class="font-14 font-medium text-[#414346] xl:text-[20px]">
                CTO di Dealjava
              </p>
            </div>
            <p class="font-14 xl:text-[16px]">
              Akselerator startup terbaik di Medan! Clapham memberikan kenyamanan dan ruang kantor profesional. Banyak perusahaan startup berkumpul di sini untuk berbagi ilmu.
            </p>
          </card>
          <card class="flex flex-col gap-[16px] bg-light-grey p-[16px]">
            <div class="flex items-center justify-between">
              <img
                src="/img/avatar2.png"
                alt=""
                class="w-[80px] rounded-full"
              />
              <img src="/img/semicolon.png" alt="" class="w-[32px]" />
            </div>
            <div>
              <p class="font-16 font-bold xl:mb-[8px] xl:text-[28px]">
                Benny Batara
              </p>
              <p class="font-14 font-medium text-[#414346] xl:text-[20px]">
                Chief Investment Strategist
              </p>
            </div>
            <p class="font-14 xl:text-[16px]">
              Pengalaman bagus, lokasi strategis, dan layanan yang luar biasa.
            </p>
          </card>
        </div>
      </div>
    </section>

    <!-- Form -->
    <section class="section">
      <div
        class="div flex-col gap-[24px] xl:flex-row xl:items-start xl:gap-[44px]"
      >
        <img src="/img/foo3.png" alt="" />
        <div class="flex flex-col gap-[16px]">
          <p class="font-28 font-bold xl:text-[28px]">
            Temukan Ruang Kerja Ideal Anda Bersama Kami Sekarang!
          </p>
          <p class="font-16 font-medium text-[#717375] xl:text-[14px]">
            Mencari sewa ruang kantor bulanan dan acara yang terjangkau di Medan memang bisa merepotkan. Tapi biarkan kami yang mencarikannya untuk Anda bersama Clapham Collective.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section">
      <div class="div flex-col gap-[34px]">
        <div>
          <img src="/img/redbar.png" alt="" class="mb-[34px]" />
          <p class="font-28 font-bold">Apa yang ingin Anda ketahui?</p>
        </div>
        <div class="flex flex-col gap-[24px]">
          <faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
                Apa keuntungan sewa private office space di Clapham?
            </p>
            <p class="font-14 text-[#292929]">
                Sewa space kantor di Clapham menawarkan berbagai keuntungan karena dirancang secara cermat untuk memenuhi kebutuhan unik Anda.
            </p>
            </faq>
            <faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
                Fasilitas apa saja yang tersedia di sekitar ruang kantor?
            </p>
            <p class="font-14 text-[#292929]">
                Dengan sewa ruang kantor kami di Medan, Anda akan mendapati fasilitas kerja terbaik seperti dekat dengan Stasiun Kereta Api Bandara (400 m), Rumah Sakit Murni Teguh Memorial (290 m), Vista Gym (76 m), serta berbagai pilihan tempat makan, belanja, dan akomodasi. <br> <br>
                Untuk pertanyaan tambahan atau untuk mempelajari lebih lanjut tentang sewa space kantor dan ruang aula acara kami, silakan hubungi kami langsung di (+6261) 805 109 77 atau kunjungi kami di Clapham Co-working & Event Space, Ruko Centre Point Medan, Jalan Timor Blok G No. III/IV Lantai 2, Gang Buntu, Medan Timur, Kota Medan, Sumatera Utara 20231.
            </p>
            </faq>
            <faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
                Apa jam operasional untuk kantor pribadi dan ruang acara?
            </p>
            <p class="font-14 text-[#292929]">
                Jam operasional kami adalah Senin hingga Jumat dari jam 09:00 pagi hingga 17:00 sore, dan Sabtu dari jam 09:00 pagi hingga 14:00 siang.
            </p>
            </faq>
            <faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
                Jenis ruang kerja atau kantor pribadi apa saja yang Clapham Medan tawarkan?
            </p>
            <p class="font-14 text-[#292929]">
                Kami menawarkan sewa kantor pribadi dengan biaya bulanan yang murah dan ruangan kerja yang nyaman untuk tim dengan berbagai ukuran. Ruang kerja yang kami sewakan dirancang untuk menyediakan lingkungan kerja yang didedikasikan dan profesional sesuai kebutuhan bisnis Anda.
            </p>
            </faq>
            <faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
                Berapa harga sewa awal untuk space kantor di Clapham Medan?
            </p>
            <p class="font-14 text-[#292929]">
                Harga awal untuk biaya sewa bulanan kantor di Clapham Medan mulai dari Rp 5.000.000 per bulan.
            </p>
            </faq>
            <faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
                Jenis acara apa saja yang bisa diadakan di ruang acara Clapham?
            </p>
            <p class="font-14 text-[#292929]">
                Ruang aula acara kami sempurna untuk seminar, konferensi pers, dan pertemuan perusahaan besar karena ruangan ini dapat menampung hingga 500 orang.
            </p>
            </faq>
            <faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
                Berapa harga awal untuk menyewa ruang acara di Clapham Medan?
            </p>
            <p class="font-14 text-[#292929]">
                Harga awal untuk ruang sewa ruang aula acara kami mulai dari Rp 550.000 per jam.
            </p>
            </faq>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section class="section bg-black">
      <div class="div flex-col gap-[56px]">
        <div class="flex flex-col gap-[32px] xl:grid xl:grid-cols-3">
          <div class="flex flex-col items-start gap-[24px]">
            <img src="/img/logo.png" alt="" />
            <p class="font-16 max-w-[400px] text-white">
              Solusi sewa ruangan kantor, private office space, dan event space di Medan untuk acara seminar atau pertemuan dengan harga murah, tersedia dalam berbagai pilihan biaya sewa mulai bulanan hingga tahunan.
              <br><br>
              ​Komp. Ruko Centre Point Medan Jalan Timor Blok G No. III/IV 2nd
              Floor, Gang Buntu, Medan Timur, Medan City, North Sumatra 20231
            </p>
          </div>
          <div class="flex flex-col items-start gap-[8px]">
            <p class="font-20 max-w-[400px] font-semibold text-white">Perusahaan</p>
            <a href="/" class="flex gap-[8px]">
              <p class="font-16 text-white">Tentang Clapham Company</p>
            </a>
            <a href="/" class="flex gap-[8px]">
              <p class="font-16 text-white">Karir</p>
            </a>
          </div>
          <div class="flex flex-col items-start gap-[16px]">
            <p class="font-20 max-w-[400px] font-semibold text-white">
                Kontak
            </p>
            <a href="/" class="flex gap-[8px]">
              <img src="/img/footer6.png" alt="" />
              <p class="font-16 text-white">hello@clapham.id</p>
            </a>
            <a href="/" class="flex gap-[8px]">
              <img src="/img/footer7.png" alt="" />
              <p class="font-16 text-white">(061) 80510977 ​</p>
            </a>
            <a href="/" class="flex gap-[8px]">
              <img src="/img/wa.png" alt="" />
              <p class="font-16 text-white">(+62) 821-2783-2456</p>
            </a>
          </div>
        </div>
        <div
          class="flex flex-col gap-[16px] xl:flex-row xl:items-center xl:justify-between"
        >
          <div class="flex gap-[16px] xl:order-1 xl:gap-[40px]">
            <a href=""><img src="/img/footer1.png" alt="" /></a>
            <a href=""><img src="/img/footer2.png" alt="" /></a>
            <a href=""><img src="/img/footer3.png" alt="" /></a>
            <a href=""><img src="/img/footer4.png" alt="" /></a>
            <a href=""><img src="/img/footer5.png" alt="" /></a>
          </div>
          <p class="font-14 text-[14px] text-white">
            Clapham @2024. All rights reserved.
          </p>
        </div>
      </div>
    </section>
    </main>
</template>