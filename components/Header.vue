<template>
    <header ref="header" class="container relative grid grid-cols-5 items-center gap-0 bg-white py-4" :class="{ light: lightHeader }">
        <img src="https://via.placeholder.com/168x56" class="left-0 top-0" alt="Logo" />
        <nav class="col-span-3 justify-self-center">
            <ul class="flex space-x-6">
                <li v-for="item in menu" :key="item">
                    <NuxtLink :to="'/' + item.slug">{{ item.label }}</NuxtLink>
                </li>
            </ul>
        </nav>
        <Button link="/" class="justify-self-end" menuToggle>Button</Button>
    </header>
</template>

<script setup>
    const menu = [
        { label: "Home", slug: "" },
        { label: "About", slug: "about" },
        { label: "Another", slug: "another" },
    ];

    const route = ref(useRoute());

    console.log(route.value.path);

    const lightHeader = computed(() => {
        return route === "/" ? true : false;
    });
</script>

<style scoped></style>
