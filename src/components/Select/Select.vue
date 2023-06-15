<template>
  <div class="form-group">
    <div class="select-wrapper">
      <select
        :class="['select', {select_multiple: multiple} , { select_disabled: disabled }]"
        :name="label"
        :disabled="disabled"
        :multiple="multiple"
        @input="onChange($event)"
      >
        <option :class="{select__placeholted: multiple}" :label="placeholder" selected disabled value="0"></option>
        <option
          v-for="item in options"
          :id="item.id"
          :key="item.id"
          :value="item.value"
          :label="item.name"
        ></option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      value: [],
    };
  },
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
    modelValue: {
      default: [],
      type: Array,
    },
  },
  emits: ["handleSelect"],
  methods: {
    onChange(event) {
      // this.value.push(event.target.value)
      console.log(event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Select.scss";
</style>
