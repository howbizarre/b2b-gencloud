<script setup>
import { ref } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const inTheBegining = ref(null);
const isModalOpened = ref(false);

const openModal = () => isModalOpened.value = true;
const closeModal = () => isModalOpened.value = false;

useHead({
  "htmlAttrs": { "lang": "bg" },
  "title": "B2B от GenCloud"
});
</script>

<template>
  <div>
    <Header />

    <main class="relative z-0">
      <Banner :inTheBegining="inTheBegining" />

      <div class="!p-10">
        <Splide ref="inTheBegining" :options="{ dragMinThreshold: 10, type: 'loop', arrows: false, pagination: true, gap: 20 }"
                class="rounded-xl">

          <SplideSlide class="grid grid-cols-1 md:grid-cols-2 md:gap-4 rounded-xl py-10 bg-gray-200 items-center justify-center">
            <div class="px-10">
              <h3 class="text-xl md:text-3xl">{{ _t('Интегрирано с') }} <strong>{{ _t('Bizzio ERP') }}</strong></h3>

              <p class="mt-3 text-sm md:text-lg">В2В приложението е част от ERP еко-системата на <strong>GenCloud</strong>.</p>

              <div class="mt-3 md:mt-10">
                <button @click="openModal" class="inline-flex justify-between items-center bg-blue-700 hover:bg-blue-500 transition-colors text-white text-sm font-medium uppercase py-2 px-4 rounded-md">
                  <span class="ml-2 mr-3">{{ _t('Още') }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="py-8 pl-8 pr-8 md:pl-0 xl:pr-24 lg:pr-12 md:pr-6">
              <img src="/images/banners/bizzio-1.png" alt="Bizzio ERP" class="w-full h-full shadow-xl shadow-slate-700 rounded-md mx-auto" />
            </div>
          </SplideSlide>

          <SplideSlide class="grid grid-cols-1 md:grid-cols-2 md:gap-4 rounded-xl py-10 bg-gray-200 items-center justify-center">
            <div class="px-10">
              <h3 class="text-xl md:text-3xl">{{ _t('Интегрирано с') }} <strong>{{ _t('Bizzio ERP') }}</strong></h3>

              <p class="mt-3 text-sm md:text-lg">В2В приложението е част от ERP еко-системата на <strong>GenCloud</strong>.</p>

              <div class="mt-3 md:mt-10">
                <button @click="openModal" class="inline-flex justify-between items-center bg-blue-700 hover:bg-blue-500 transition-colors text-white text-sm font-medium uppercase py-2 px-4 rounded-md">
                  <span class="ml-2 mr-3">{{ _t('Още') }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="py-8 pl-8 pr-8 md:pl-0 xl:pr-24 lg:pr-12 md:pr-6">
              <img src="/images/banners/bizzio-1.png" alt="Bizzio ERP" class="w-full h-full shadow-xl shadow-slate-700 rounded-md mx-auto" />
            </div>
          </SplideSlide>
        </Splide>
      </div>

      

        <div class="!p-10">
          <Splide :options="{ dragMinThreshold: 10, type: 'loop', arrows: false, pagination: true, gap: 20 }"
                  class="rounded-xl">

            <SplideSlide class="grid grid-cols-1 md:grid-cols-2 md:gap-4 rounded-xl py-10 bg-gray-200 items-center justify-center">
              <div class="px-10">
                <h3 class="text-xl md:text-3xl">{{ _t('Интегрирано с') }} <strong>{{ _t('Bizzio ERP') }}</strong></h3>

                <p class="mt-3 text-sm md:text-lg">В2В приложението е част от ERP еко-системата на <strong>GenCloud</strong>.</p>

                <div class="mt-3 md:mt-10">
                  <button @click="openModal" class="inline-flex justify-between items-center bg-blue-700 hover:bg-blue-500 transition-colors text-white text-sm font-medium uppercase py-2 px-4 rounded-md">
                    <span class="ml-2 mr-3">{{ _t('Още') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="py-8 pl-8 pr-8 md:pl-0 xl:pr-24 lg:pr-12 md:pr-6">
                <img src="/images/banners/bizzio-1.png" alt="Bizzio ERP" class="w-full h-full shadow-xl shadow-slate-700 rounded-md mx-auto" />
              </div>
            </SplideSlide>

            <SplideSlide class="grid grid-cols-1 md:grid-cols-2 md:gap-4 rounded-xl py-10 bg-gray-200 items-center justify-center">
              <div class="px-10">
                <h3 class="text-xl md:text-3xl">{{ _t('Интегрирано с') }} <strong>{{ _t('Bizzio ERP') }}</strong></h3>

                <p class="mt-3 text-sm md:text-lg">В2В приложението е част от ERP еко-системата на <strong>GenCloud</strong>.</p>

                <div class="mt-3 md:mt-10">
                  <button @click="openModal" class="inline-flex justify-between items-center bg-blue-700 hover:bg-blue-500 transition-colors text-white text-sm font-medium uppercase py-2 px-4 rounded-md">
                    <span class="ml-2 mr-3">{{ _t('Още') }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div class="py-8 pl-8 pr-8 md:pl-0 xl:pr-24 lg:pr-12 md:pr-6">
                <img src="/images/banners/bizzio-1.png" alt="Bizzio ERP" class="w-full h-full shadow-xl shadow-slate-700 rounded-md mx-auto" />
              </div>
            </SplideSlide>
          </Splide>
        </div>

      <Transition>
        <Modal :isOpen="isModalOpened" @modal-close="closeModal">
          <template #header>
            <h3 class="text-xl md:text-3xl">{{ _t('Интегрирано с') }} <strong>{{ _t('Bizzio ERP') }}</strong></h3>
          </template>
          <template #content>
            <p class="my-3 text-sm md:text-lg">В2В приложението е част от ERP еко-системата на <strong>GenCloud</strong>.</p>

            <p class="mb-2">Информацията за продуктите, клиентите, поръчките, цените, складовите наличности и мн.др. се взимат от
              <strong>Bizzio Номенклатури</strong> в реално време. А завършените поръчки се записват директно в
              <strong>Bizzio Поръчки</strong> и веднага след това са готови за изпълнение.
            </p>

            <p class="mb-2">Издадените от системата
              фактура автоматично се добавя към online поръчката и клиента може да си я свали.
            </p>
          </template>
          <template #footer><button @click="closeModal" class="inline-flex justify-between items-center bg-blue-700 hover:bg-blue-500 transition-colors text-white text-sm font-medium uppercase py-2 px-4 rounded-md">ОК</button></template>
        </Modal>
      </Transition>
    </main>
  </div>
</template>

<style>
.welcome { background-image: url('/images/top-section-bg.jpg'); }
::selection { @apply bg-blue-700 text-white; }
.v-enter-active,
.v-leave-active { transition: opacity 0.5s ease; }
.v-enter-from,
.v-leave-to { opacity: 0; }
</style>