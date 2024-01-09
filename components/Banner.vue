<script setup>
const props = defineProps({
  inTheBegining: Object
});

console.log('props.inTheBegining', props.inTheBegining);

//const scrollToElm = (elm) => window.scrollTo({ top: elm.$el.offsetTop, behavior: 'smooth' });
const scrollToElm = (elm) => {
  if (elm && elm.$el) {
    window.scrollTo({ top: elm.$el.offsetTop, behavior: 'smooth' });
  } else {
    console.error('Element is not defined or does not have a $el property:', elm);
  }
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 md:gap-4 welcome bg-cover bg-no-repeat bg-scroll bg-center bg-gradient-to-r from-green-100 to-blue-200">
    <div class="w-full h-full flex items-center justify-center mt-3 md:mt-auto">
      <div class="max-w-[90%] md:max-w-full">
        <h1 class="text-3xl lg:text-6xl font-bold mb-3 text-blue-700">
          {{ _t('B2B от GenCloud') }}
        </h1>

        <p class="md:text-md">{{ _t('Пазарувайте онлайн - готино е!') }}</p>
        <p class="md:text-md">{{ _t('Под ръка в джоба, на бюрото, в колата...') }}</p>
        <p class="md:text-md">{{ _t('Много е лесно, бързо и ефективно.') }}</p>

        <div class="mt-3 md:mt-10">
          <button @click="scrollToElm(inTheBegining)" class="inline-flex justify-between items-center bg-blue-700 hover:bg-blue-500 transition-colors text-white text-sm font-medium uppercase py-2 px-4 rounded-md">
            <span class="ml-2 mr-3">{{ _t('Разгледай') }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="py-8 xl:pr-72 lg:pr-40 md:pr-24 text-center">
      <img src="/images/login-screen.png" :alt="_t('Login екран от B2B системата')" class="border border-white rounded-xl shadow-lg shadow-gray-600/30 mx-auto max-w-[90%] md:max-w-[100%]" />
    </div>
  </div>
</template>