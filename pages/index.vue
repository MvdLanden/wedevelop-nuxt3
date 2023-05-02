<template>
    <Hero>Herooo {{ header }}</Hero>    
</template>

<script setup>
    const header = useHeaderLight()
    header.value = false

    useHead({
        title: "Homepage",
    })
</script>

<style scoped></style>
