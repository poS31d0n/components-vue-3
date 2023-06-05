<template>
  <div class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :value="value"
      @click="inputC"
    />
    <label class="checkbox__label"> {{ label }} </label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",

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
  emits: ["clickCheckbox"],
  methods: {
    inputC: function () {
      this.$emit("clickCheckbox", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Checkbox.scss";
</style>
