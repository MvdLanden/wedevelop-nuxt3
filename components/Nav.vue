<template>
    <div class="fixed bottom-0 right-0 top-0 z-20 flex h-full w-1/2 bg-white text-black transition-transform" :class="{ 'translate-x-full': !isActive }">
        <div class="w-4/12">
            <img src="https://via.placeholder.com/1080x1920" alt="#" class="h-full w-full object-cover" />
        </div>
        <div class="w-8/12 p-28">
            <ul class="mb-8 border-b border-black/25 pb-8 text-4xl">
                <li v-for="item in menu.primary" :key="item.name">
                    <NuxtLink :to="item.slug" class="link">{{ item.name }}<span v-if="item.children" class="ml-4 inline-block h-10 w-10 rounded-full bg-orange-100 text-center leading-none text-orange-500">+</span></NuxtLink>
                </li>
            </ul>
            <ul class="text-2xl">
                <li v-for="item in menu.secondary" :key="item.name">
                    <NuxtLink :to="item.slug" class="link inline-flex items-center">
                        {{ item.name }}<span v-if="item.name === 'Werken bij'" class="-mt-4 ml-2 inline-block h-6 w-6 rounded-full bg-orange-500 text-center text-sm font-semibold leading-normal text-white">{{ item.children.length }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div class="w-2/12 translate-x-full bg-orange-100 px-12 py-28">
            <div class="mb-4 text-2xl font-semibold">
                <NuxtLink to="/websites" class="link !py-3">Websites</NuxtLink>
            </div>
            <ul class="mb-8 pb-8 text-lg">
                <li v-for="item in menu.primary[0].children" :key="item.name">
                    <NuxtLink :to="item.slug" class="link !py-3">{{ item.name }}</NuxtLink>
                </li>
            </ul>
        </div>
        <button class="absolute right-8 top-8" @click="$emit('close')">X</button>
    </div>
    <div class="fixed inset-0 z-10 bg-black/50 transition-opacity" :class="isActive ? 'opacity-50' : 'pointer-events-none opacity-0'" @click="$emit('close')"></div>
</template>

<script setup>
    defineProps({ isActive: Boolean, menu: Object });

    defineEmits(["close"]);
</script>

<style scoped>
    .link {
        @apply inline-flex py-4 leading-none transition-[padding] duration-150 ease-in-out hover:pl-4;
    }
</style>
