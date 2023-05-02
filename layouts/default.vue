<template>
    <Header :isLight="header"></Header>
    <slot />
    <Footer></Footer>
</template>

<script setup>
    const header = useHeaderLight()
</script>