<template>
  <header class="w-full h-14 flex items-center shadow-xl">
    <div class="container mx-auto px-5 sm:px-0 flex items-center justify-between">
      <h1 class="flex items-center justify-start text-2xl text-blue-800 leading-5">
        <img src="./images/gencloud_logo_small.jpg" class="w-auto h-full max-h-7" />
        <span class="pl-3 font-bold">{{ _t('GenCloud') }}</span>
      </h1>

      <h2 class="text-2xl text-blue-800 font-bold">{{ _t('B2B') }}</h2>
    </div>
  </header>
  <main>
    <div class="grid grid-cols-2 gap-4">
      <div class="border">
        <h3>{{ _t('B2B от GenCloud') }}</h3>
      </div>
      <!-- ... -->
      <div class="border">09</div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const _t = t => t;
</script>
