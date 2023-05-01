<template>
  <div ref="hero" class="hero text-red-500 bg-black h-[calc(75vh-88px)] flex items-center">
    <div class="container text-center">
      <slot />
    </div>
        
  </div>
</template>

<script setup>  
  // const hero = ref(null)

  // onMounted(() => {
  //   console.log(window.innerHeight, hero.value.clientHeight);
  // })

  // console.log(heroHeight);
</script>

<style scoped></style>
