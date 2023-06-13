<template>
  <select
    :class="['select', { select_disabled: disabled }]"
    :name="label"
    :disabled="disabled"
    :placeholder="placeholder"
    :multiple="multiple"
  >
    <option
      v-for="item in options"
      :id="item.id"
      :key="item.id"
      :value="item.value"
    >
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Select",
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    label: {
      default: "",
      type: String,
    },
    multiple: {
      default: false,
      type: Boolean,
    },
    options: {
      default: [],
      type: Array,
    },
    placeholder: {
      default: "",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Select.scss";
</style>
