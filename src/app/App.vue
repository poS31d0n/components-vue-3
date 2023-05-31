<template>
  <main>
    <Button :disabled="testButton.disabled" :tooltip="testButton.tooltip" :type="testButton.type" >
      {{testButton.title}}
    </Button>
    <Checkbox></Checkbox>
    <Radio></Radio>
    <Input :disabled="testInput.disabled" :label="testInput.label" :placeholder="testInput.placeholder" :type="testInput.type" />
  </main>
</template>

<script>
  import { Button, Checkbox, Input, Radio } from "@/components";
  import { ref, computed, watch } from "vue";

  export default {
    name: "App",
    components: { Button, Checkbox, Input, Radio },
    data() {
      return {
        testButton: {
          disabled: false,
          title: "Name button",
          tooltip: "this is a button",
          type: "primary",
        },
        testCheckbox: {
          
        },
        testRadio: {
        
        },
        testInput: {
          disabled: false,
          label: "Hey !",
          placeholder: "My name ...",
          type: "input",
        },
        
      };
    }
  }
</script>

<style>
  @import "./App.scss";
</style>
