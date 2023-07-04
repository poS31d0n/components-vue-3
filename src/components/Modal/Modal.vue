<template>
  <div>
    <div class="" v-on:click="hide"></div>
    <div class="modal">
      <slot name="title">
        <div class="modal__header">
          <div class="modal__header_title">{{ title }}</div>
        </div>
      </slot>
      <slot name="text">
        <div class="modal__main">
          <div class="modal__main_text">{{ text }}</div>
        </div>
      </slot>
      <slot name="buttons">
        <div class="modal__footer">
          <div v-for="button in buttons" :key="button.id" :class="['modal__footer_button', `modal__footer_button_${button.type}`]">{{ button.name }}</div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { defineProps, defineEmits } from 'vue'

export default {
  name: 'Modal',
  props: {
    buttons: {
      default: [],
      type: Array,
    },
    text: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    }
  },
  methods: {
    hide() {
      console.log('click registered');
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './Modal.scss';
</style>