<template>
    <main>
        <!-- Navbar -->
        <Navbar />

        <!-- Slot -->
        <slot />

        <!-- Footer -->
        <Footer />
    </main>
</template>

<script setup>
definePageMeta({
    colorMode: 'light',
});
</script>
