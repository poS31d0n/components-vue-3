<template>
  <button
    :class="['button', `button_${type}`, { button_disabled: disabled }]"
    :disabled="disabled"
    :title="tooltip"
    @click="clickB"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    title: {
      default: "",
      type: String,
    },
    tooltip: {
      default: "",
      type: String,
    },
    type: {
      default: "",
      type: String,
    },
  },
  emits: ["clickButton"],
  methods: {
    clickB(event) {
      this.$emit("clickButton", event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
