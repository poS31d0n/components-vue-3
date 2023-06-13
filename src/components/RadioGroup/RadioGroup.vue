<template>
  <form class="radioGroup">
    <Radio
      v-for="item in items"
      :id="item.id"
      :label="item.name"
      :value="item.value"
      @clickRadio="getValue"
    />
  </form>
</template>
<script>
import { Radio } from "@/components";

export default {
  components: { Radio },  
  name: 'RadioGroup',
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
  emits: ['selectRadio'],
  methods: {
    getValue: function (value) {
      this.$emit("selectRadio", value);
    },
    
  },
}
</script>
<style lang="scss" scoped>
  @import './RadioGroup.scss'
</style>