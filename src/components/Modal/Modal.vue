<template>
  <button class="button" @click="open = true">Open Modal</button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div class="modal__container">
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
            <button
              v-for="button in buttons"
              :key="button.id"
              :class="['button', `button_${button.type}`]"
              @click="clickModal($event, button.onClick), (open = false)"
            >
              {{ button.name }}
            </button>
          </div>
        </slot>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { defineProps, defineEmits } from "vue";

export default {
  name: "Modal",
  data() {
    return {
      open: false,
    };
  },
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
  emits: ["btnModalClick"],
  methods: {
    hide() {
      console.log("click registered");
      this.$emit("close");
    },
    clickModal(event, click) {
      this.$emit("btnModalClick", event, click);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Modal.scss";
</style>
