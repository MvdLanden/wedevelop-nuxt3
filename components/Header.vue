<template>
    <header class="w-full py-4" :class="headerStyle">
        <div class="container">
            <div class="grid grid-cols-5 gap-0 items-center">
                <img src="https://via.placeholder.com/168x56" class="left-0 top-0" alt="Logo" />
                <nav class="col-span-3 justify-self-center">
                    <ul class="flex space-x-6">
                        <li v-for="item in menu" :key="item">
                            <NuxtLink :to="'/' + item.slug">{{ item.label }}</NuxtLink>
                        </li>
                    </ul>
                </nav>
                <Button href="/" class="justify-self-end" menuToggle>Button</Button>
            </div>
        </div>
    </header>
</template>

<script setup>
    const props = defineProps({ isLight: Boolean })

    const headerStyle = computed(() => {
        return props.isLight ? 'bg-white' : 'border-b border-white absolute text-white'
    })

    const menu = [
        { label: "Home", slug: "" },
        { label: "About", slug: "about" },
        { label: "Another", slug: "another" },
    ]
</script>

<style scoped></style>