<template>
  <div class="radio">
    <input
      class="radio__input"
      type="radio"
      name="radio"
      :checked="checked"
      :value="value"
      :id="value"
    />
    <label :for="value" class="radio__label"> {{ label }} </label>
  </div>
</template>

<script>
export default {
  name: "Radio",

  props: {
    checked: {
      default: false,
      type: Boolean,
    },
    label: {
      default: "",
      type: String,
    },
    value: {
      default: "",
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Radio.scss";
</style>
