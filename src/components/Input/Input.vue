<template>
  <div :class="['input', { input_disabled: disabled }]">
    <label class="input__label"> {{ label }} </label>
    <input
      :disabled="disabled"
      :type="type"
      :plaсeholder="plaсeholder"
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
    plaсeholder: {
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

<style scoped>
  @import "./Input.scss";
</style>
