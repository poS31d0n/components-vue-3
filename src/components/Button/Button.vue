<template>
  <button :class="type" :disabled="disabled" :title="tooltip" v-on.click="trigger">
      <slot/>
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
  methods: {
    trigger: function () {
      this.$emit('clickButton');
    }
  },
};
</script>

<style>
  @import "./Button.scss";
</style>
