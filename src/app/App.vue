<template>
  <div>
    <Input :disabled="disabled" :label="label" :placeholder="placeholder" :type="type" />
  </div>
</template>

<script>
  import { Button, Checkbox, Input, Radio } from "@/components";
  import { ref, computed, watch } from "vue";

  export default {
    name: "App",
    components: { Button, Checkbox, Input, Radio },
    data() {
      return {
        disabled: false,
        label: "Hey !",
        placeholder: "My name ...",
        type: "input",
      };
    }
  }
</script>

<style>
  @import "./App.scss";
</style>