<template>
    <NuxtLink to="/" class="rounded-full bg-red-500 px-8 py-4 leading-none text-white inline-block">
        <slot />
    </NuxtLink>
</template>

<script setup>
    defineProps({
        link: String,
        menuToggle: Boolean,
    });
</script>

<style scoped></style>
