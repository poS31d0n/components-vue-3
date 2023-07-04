<template>
  <Teleport to="body">
    <div class="modal">
      <div class="modal__container" ref="target">
        <slot name="title">
          <div class="modal__container__header">
            <div class="modal__container__header_title">{{ title }}</div>
          </div>
        </slot>
        <slot name="text">
          <div class="modal__container__main">
            <div class="modal__container__main_text">{{ text }}</div>
          </div>
        </slot>
        <slot name="buttons">
          <div class="modal__container__footer">
            <Button
              v-for="button in buttons"
              :type="button.type"
              :key="button.id"
              @click="button.onClick"
            >
              {{ button.name }}
            </Button>
          </div>
        </slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { Button } from '..';

export default {
  name: "Modal",
  components: { Button },
  props: {
    buttons: {
      default: [],
      type: Array,
    },
    text: {
      default: "",
      type: String,
    },
    title: {
      default: "",
      type: String,
    },
  },
  emits: ['close'],
  setup({ emit }) {
    const target = ref (null);
    onClickOutside(target, (event) => emit('close'));
    return {
      target,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./Modal.scss";
</style>
