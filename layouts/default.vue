<!-- default.vue -->
<template>
    <div>
        <Header isLight />
        <slot />
        <Footer />
    </div>
</template>

<script setup>
    const isLight = computed(() => (something ? true : false));
</script>
