<template>
  <header class="w-full h-14 flex items-center shadow-lg relative z-50">
    <div class="container mx-auto px-5 sm:px-0 flex items-center justify-between">
      <h1 class="flex items-center justify-start text-2xl text-blue-700 leading-5">
        <img src="./images/gencloud_logo_small.jpg" class="w-auto h-full max-h-7" />
        <span class="pl-3 font-bold">{{ _t('GenCloud') }}</span>
      </h1>

      <h2>
        <img src="./images/b2b-logo.jpg" class="w-auto h-full max-h-7" />
      </h2>
    </div>
  </header>

  <main class="relative z-0">
    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 welcome bg-cover bg-no-repeat bg-scroll bg-center bg-gradient-to-r from-green-100 to-blue-200">
      <div class="w-full h-full flex items-center justify-center mt-3 md:mt-auto">
        <div class="max-w-[90%] md:max-w-full">
          <h3 class="text-3xl lg:text-6xl font-bold mb-3 text-blue-700">
            <span class="tracking-[-6px] lg:tracking-[-14px] mr-2">{{ _t('B2B') }}</span>
            {{ _t('от GenCloud') }}
          </h3>

          <p class="md:text-lg">Пазарувайте онлайн - готино е!</p>
          <p class="md:text-lg">Под ръка е в джоба, и на бюрото, и в колата, и...</p>
          <p class="md:text-lg">Много е лесно, бързо и ефективно.</p>

          <div class="mt-3 md:mt-10">
            <button class="bg-blue-700 hover:bg-blue-500 transition-colors text-white font-medium uppercase py-2 px-4 rounded-md">
              {{ _t('Стартирай') }}
            </button>
          </div>
        </div>
      </div>

      <div class="py-8 xl:pr-72 lg:pr-40 md:pr-24 text-center">
        <img src="./images//login-screen.png" class="border border-white rounded-xl shadow-lg shadow-gray-600/30 mx-auto max-w-[90%] md:max-w-[100%]" />
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
