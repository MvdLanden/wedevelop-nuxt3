<template>
    <div class="fixed bottom-0 right-0 top-0 z-20 flex h-full w-10/12 bg-white text-black transition-transform sm:w-1/2" :class="{ 'translate-x-full': !isActive }">
        <div class="hidden sm:block sm:w-4/12">
            <img src="https://images.unsplash.com/photo-1585229259126-8e72b0f28f98" alt="#" class="h-full w-full object-cover" />
        </div>
        <div class="w-full bg-white px-8 py-28 transition-transform sm:w-8/12 sm:px-20" :class="showSubnav ? 'sm:-translate-x-1/4' : ''">
            <ul class="mb-8 border-b border-black/25 pb-8 text-2xl sm:text-4xl" :class="showSubnav ? 'sm:w-[70%]' : ''">
                <li v-for="item in menu.primary" :key="item.name">
                    <NuxtLink :to="item.children ? '' : `/${item.slug}`" class="link" @click="toggleSubmenu(item)">
                        {{ item.name }}<span v-if="item.children" class="ml-4 inline-block h-10 w-10 rounded-full bg-orange-100 text-center leading-none text-orange-500 transition-transform" :class="showSubnav ? '-rotate-45' : ''">+</span>
                    </NuxtLink>
                    <!-- Start Submenu -->
                    <div v-if="item.children" class="absolute right-0 top-0 h-full w-full bg-orange-100 px-10 py-28 text-lg transition-transform xl:w-1/2" :class="showSubnav ? 'sm:translate-x-1/2' : 'translate-x-full'">
                        <h3 class="mb-6">
                            <NuxtLink :to="`/${item.slug}`">{{ item.name }}</NuxtLink>
                        </h3>
                        <ul>
                            <li v-for="subitem in item.children" :key="subitem.name">
                                <NuxtLink :to="`/${item.slug}/${subitem.slug}`" class="link !py-3">{{ subitem.name }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <!-- Start Submenu -->
                </li>
            </ul>
            <ul class="text-lg sm:text-2xl">
                <li>
                    <NuxtLink to="/" class="link inline-flex items-center">Home</NuxtLink>
                </li>
                <li v-for="item in menu.secondary" :key="item.name">
                    <NuxtLink :to="item.slug" class="link">
                        {{ item.name }}<span v-if="item.name === 'Werken bij'" class="-mt-4 ml-2 inline-block h-6 w-6 rounded-full bg-orange-500 text-center text-sm font-semibold leading-normal text-white">{{ item.children.length }}</span>
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <button class="absolute left-8 top-8 sm:hidden" v-if="showSubnav" @click="showSubnav = false">&lt;</button>
        <button class="absolute right-8 top-8" @click="closeMenu">X</button>
    </div>
    <div class="fixed inset-0 z-10 bg-black/75 transition-opacity" :class="isActive ? 'opacity-50' : 'pointer-events-none opacity-0'" @click="closeMenu"></div>
</template>

<script setup>
    const props = defineProps({ isActive: Boolean, menu: Object });

    const emit = defineEmits(["close"]);

    let activeSubmenu = ref({});
    let showSubnav = ref(false);

    const closeMenu = () => {
        emit("close");
        showSubnav.value = false;
    };

    const toggleSubmenu = (item) => {
        activeSubmenu.value = item;
        showSubnav.value = !showSubnav.value;
    };
</script>

<style scoped>
    .link {
        @apply inline-flex cursor-pointer items-center py-4 leading-none transition-[padding] duration-150 ease-in-out sm:hover:pl-4;
    }
</style>
