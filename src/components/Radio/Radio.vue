<template>
  <div class="radio">
    <input class="radio__input" type="radio" name="radio" :value="value" />
    <label class="radio__label"> {{ label }} </label>
  </div>
</template>

<script>
export default {
  name: "Radio",

  props: {
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
