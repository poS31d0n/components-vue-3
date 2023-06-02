<template>
  <button
    :class="['button', `button_${type}`, { button_disabled: disabled }]"
    :disabled="disabled"
    :tooltip="tooltip"
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
    clickB: function (event) {
      this.$emit("clickButton", event);
    },
  },
};
</script>

<style scoped>
@import "./Button.scss";
</style>
