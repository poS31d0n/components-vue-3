<template>
  <div class="radio">
    <input
      @click="inputR"
      class="radio__input"
      type="radio"
      :name="name"
      :checked="checked"
      :value="value"
      :id="id"
    />
    <label :for="id" class="radio__label"> {{ label }} </label>
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
    name: {
      default: "",
      type: String,
    }
  },
  emits: ["clickRadio"],
  methods: {
    inputR: function () {
      this.$emit("clickRadio", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Radio.scss";
</style>
