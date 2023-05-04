<template>
    <div v-if="menuToggle" class="flex bg-white p-1 rounded-full items-center" :class="{ 'justify-self-end': menuToggle }">
        <NuxtLink :to="href" class="leading-none text-white inline-block" :class="{ 'px-8 py-4 rounded-full bg-red-500': !link }">
            <slot />
        </NuxtLink>
        <div class="text-black mx-6">
            Menu<span class="ml-3">O</span>
        </div>
    </div>
    <NuxtLink v-if="!menuToggle" :to="href" class="leading-none text-white inline-block" :class="{ 'px-8 py-4 rounded-full bg-red-500': !link }">
        <slot />
    </NuxtLink>
</template>

<script setup>
    defineProps({
        href: String,
        menuToggle: Boolean,
        link: Boolean,
    });
</script>

<style scoped></style>
