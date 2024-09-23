<template>
    <main>
        <!-- Description -->
        <section class="section pb-[32px]">
            <div class="div flex-col gap-[16px]">
                <h1 class="font-36 font-bold">Workfrom Blog</h1>
                <p class="font-20 font-bold text-c-blue">Lifestyle</p>
            </div>
        </section>

        <!-- Content -->
        <section class="section pt-[32px]">
            <div class="div flex-col xl:grid xl:grid-cols-3 xl:gap-[32px]">
                <!-- Left Column -->
                <div class="grid xl:col-span-2">
                    <!-- Artikel Terbaru -->
                    <div class="grid gap-[24px] xl:grid-cols-2">
                        <NuxtLink
                            v-for="a in articles"
                            :key="a.id"
                            :to="`/blog/${a.slug}`"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-[#ddd] bg-white transition hover:scale-105"
                        >
                            <img :src="a.yoast_head_json.og_image[0].url" class="object-cover xl:h-[240px]" alt="Image" />
                            <div class="flex flex-col gap-[8px] p-[16px]">
                                <!-- v-if category badges -->
                                <p
                                    v-if="a.categories[0] == 30"
                                    class="font-12 w-fit rounded-full bg-[#E0F2FF] px-2 py-1 font-semibold text-c-blue"
                                >
                                    Business Tips
                                </p>
                                <p
                                    v-if="a.categories[0] == 22"
                                    class="font-12 w-fit rounded-full bg-[#E0F2FF] px-2 py-1 font-semibold text-c-blue"
                                >
                                    Lifestyle
                                </p>
                                <p
                                    v-if="a.categories[0] == 24"
                                    class="font-12 w-fit rounded-full bg-[#E0F2FF] px-2 py-1 font-semibold text-c-blue"
                                >
                                    Office Space
                                </p>
                                <!-- v-if category badges -->
                                <h2 class="font-16 font-bold">{{ a.title.rendered }}</h2>
                                <p class="font-12">{{ a.yoast_head_json.description }}</p>
                                <div class="flex items-center gap-[8px]">
                                    <p class="font-12 text-[10px] xl:text-[12px]">{{ a.yoast_head_json.author }}</p>
                                    <p>•</p>
                                    <p class="font-12 text-[10px] xl:text-[12px]">{{ a.date }}</p>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <!-- Right Column -->
                <div>
                    <!-- Kategori -->
                    <p class="font-20 mb-[24px] font-bold">Kategori Lainnya</p>
                    <div class="grid gap-[16px]">
                        <NuxtLink
                            to="/category/business-tips"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-[#ddd] bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">Business Tips</h2>
                        </NuxtLink>
                        <NuxtLink
                            to="/category/lifestyle"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-[#ddd] bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">Lifestyle</h2>
                        </NuxtLink>
                        <NuxtLink
                            to="/category/office-space"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-[#ddd] bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-14 font-bold">Office Space</h2>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// fetch archive articles
const { data: articles } = await useFetch(
    'https://cms-clapham.workfrom.id/wp-json/wp/v2/posts?_fields=id,slug,yoast_head_json.og_image,yoast_head_json.description,yoast_head_json.author,title,description,date,categories&per_page=10&categories=22'
);
// seo meta
useSeoMeta({
    title: 'Lifestyle',
    description: `Unlock the secrets to creating productive and inspiring environments with our expert articles on building design, coworking spaces, and productivity hacks. Whether you're an entrepreneur, freelancer, or business owner, our blog offers valuable insights to help you maximize efficiency and foster collaboration.`,
});
</script>
