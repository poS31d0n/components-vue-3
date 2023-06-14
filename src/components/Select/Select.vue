<template>
  <select
    :class="['select', { select_disabled: disabled }]"
    :name="label"
    :disabled="disabled"
    :multiple="multiple"
    v-model="value"
    @input="onChange($event)"
  >
    <option disabled value=""> {{ placeholder }} </option>
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
  data() {
    return {
      value: [],
    }
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
    }
  },
  emits: ['handleSelect'],
  methods: {
    onChange(event) {
      this.value.push(event.target.value)
      console.log(this.value);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./Select.scss";
</style>
