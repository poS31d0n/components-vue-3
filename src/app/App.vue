<template>
  <div>
    <Button
      :disabled="testButton.disabled"
      :tooltip="testButton.tooltip"
      :type="testButton.type"
      @clickButton="acceptButton"
    >
      {{ testButton.title }}
    </Button>

    <Checkbox
      :label="testCheckbox.label"
      :value="testCheckbox.value"
      @clickCheckbox="getValue"
    />

    <Radio :label="testRadio.label" :value="testRadio.value" />

    <Input
      v-model="inputElements"
      :disabled="testInput.disabled"
      :label="testInput.label"
      :plaсeholder="testInput.plaсeholder"
      :type="testInput.type"
    />
  </div>
</template>

<script>
import { Button, Checkbox, Input, Radio } from "@/components";

export default {
  name: "App",
  components: { Button, Checkbox, Input, Radio },
  data() {
    return {
      inputElements: "",
      dataCheckbox: [],

      testButton: {
        disabled: false,
        title: "Name button",
        tooltip: "this is a button",
        type: "primary",
      },

      testCheckbox: {
        label: "Over 18 years old",
        value: "18+",
      },

      testRadio: {
        label: "Male",
        value: "male",
      },

      testInput: {
        disabled: false,
        label: "Hey !",
        plaсeholder: "Your name ...",
        type: "input",
      },
    };
  },
  methods: {
    getValue(itemCheckbox) {
      if (this.dataCheckbox.find((item) => item == itemCheckbox) === undefined)
        this.dataCheckbox.push(itemCheckbox);
      else this.dataCheckbox.splice(this.dataCheckbox.indexOf(itemCheckbox), 1);
    },
    acceptButton(itemButton) {
      console.log(itemButton);
    },
  },
};
</script>

<style scoped>
@import "./App.scss";
</style>
