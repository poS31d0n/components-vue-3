<template>
  <div :class="['input', { input_disabled: disabled }]">
    <label class="input_label"> {{ label }} </label>
    <input
      :disabled="disabled"
      :type="type"
      :placeholder="placeholder"
      v-bind="$attrs"
      :value="modelValue"
    />
  </div>
  <label :for="label">
    
  </label>
</template>

<script>
export default {
  name: "Input",
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    label: {
      default: "",
      type: String,
    },
    plaseholder: {
      default: "",
      type: String,
    },
    type: {
      default: "",
      type: String,
    },
    modelValue: {
      default: "",
      type: String,
    },
  },
};
</script>

<style scoped>
@import "./Input.scss";
</style>
