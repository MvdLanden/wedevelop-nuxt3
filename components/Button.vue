<template>
    <NuxtLink :to="href" class="inline-block leading-none text-white" :class="{ 'rounded-full bg-red-500 px-8 py-4': !link }">
        <slot />
    </NuxtLink>
</template>

<script setup>
    defineProps({
        href: String,
        link: Boolean,
    });
</script>

<style scoped></style>
