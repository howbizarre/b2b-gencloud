<script setup>
import { ref } from "vue";

const props = defineProps({ isOpen: Boolean });
const emit = defineEmits(["modal-close"]);
const target = ref(null);
</script>

<template>
  <div v-if="isOpen" class="modal-mask flex justify-center items-center">
    <div class="modal-wrapper">
      <div class="modal-container" ref="target">
        <div class="modal-header">
          <slot name="header" />
        </div>

        <div class="modal-body">
          <slot name="content" />
        </div>
        
        <div class="modal-footer flex justify-end">
          <slot name="footer">
            <button @click.stop="emit('modal-close')">{{ _t('Close') }}</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  width: 100%;
  max-width: 480px;
  margin: 50% auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>