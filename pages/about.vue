<template>
    <Hero>About Hero {{ header }}</Hero>
    <section>
        <p>This page will be displayed at the /about route.</p>
    </section>
</template>

<script setup>
    const header = useHeaderLight()
    header.value = true
</script>