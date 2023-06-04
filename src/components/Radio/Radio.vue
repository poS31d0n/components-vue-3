<template>
  <label>
    <input type="radio" :value="value"> {{ label }}
  </label>
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

<style scoped>
  @import "./Radio.scss";
</style>
