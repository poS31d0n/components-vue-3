<template>
  <label>
    <input type="checkbox" :value="value" @click="inputC"> {{ label }}
  </label>
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
    emits: [ 'clickCheckbox' ],
      methods: {
        inputC: function() {
            this.$emit('clickCheckbox', this.value)
        }
      }
  };
</script>

<style scoped>
  @import "./Checkbox.scss";
</style>
