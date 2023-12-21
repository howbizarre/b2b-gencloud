<template>
  <header class="w-full h-14 flex items-center shadow shadow-black">
    <div class="container mx-auto px-5 sm:px-0 flex items-center justify-between">
      <h1 class="flex items-center justify-start text-2xl text-blue-800 leading-5">
        <img src="./images/gencloud_logo_small.jpg" class="w-auto h-full max-h-7" />
        <span class="pl-3 font-bold">{{ _t('GenCloud') }}</span>
      </h1>

      <h2 class="text-2xl text-blue-800 font-bold">{{ _t('B2B') }}</h2>
    </div>
  </header>
  
  <main class="z-0">
    <div class="grid grid-cols-2 gap-4 welcome bg-gradient-to-r from-green-100 to-blue-200">
      <div class="border">
        <h3>{{ _t('B2B от GenCloud') }}</h3>
        <p>Комуникация от ново поколение</p>
      </div>
      
      <div class="border">09</div>
    </div>
  </main>
</template>

<script setup>
const _t = t => t;
</script>

<style>
.welcome {
  background-image: url('./images/sean-sinclair-C_NJKfnTR5A-unsplash.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
