<template>
    <section>
        <p>This page will be displayed at the /another route.</p>
    </section>
</template>

<script setup>
    const header = useHeaderLight();

    onMounted(() => {
        header.value = true;
    });
</script>
