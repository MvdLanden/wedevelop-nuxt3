<template>
  <div class="hero bg-black h-[calc(75vh)] flex items-center text-white" :class="{ 'h-[calc(75vh-88px)]': header }">
    <div class="container text-center" :class="{ 'mt-[88px]': !header }">
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4">
          <slot />
        </div>
      </div>
    </div>  
  </div>
</template>

<script setup>  
  const header = useHeaderLight()
</script>

<style scoped></style>
