<template>
    <header class="w-full px-24 py-4" :class="headerStyle">
        <div class="">
            <div class="grid grid-cols-5 items-center gap-0">
                <Logo />
                <nav class="col-span-3 justify-self-center">
                    <ul class="flex space-x-6">
                        <li v-for="item in menu.primary" :key="item">
                            <NuxtLink :to="'/' + item.slug">{{ item.name }}</NuxtLink>
                        </li>
                    </ul>
                </nav>
                <div class="flex items-center justify-self-end rounded-full bg-white p-1">
                    <NuxtLink to="/" class="inline-block rounded-full bg-red-500 px-8 py-4 leading-none text-white">Button</NuxtLink>
                    <button @click="isActive = true" class="mx-6 text-black">Menu<span class="ml-3">O</span></button>
                </div>
            </div>
        </div>
        <Nav @close="isActive = false" :isActive="isActive" :menu="menu" />
    </header>
</template>

<script setup>
    const props = defineProps({ isLight: Boolean, menu: Object });

    const headerStyle = computed(() => {
        return props.isLight ? "bg-white" : "border-b border-white absolute text-white";
    });

    let isActive = ref(false);
</script>

<style scoped></style>
