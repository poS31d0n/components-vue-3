<template>
  <div class="checkboxGroup">
    <Checkbox
      v-for="item in items"
      :id="item.id"
      :label="item.name"
      :value="item.value"
      @clickCheckbox="getValue"
    />
  </div>
</template>

<script>
import { Checkbox } from "@/components";

export default {
  components: { Checkbox },
  name: "CheckboxGroup",
  props: {
    items: {
      default: [],
      type: Array,
    },
    value: {
      default: "",
      type: String,
    },
  },
  emits: ['selectCheckbox'],
  methods: {
    getValue: function (value) {
      this.$emit("selectCheckbox", value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./CheckboxGroup.scss";
</style>
