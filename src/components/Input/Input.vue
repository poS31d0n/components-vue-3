<template>
  <div :class="['input', { input_disabled: disabled }]">
    <label class="input__label"> {{ label }} </label>
    <input
      :disabled="disabled"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      class="input__input"
      @input="$emit('update:modelValue', $event.target.value)"

    />
  </div>
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
    placeholder: {
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
  emits: ['update:modelValue']
};
</script>

<style lang="scss" scoped>
  @import "./Input.scss";
</style>
