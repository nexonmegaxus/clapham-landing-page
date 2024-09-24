<template>
    <main>
        <!-- Description -->
        <section class="section pb-[32px]">
            <div class="div flex-col gap-[16px]">
                <h1 class="font-36 font-bold">Workfrom Blog</h1>
                <p class="font-20 font-bold text-c-blue">Categories</p>
            </div>
        </section>

        <!-- Content -->
        <section class="section pt-[32px]">
            <div class="div flex-col xl:grid xl:grid-cols-1 xl:gap-[32px]">
                <div>
                    <!-- Kategori -->
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
// seo meta
useSeoMeta({
    title: 'Business Tips',
    description: `Unlock the secrets to creating productive and inspiring environments with our expert articles on building design, coworking spaces, and productivity hacks. Whether you're an entrepreneur, freelancer, or business owner, our blog offers valuable insights to help you maximize efficiency and foster collaboration.`,
});
</script>
