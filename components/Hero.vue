<template>
  <div class="hero text-red-500 bg-black h-[calc(75vh)] flex items-center" :class="{ 'h-[calc(75vh-88px)]': header }">
    <div class="container text-center" :class="{ 'mt-[88px]': !header }">
      <slot />
    </div>
        
  </div>
</template>

<script setup>  
  const header = useHeaderLight()
</script>

<style scoped></style>
