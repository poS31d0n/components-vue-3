<template>
  <button :class="type" :disabled="disabled" :title="tooltip" @click="clickB">
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
      default: "primary",
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
