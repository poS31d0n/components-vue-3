<template>
  <div class="radioGroup">
    <Radio
      v-for="item in items.items"
      :id="item.id"
      :key="item.id"
      :label="item.name"
      :value="item.value"
      :name="items.name"
      @clickRadio="getValue"
    />
  </div>
</template>
<script>
import { Radio } from "@/components";

export default {
  components: { Radio },  
  name: 'RadioGroup',
  props: {
    items: {
      default: {},
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