<!-- default.vue -->
<template>
    <div>
        <Header isLight />
        <slot />
        <Footer />
    </div>
</template>

<script setup>
    const pageSettings = {
        headerLight: true
    }

    const isLight = computed(() => (headerLight ? true : false));
</script>
