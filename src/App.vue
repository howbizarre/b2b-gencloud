<template>
  <header class="w-full h-14 flex items-center shadow-lg relative z-50">
    <div class="container mx-auto px-5 sm:px-0 flex items-center justify-between">
      <h1 class="flex items-center justify-start text-2xl text-blue-700 leading-5">
        <img src="./images/gencloud_logo_small.jpg" class="w-auto h-full max-h-7" />
        <span class="pl-3 font-bold">{{ _t('GenCloud') }}</span>
      </h1>

      <h2 class="text-2xl tracking-[-5px] text-blue-700 font-bold">{{ _t('B2B') }}</h2>
    </div>
  </header>

  <main class="relative z-0">
    <div class="grid grid-cols-2 gap-4 welcome bg-cover bg-no-repeat bg-fixed bg-center bg-gradient-to-r from-green-100 to-blue-200">
      <div class="w-full h-full flex items-center justify-center">
        <div>
          <h3 class="text-3xl font-bold mb-3 text-blue-700">
            <span class="tracking-[-7px] mr-2">{{ _t('B2B') }}</span>
            {{ _t('от GenCloud') }}
          </h3>
          <p class="text-lg">Пазарувайте онлайн - готино е!</p>
          <p class="text-lg">Под ръка е в джоба, и на бюрото, и в колата, и...</p>
          <p class="text-lg">Много е лесно, бързо и ефективно.</p>

          <div class="mt-10">
            <button class="bg-blue-700 hover:bg-blue-500 transition-colors text-white font-medium uppercase py-2 px-4 rounded-md">
              {{ _t('Стартирай') }}
            </button>
          </div>
        </div>
      </div>

      <div class="py-16 pr-16 text-center">
        <img src="./images//login-screen.png" class="border border-white rounded-xl shadow-lg shadow-gray-600/30 mx-auto" />
      </div>
    </div>
  </main>
</template>

<script setup>
const _t = t => t;
</script>

<style>
.welcome {
  background-image: url('./images/top-section-bg.jpg');
}
</style>
