<template>
    <main>
        <!-- Content -->
        <section class="section xl:pt-[200px]">
            <div class="div flex-col xl:grid xl:grid-cols-3 xl:gap-[32px]">
                <!-- Left Column -->
                <div class="grid xl:col-span-2">
                    <div class="flex flex-col items-start gap-[16px]">
                        <!-- v-if category badges -->
                        <p
                            v-if="article?.at(0)?.categories[0] == 30"
                            class="font-12 w-fit rounded-full bg-[#E0F2FF] px-2 py-1 font-semibold text-c-blue"
                        >
                            Business Tips
                        </p>
                        <p
                            v-if="article?.at(0)?.categories[0] == 22"
                            class="font-12 w-fit rounded-full bg-[#E0F2FF] px-2 py-1 font-semibold text-c-blue"
                        >
                            Lifestyle
                        </p>
                        <p
                            v-if="article?.at(0)?.categories[0] == 24"
                            class="font-12 w-fit rounded-full bg-[#E0F2FF] px-2 py-1 font-semibold text-c-blue"
                        >
                            Office Space
                        </p>
                        <!-- v-if category badges -->
                        <h1 class="font-32 text-left font-bold">{{ article?.at(0)?.title.rendered }}</h1>
                        <p class="font-16 text-left">{{ article?.at(0)?.yoast_head_json.description }}</p>
                        <p class="font-14 text-left font-bold">{{ article?.at(0)?.date }}</p>
                        <div class="flex w-full items-center gap-[8px] rounded-xl bg-[#E0F2FF] p-[12px]">
                            <div class="flex flex-col">
                                <p class="font-14">{{ article?.at(0)?.yoast_head_json.author }}</p>
                                <p class="font-12 text-[10px] xl:text-[12px]">Copywriter</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <img
                        :src="article?.at(0)?.yoast_head_json.og_image[0].url"
                        class="mb-[24px] w-[560px] rounded-lg"
                        alt="Image"
                    />
                    <div class="font-16 article prose" v-html="article?.at(0)?.content.rendered"></div>
                    <div class="mt-[24px] flex w-full items-center gap-[8px] rounded-xl bg-[#E0F2FF] p-[12px]">
                        <div class="flex flex-col">
                            <p class="font-14">{{ article?.at(0)?.yoast_head_json.author }}</p>
                            <p class="font-12 text-[10px] xl:text-[12px]">Copywriter</p>
                        </div>
                    </div>
                </div>
                <!-- Right Column -->
                <div>
                    <!-- Artikel Serupa -->
                    <p class="font-20 mb-[24px] mt-[32px] font-bold xl:mt-0">Artikel Serupa</p>
                    <div class="grid gap-[16px]">
                        <NuxtLink
                            v-for="a in similar"
                            :key="a.id"
                            :to="`/blog/${a.slug}`"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-[#ddd] bg-white transition hover:scale-105"
                        >
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
                            </div>
                        </NuxtLink>
                    </div>
                    <!-- Kategori -->
                    <p class="font-20 mb-[24px] mt-[32px] font-bold">Kategori</p>
                    <div class="grid gap-[16px]">
                        <NuxtLink
                            to="/category/business-tips"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-[#ddd] bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-16 font-bold">Business Tips</h2>
                        </NuxtLink>
                        <NuxtLink
                            to="/category/lifestyle"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-[#ddd] bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-16 font-bold">Lifestyle</h2>
                        </NuxtLink>
                        <NuxtLink
                            to="/category/office-space"
                            class="flex flex-col overflow-hidden rounded-2xl border-2 border-[#ddd] bg-white p-[16px] transition hover:scale-105"
                        >
                            <h2 class="font-16 font-bold">Office Space</h2>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
// define interface
// interface Article {
//     id: number;
//     slug: string;
//     title: {
//         rendered: string;
//     };
//     content: {
//         rendered: string;
//     };
//     yoast_head_json: {
//         title: string;
//         description?: string;
//         og_image: [
//             {
//                 url: string;
//                 type: 'image/jpeg';
//             },
//         ];
//     };
// }

// fetch
const { slug } = useRoute().params;
const { data: article } = await useFetch(`https://cms.workfrom.id/wp-json/wp/v2/posts?slug=${slug}`);
const { data: similar } = await useFetch(
    'https://cms.workfrom.id/wp-json/wp/v2/posts?_fields=id,slug,yoast_head_json.og_image,yoast_head_json.description,yoast_head_json.author,title,description,date,categories&per_page=5&categories=30'
);
// seo meta
useSeoMeta({
    title: article.value?.at(0)?.title.rendered ?? 'Blog',
    description: article.value?.at(0)?.yoast_head_json.description ?? 'Blog',
});

// error handling
if (article.value.length === 0) {
    throw createError({ statusCode: 404, statusMessage: 'Posts not found!' });
}
</script>

<style>
.prose {
    max-width: 100%;
}

@media only screen and (max-width: 480px) {
    iframe,
    img {
        max-width: 320px !important;
    }
}
</style>
