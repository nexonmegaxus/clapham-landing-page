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
              Solution for Private Office and Event Space Rentals in Medan
            </p>
          </div>
          <div class="flex gap-[24px]">
            <a href="/" class="btn-red">Get A Quote</a>
          </div>
          <div class="flex justify-between gap-[8px] xl:pb-[32px]">
            <div class="flex flex-col items-center gap-[8px]">
              <p class="font-36 font-bold text-white">35+</p>
              <p class="font-14 font-normal text-grey xl:text-[20px]">
                Meeting Rooms
              </p>
            </div>
            <div class="flex flex-col items-center gap-[8px]">
              <p class="font-36 font-bold text-white">20+</p>
              <p class="font-14 font-normal text-grey xl:text-[20px]">
                Workspaces
              </p>
            </div>
            <div class="flex flex-col items-center gap-[8px]">
              <p class="font-36 font-bold text-white">10+</p>
              <p class="font-14 font-normal text-grey xl:text-[20px]">
                Companies
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
          <p class="font-28 font-bold">Building Overview</p>
          <p class="font-16">
            Founded in 2015, Clapham Collective offers affordable monthly
            serviced private office space and event place rentals in Medan. We
            provide a modern, comfortable environment for entrepreneurs and
            creatives to thrive outside traditional workplaces. Discover your
            ideal monthly office space at Clapham Medan!
          </p>
          <a href="/" class="btn-red mt-[16px] w-full xl:w-fit">Book Now</a>
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
            Our <span class="text-red">Space</span>
          </p>
          <p class="font-16 font-medium">
            Modern and luxurious private serviced office and event spaces,
            complete with various amenities, available for rent to Clapham
            users.
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
          <p class="font-28 font-bold text-white">Amenities & Benefits</p>
        </div>
        <div class="grid grid-cols-2 gap-[20px] xl:grid-cols-4 xl:gap-[40px]">
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities1.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">High-Speed Wifi</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities2.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Free Drinks</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities3.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">HD Projectors</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities4.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Printing Service</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities5.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Front Desk Service</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities6.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Walk-in Pantries</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities7.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Mail & Package Handling</p>
          </div>
          <div class="flex flex-col gap-[16px] bg-light-grey p-[20px]">
            <img src="/img/amenities8.png" alt="" class="w-fit" />
            <p class="font-16 font-bold">Access to Common Area</p>
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
            We Provide You a Comfortable Workspace
          </p>
          <p class="font-16">
            We offer perfect event space rental, suitable for seminars, press
            conferences, and large company meetings with a capacity of up to 500
            people. We also provide private serviced office space rentals for
            teams of various sizes.
          </p>
          <a href="/" class="btn-red mt-[16px] w-full xl:w-fit">Book Now</a>
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
            Surrounded by Many Facilities
          </p>
        </div>
        <!--  -->
        <div
          class="flex flex-col gap-[24px] xl:grid xl:grid-cols-2 xl:gap-[40px]"
        >
          <div>
            <img src="/img/maps.png" alt="" class="w-full" />
          </div>
          <div class="flex flex-col gap-[16px] xl:grid xl:grid-cols-2">
            <card
              class="flex flex-row items-start gap-[16px] bg-light-grey p-[20px]"
            >
              <img src="/img/facilities1.png" alt="" class="w-fit" />
              <div>
                <p class="font-16 mb-[8px] font-bold">Train</p>
                <p class="font-12 xl:font-14">
                  Airport Railway Station (400 m)
                </p>
              </div>
            </card>
            <card
              class="flex flex-row items-start gap-[16px] bg-light-grey p-[20px]"
            >
              <img src="/img/facilities2.png" alt="" class="w-fit" />
              <div>
                <p class="font-16 mb-[8px] font-bold">Taxi</p>
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
                <p class="font-16 mb-[8px] font-bold">Hospital</p>
                <p class="font-12 xl:font-14">
                  Murni Teguh Memoria Hospital (290 m)
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
                  deSatu Hotel (30 m) <br />
                  Karibia Boutique Hotel (250 m)
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
                <p class="font-16 mb-[8px] font-bold">Resto</p>
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
          Our <span class="text-red">Gallery</span>
        </p>
        <img src="/img/gallery2.png" alt="" class="xl:hidden" />
        <img src="/img/gallery1.png" alt="" class="hidden xl:block" />
      </div>
    </section>

    <!-- Testimonial -->
    <section class="section">
      <div class="div flex-col gap-[24px]">
        <p class="font-28 font-bold">
          What Our Customers Say About
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
                CTO at Dealjava
              </p>
            </div>
            <p class="font-14 xl:text-[16px]">
              The best startup accelerator in Medan! Clapham provides
              convenience and professional office space. Mostly startup
              companies gather here to share their knowledge.
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
              Good experience, very good location, and awesome hospitality
              service.
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
            We Can Help You Find Ideal Workspace
          </p>
          <p class="font-16 font-medium text-[#717375] xl:text-[14px]">
            Looking for the perfect workspace can be a hassle. Let us take care
            of the search and find the ideal workspace that suits your needs.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section">
      <div class="div flex-col gap-[34px]">
        <div>
          <img src="/img/redbar.png" alt="" class="mb-[34px]" />
          <p class="font-28 font-bold">What do you want to know?</p>
        </div>
        <div class="flex flex-col gap-[24px]">
          <faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
              What are the benefits of renting private office space at Clapham
              Medan?
            </p>
            <p class="font-14 text-[#292929]">
              Rent serviced office space at Clapham Medan offers various
              advantages as it is meticulously designed to meet your unique
              needs.
            </p> </faq
          ><faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
              What facilities are available around the office space?
            </p>
            <p class="font-14 text-[#292929]"></p> </faq
          ><faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
              What are the operating hours for private offices and event spaces?
            </p>
            <p class="font-14 text-[#292929]"></p>
          </faq>
          <faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
              What types of private offices does Clapham Medan offer?
            </p>
            <p class="font-14 text-[#292929]"></p>
          </faq>
          <faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
              What is the starting rental price for a private office at Clapham
              Medan?
            </p>
            <p class="font-14 text-[#292929]"></p>
          </faq>
          <faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
              What types of events can be hosted in Clapham event space?
            </p>
            <p class="font-14 text-[#292929]"></p>
          </faq>
          <faq
            class="xl:pb-[30px]mb-[30px] mb-[16px] flex flex-col gap-[16px] border-b-2 border-grey pb-[16px] xl:gap-[40px]"
          >
            <p class="font-16 font-bold">
              What is the starting rental price for event space at Clapham
              Medan?
            </p>
            <p class="font-14 text-[#292929]"></p>
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
              ​Komp. Ruko Centre Point Medan Jalan Timor Blok G No. III/IV 2nd
              Floor, Gang Buntu, Medan Timur, Medan City, North Sumatra 20231
            </p>
          </div>
          <div class="flex flex-col items-start gap-[8px]">
            <p class="font-20 max-w-[400px] font-semibold text-white">About</p>
            <a href="/" class="flex gap-[8px]">
              <p class="font-16 text-white">About Clapham Company</p>
            </a>
            <a href="/" class="flex gap-[8px]">
              <p class="font-16 text-white">Careers</p>
            </a>
          </div>
          <div class="flex flex-col items-start gap-[16px]">
            <p class="font-20 max-w-[400px] font-semibold text-white">
              Contact
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