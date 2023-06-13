<template>
  <div class="components">
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
      :checked="testCheckbox.checked"
    />

    <Radio :label="testRadio.label" :value="testRadio.value" :checked="testRadio.checked"/>

    <Input
      v-model="inputElements"
      :disabled="testInput.disabled"
      :label="testInput.label"
      :placeholder="testInput.placeholder"
      :type="testInput.type"
    />

    <CheckboxGroup
      @selectCheckbox="getValueGroup"
      :items="testCheckboxGroup"
      :value="valueCheckboxGroup"
    />
  </div>
</template>

<script>
import { Button, Checkbox, Input, Radio, CheckboxGroup } from "@/components";

export default {
  name: "App",
  components: { Button, Checkbox, Input, Radio, CheckboxGroup },
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
        checked: false,
        label: "Over 18 years old",
        value: "18+",
      },
      testRadio: {
        checked: false,
        label: "Male",
        value: "male",
      },

      testInput: {
        disabled: false,
        label: "Hey !",
        placeholder: "Your name ...",
        type: "input",
      },

      testCheckboxGroup: [
        {id: 1, name: 'Games', value: 'games'},
        {id: 2, name: 'Chess', value: 'chess'},
        {id: 3, name: 'Football', value: 'football'},
        {id: 4, name: 'Basketball', value: 'basketball'},
        {id: 5, name: 'Hockey', value: 'hockey'},
      ],
      valueCheckboxGroup: [],
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
    getValueGroup(value) {
      if (this.valueCheckboxGroup.find((item) => item == value) === undefined)
        this.valueCheckboxGroup.push(value);
      else this.valueCheckboxGroup.splice(this.valueCheckboxGroup.indexOf(value), 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./App.scss";
</style>
