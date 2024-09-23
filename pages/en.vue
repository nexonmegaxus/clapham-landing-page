<template>
    <main>
        <!-- Hero -->
        <section class="section bg-black pt-[80px] xl:py-0 xl:pb-0">
            <div class="div xl:grid xl:grid-cols-2 xl:gap-[60px] xl:pr-0">
                <div class="flex flex-col gap-[32px] xl:pt-[120px]">
                    <img src="/img/hero2.webp" alt="Image" />
                    <div>
                        <p class="font-20 text-teal mb-[8px] font-semibold">Clapham Collective</p>
                        <p class="font-36 font-bold text-white">Solution for Private Office and Event Space Rentals in Medan</p>
                    </div>
                    <div class="flex gap-[24px]">
                        <a href="#forms" class="btn-red">Get A Quote</a>
                    </div>
                    <div class="flex justify-between gap-[8px] xl:pb-[32px]">
                        <div class="flex flex-col items-center gap-[8px]">
                            <p class="font-36 font-bold text-white">35+</p>
                            <p class="font-14 text-grey font-normal xl:text-[20px]">Meeting Rooms</p>
                        </div>
                        <div class="flex flex-col items-center gap-[8px]">
                            <p class="font-36 font-bold text-white">20+</p>
                            <p class="font-14 text-grey font-normal xl:text-[20px]">Workspaces</p>
                        </div>
                        <div class="flex flex-col items-center gap-[8px]">
                            <p class="font-36 font-bold text-white">10+</p>
                            <p class="font-14 text-grey font-normal xl:text-[20px]">Companies</p>
                        </div>
                    </div>
                </div>
                <div class="hidden xl:flex">
                    <img src="/img/hero1.webp" alt="Image" />
                </div>
            </div>
        </section>

        <!-- Logo -->
        <section class="section bg-white">
            <div
                class="div grid grid-cols-3 items-center justify-center justify-items-center gap-[32px] text-center opacity-50 grayscale xl:grid-cols-5"
            >
                <img src="/img/logo1.webp" alt="Image" />
                <img src="/img/logo2.webp" alt="Image" />
                <img src="/img/logo3.webp" alt="Image" />
                <img src="/img/logo4.webp" alt="Image" />
                <img src="/img/logo5.webp" alt="Image" />
            </div>
        </section>

        <!-- Building Overview -->
        <section class="section bg-white">
            <div class="div xl:gap- [80px] flex-col gap-[24px] xl:grid xl:grid-cols-2 xl:items-center">
                <div>
                    <img src="/img/foo2.webp" alt="Image" />
                </div>
                <div class="flex flex-col gap-[16px]">
                    <img src="/img/greenbar.webp" alt="Image" class="w-fit" />
                    <p class="font-28 font-bold">Building Overview</p>
                    <p class="font-16">
                        Founded in 2015, Clapham Collective offers affordable monthly serviced private office space and event
                        place rentals in Medan. We provide a modern, comfortable environment for entrepreneurs and creatives to
                        thrive outside traditional workplaces. Discover your ideal monthly office space at Clapham Medan!
                    </p>
                    <a href="#forms" class="btn-red mt-[16px] w-full xl:w-fit">Book Now</a>
                </div>
            </div>
        </section>

        <!-- Our Space -->
        <section class="section bg-white">
            <div class="div flex-col gap-[24px]">
                <div class="flex flex-col gap-[8px] xl:grid xl:grid-cols-2 xl:gap-[80px]">
                    <p class="font-28 font-bold xl:text-[56px]">Our <span class="text-red">Space</span></p>
                    <p class="font-16 font-medium">
                        Modern and luxurious private serviced office and event spaces, complete with various amenities, available
                        for rent to Clapham users.
                    </p>
                </div>
                <div class="flex flex-row gap-[12px] overflow-x-auto">
                    <img src="/img/space1.webp" class="w-[140px] xl:w-fit" />
                    <img src="/img/space2.webp" class="w-[140px] xl:w-fit" />
                    <img src="/img/space3.webp" class="w-[140px] xl:w-fit" />
                    <img src="/img/space4.webp" class="w-[140px] xl:w-fit" />
                    <img src="/img/space5.webp" class="w-[140px] xl:w-fit" />
                </div>
            </div>
        </section>

        <!-- Amenities -->
        <section class="section bg-white">
            <div class="div flex-col gap-[24px] xl:gap-[40px]">
                <div class="flex flex-col gap-[16px] bg-black px-[16px] py-[24px] xl:flex-row xl:items-center xl:justify-end">
                    <img src="/img/redbar.webp" alt="Image" class="w-fit" />
                    <p class="font-28 font-bold text-white">Amenities & Benefits</p>
                </div>
                <div class="grid grid-cols-2 gap-[20px] xl:grid-cols-4 xl:gap-[40px]">
                    <div class="bg-light-grey flex flex-col gap-[16px] p-[20px]">
                        <img src="/img/amenities1.webp" alt="Image" class="w-fit" />
                        <p class="font-16 font-bold">High-Speed Wifi</p>
                    </div>
                    <div class="bg-light-grey flex flex-col gap-[16px] p-[20px]">
                        <img src="/img/amenities2.webp" alt="Image" class="w-fit" />
                        <p class="font-16 font-bold">Free Drinks</p>
                    </div>
                    <div class="bg-light-grey flex flex-col gap-[16px] p-[20px]">
                        <img src="/img/amenities3.webp" alt="Image" class="w-fit" />
                        <p class="font-16 font-bold">HD Projectors</p>
                    </div>
                    <div class="bg-light-grey flex flex-col gap-[16px] p-[20px]">
                        <img src="/img/amenities4.webp" alt="Image" class="w-fit" />
                        <p class="font-16 font-bold">Printing Service</p>
                    </div>
                    <div class="bg-light-grey flex flex-col gap-[16px] p-[20px]">
                        <img src="/img/amenities5.webp" alt="Image" class="w-fit" />
                        <p class="font-16 font-bold">Front Desk Service</p>
                    </div>
                    <div class="bg-light-grey flex flex-col gap-[16px] p-[20px]">
                        <img src="/img/amenities6.webp" alt="Image" class="w-fit" />
                        <p class="font-16 font-bold">Walk-in Pantries</p>
                    </div>
                    <div class="bg-light-grey flex flex-col gap-[16px] p-[20px]">
                        <img src="/img/amenities7.webp" alt="Image" class="w-fit" />
                        <p class="font-16 font-bold">Mail & Package Handling</p>
                    </div>
                    <div class="bg-light-grey flex flex-col gap-[16px] p-[20px]">
                        <img src="/img/amenities8.webp" alt="Image" class="w-fit" />
                        <p class="font-16 font-bold">Access to Common Area</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- We Provide You -->
        <section class="section bg-white">
            <div class="div flex-col gap-[24px] xl:grid xl:grid-cols-2 xl:items-center xl:gap-[80px]">
                <div class="flex flex-col gap-[16px]">
                    <img src="/img/greenbar.webp" alt="Image" class="w-fit" />
                    <p class="font-28 font-bold">We Provide You a Comfortable Workspace</p>
                    <p class="font-16">
                        We offer perfect event space rental, suitable for seminars, press conferences, and large company meetings
                        with a capacity of up to 500 people. We also provide private serviced office space rentals for teams of
                        various sizes.
                    </p>
                    <a href="#forms" class="btn-red mt-[16px] w-full xl:w-fit">Book Now</a>
                </div>
                <div>
                    <img src="/img/foo1.webp" alt="Image" class="w-full" />
                </div>
            </div>
        </section>

        <!-- Facilities -->
        <section class="section bg-white">
            <div class="div flex-col gap-[24px] xl:gap-[40px]">
                <div class="flex flex-col gap-[16px] bg-black px-[16px] py-[24px] xl:flex-row xl:items-center xl:justify-start">
                    <img src="/img/redbar.webp" alt="Image" class="w-fit xl:order-1" />
                    <p class="font-28 font-bold text-white">Surrounded by Many Facilities</p>
                </div>
                <!--  -->
                <div class="flex flex-col gap-[24px] xl:grid xl:grid-cols-2 xl:gap-[40px]">
                    <div>
                        <img src="/img/maps.webp" alt="Image" class="w-full" />
                    </div>
                    <div class="flex flex-col gap-[16px] xl:grid xl:grid-cols-2">
                        <card class="bg-light-grey flex flex-row items-start gap-[16px] p-[20px]">
                            <img src="/img/facilities1.webp" alt="Image" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Train</p>
                                <p class="font-12 xl:font-14">Airport Railway Station (400 m)</p>
                            </div>
                        </card>
                        <card class="bg-light-grey flex flex-row items-start gap-[16px] p-[20px]">
                            <img src="/img/facilities2.webp" alt="Image" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Taxi</p>
                                <p class="font-12 xl:font-14">
                                    Base Camp Bluebird (210 m) <br />
                                    Base Camp Grab (210 m)
                                </p>
                            </div>
                        </card>
                        <card class="bg-light-grey flex flex-row items-start gap-[16px] p-[20px]">
                            <img src="/img/facilities3.webp" alt="Image" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Hospital</p>
                                <p class="font-12 xl:font-14">Murni Teguh Memoria Hospital (290 m)</p>
                            </div>
                        </card>
                        <card class="bg-light-grey flex flex-row items-start gap-[16px] p-[20px]">
                            <img src="/img/facilities4.webp" alt="Image" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Hotel</p>
                                <p class="font-12 xl:font-14">
                                    deSatu Hotel (30 m) <br />
                                    Karibia Boutique Hotel (250 m)
                                </p>
                            </div>
                        </card>
                        <card class="bg-light-grey flex flex-row items-start gap-[16px] p-[20px]">
                            <img src="/img/facilities5.webp" alt="Image" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Gym</p>
                                <p class="font-12 xl:font-14">Vista Gym (76 m)</p>
                            </div>
                        </card>
                        <card class="bg-light-grey flex flex-row items-start gap-[16px] p-[20px]">
                            <img src="/img/facilities6.webp" alt="Image" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Mall</p>
                                <p class="font-12 xl:font-14">Center Point (230 m)</p>
                            </div>
                        </card>
                        <card class="bg-light-grey flex flex-row items-start gap-[16px] p-[20px]">
                            <img src="/img/facilities7.webp" alt="Image" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Resto</p>
                                <p class="font-12 xl:font-14">Nasi Padang Istana Krakatau (220 m)</p>
                            </div>
                        </card>
                        <card class="bg-light-grey flex flex-row items-start gap-[16px] p-[20px]">
                            <img src="/img/facilities8.webp" alt="Image" class="w-fit" />
                            <div>
                                <p class="font-16 mb-[8px] font-bold">Cafe</p>
                                <p class="font-12 xl:font-14">
                                    Starbucks (80 m) <br />
                                    J.Co Donuts (80 m) <br />
                                    Coffeenatics (80 m)
                                </p>
                            </div>
                        </card>
                        <card class="bg-light-grey flex flex-row items-start gap-[16px] p-[20px]">
                            <img src="/img/facilities9.webp" alt="Image" class="w-fit" />
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
                <p class="font-28 font-bold">Our <span class="text-red">Gallery</span></p>
                <img src="/img/gallery2.webp" alt="Image" class="xl:hidden" />
                <img src="/img/gallery1.webp" alt="Image" class="hidden xl:block" />
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
                    <card class="bg-light-grey flex flex-col gap-[16px] p-[16px]">
                        <div class="flex items-center justify-between">
                            <img src="/img/avatar1.webp" alt="Image" class="w-[80px] rounded-full" />
                            <img src="/img/semicolon.webp" alt="Image" class="w-[32px]" />
                        </div>
                        <div>
                            <p class="font-16 font-bold xl:mb-[8px] xl:text-[28px]">Ben Johnson</p>
                            <p class="font-14 font-medium text-[#414346] xl:text-[20px]">CTO at Dealjava</p>
                        </div>
                        <p class="font-14 xl:text-[16px]">
                            The best startup accelerator in Medan! Clapham provides convenience and professional office space.
                            Mostly startup companies gather here to share their knowledge.
                        </p>
                    </card>
                    <card class="bg-light-grey flex flex-col gap-[16px] p-[16px]">
                        <div class="flex items-center justify-between">
                            <img src="/img/avatar2.webp" alt="Image" class="w-[80px] rounded-full" />
                            <img src="/img/semicolon.webp" alt="Image" class="w-[32px]" />
                        </div>
                        <div>
                            <p class="font-16 font-bold xl:mb-[8px] xl:text-[28px]">Benny Batara</p>
                            <p class="font-14 font-medium text-[#414346] xl:text-[20px]">Chief Investment Strategist</p>
                        </div>
                        <p class="font-14 xl:text-[16px]">
                            Good experience, very good location, and awesome hospitality service.
                        </p>
                    </card>
                </div>
            </div>
        </section>

        <!-- Forms -->
        <Forms />

        <!-- FAQ -->
        <section class="section bg-light-grey">
            <div class="div flex-col gap-[34px]">
                <div>
                    <img src="/img/redbar.webp" alt="Image" class="mb-[34px]" />
                    <p class="font-28 font-bold">What do you want to know?</p>
                </div>
                <div class="flex flex-col gap-[24px]">
                    <faq
                        class="xl:pb-[30px]mb-[30px] border-grey mb-[16px] flex flex-col gap-[16px] border-b-2 pb-[16px] xl:gap-[8px]"
                    >
                        <p class="font-16 font-bold">What are the benefits of renting private office space at Clapham Medan?</p>
                        <p class="font-14 text-[#292929]">
                            Rent serviced office space at Clapham Medan offers various advantages as it is meticulously designed
                            to meet your unique needs.
                        </p>
                    </faq>
                    <faq
                        class="xl:pb-[30px]mb-[30px] border-grey mb-[16px] flex flex-col gap-[16px] border-b-2 pb-[16px] xl:gap-[8px]"
                    >
                        <p class="font-16 font-bold">What are the benefits of renting private office space at Clapham Medan?</p>
                        <p class="font-14 text-[#292929]">
                            Rent serviced office space at Clapham Medan offers various advantages as it is meticulously designed
                            to meet your unique needs.
                        </p>
                    </faq>
                    <faq
                        class="xl:pb-[30px]mb-[30px] border-grey mb-[16px] flex flex-col gap-[16px] border-b-2 pb-[16px] xl:gap-[8px]"
                    >
                        <p class="font-16 font-bold">What facilities are available around the office space?</p>
                        <p class="font-14 text-[#292929]">
                            With our private office space rental in Medan, you will find top-notch working facilities such as
                            proximity to Airport Railway Station (400 m), Murni Teguh Memorial Hospital (290 m), Vista Gym (76 m),
                            as well as various dining, shopping, and accommodation options.
                            <br /><br />
                            For additional questions or to learn more about rent private office space and event space, please
                            contact us directly at (+6261) 805 109 77 or visit us at Clapham Co-working & Event Space, Ruko Centre
                            Point Medan, Jalan Timor Blok G No. III/IV 2nd Floor, Gang Buntu, Medan Timur, Medan City, North
                            Sumatra 20231.
                        </p>
                    </faq>
                    <faq
                        class="xl:pb-[30px]mb-[30px] border-grey mb-[16px] flex flex-col gap-[16px] border-b-2 pb-[16px] xl:gap-[8px]"
                    >
                        <p class="font-16 font-bold">What are the operating hours for private offices and event spaces?</p>
                        <p class="font-14 text-[#292929]">
                            Our operating hours are Monday to Friday from 09:00 AM to 05:00 PM, and Saturday from 09:00 AM to
                            02:00 PM.
                        </p>
                    </faq>
                    <faq
                        class="xl:pb-[30px]mb-[30px] border-grey mb-[16px] flex flex-col gap-[16px] border-b-2 pb-[16px] xl:gap-[8px]"
                    >
                        <p class="font-16 font-bold">What types of private offices does Clapham Medan offer?</p>
                        <p class="font-14 text-[#292929]">
                            We offer affordable monthly private office rentals and comfortable workspaces for teams of various
                            sizes. The workspaces we rent are designed to provide a dedicated and professional work environment
                            tailored to your business needs.
                        </p>
                    </faq>
                    <faq
                        class="xl:pb-[30px]mb-[30px] border-grey mb-[16px] flex flex-col gap-[16px] border-b-2 pb-[16px] xl:gap-[8px]"
                    >
                        <p class="font-16 font-bold">What is the starting rental price for a private office at Clapham Medan?</p>
                        <p class="font-14 text-[#292929]">
                            The starting price for monthly private office space rental at Clapham Medan starts from IDR 5,000,000
                            per month.
                        </p>
                    </faq>
                    <faq
                        class="xl:pb-[30px]mb-[30px] border-grey mb-[16px] flex flex-col gap-[16px] border-b-2 pb-[16px] xl:gap-[8px]"
                    >
                        <p class="font-16 font-bold">What types of events can be hosted in Clapham event space?</p>
                        <p class="font-14 text-[#292929]">
                            Our event space in Medan is perfect for seminars, press conferences, and large company meetings as it
                            can accommodate up to 500 people.
                        </p>
                    </faq>
                    <faq
                        class="xl:pb-[30px]mb-[30px] border-grey mb-[16px] flex flex-col gap-[16px] border-b-2 pb-[16px] xl:gap-[8px]"
                    >
                        <p class="font-16 font-bold">What is the starting rental price for event space at Clapham Medan?</p>
                        <p class="font-14 text-[#292929]">
                            The starting price for rent in Medan our event space starts from IDR 550,000 per hour.
                        </p>
                    </faq>
                </div>
            </div>
        </section>
    </main>
</template>
