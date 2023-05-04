<template>
    <Hero>
        <div class="teaser">
            We develop <span>stories</span> that matter
        </div>
        <p class="text-xl">
            Wij ontwikkelen websites, business applicaties en integraties.
        </p>
        <div class="flex flex-col items-center">
            <Button href="/" class="mb-6">Button</Button>
            <Button href="/" link>Link</Button>
        </div>
    </Hero>    
</template>

<script setup>
    const header = useHeaderLight()
    header.value = false

    useHead({
        title: "Homepage",
    })
</script>

<style scoped></style>
