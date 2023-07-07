<template>
  <Teleport to="body">
    <div class="modal">
      <div class="modal__container" ref="target">
        <slot name="title">
          <div class="header">
            <div class="header_title">{{ title }}</div>
          </div>
        </slot>

        <div class="main">
          <slot name="text">
            <div class="main_text">{{ text }}</div>
          </slot>
        </div>

        <div class="footer">
          <slot name="buttons">
            <Button
              v-for="button in buttons"
              :type="button.type"
              :key="button.id"
              @click="button.onClick"
            >
              {{ button.name }}
            </Button>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { Button } from "..";

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
  emits: ["close"],
  setup(props, { emit }) {
    const target = ref(null);
    onClickOutside(target, (event) => emit("close"));
    return {
      target,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./Modal.scss";
</style>
