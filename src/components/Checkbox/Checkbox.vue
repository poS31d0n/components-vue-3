<template>
  <div class="checkbox">
    <input
      @click="inputC"
      class="checkbox__input"
      type="checkbox"
      :value="value"
      :id="id"
      :checked="checked"
    />
    <label :for="id" class="checkbox__label"> {{ label }} </label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",

  props: {
    checked: {
      default: false,
      type: Boolean,
    },
    id: {
      default: 0,
      type: Number,
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
