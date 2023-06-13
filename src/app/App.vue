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
      :checked="testCheckbox.checked"
      :id="testCheckbox.id"
      :label="testCheckbox.label"
      :value="testCheckbox.value"
      @clickCheckbox="getValue"
    />

    <Radio
      :label="testRadio.label"
      :id="testRadio.id"
      :value="testRadio.value"
      :checked="testRadio.checked"
    />

    <Input
      v-model="inputElements"
      :disabled="testInput.disabled"
      :label="testInput.label"
      :placeholder="testInput.placeholder"
      :type="testInput.type"
    />

    <Select
      :disabled="testSelect.disabled"
      :label="testSelect.label"
      :multiple="testSelect.multiple"
      :options="testSelect.options"
      :placeholder="testSelect.placeholder"    
    > </Select>

    <div class="group">
      <CheckboxGroup
        @selectCheckbox="getValueCheckbox"
        :items="testCheckboxGroup"
        :value="valueCheckboxGroup"
      />

      <RadioGroup
        @selectRadio="getValueRadio"
        :items="testRadioGroup"
        :value="valueRadioGroup"
      />
    </div>
    
  </div>
</template>

<script>
import { Button, Checkbox, Input, Radio, CheckboxGroup, RadioGroup, Select } from "@/components";

export default {
  name: "App",
  components: { Button, Checkbox, Input, Radio, CheckboxGroup, RadioGroup, Select, Select },
  data() {
    return {
      ids: 1,
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
        id: 1,
        label: "Over 18 years old",
        value: "18+",
      },
      testRadio: {
        checked: false,
        id: 2,
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
        {id: 3, name: 'Games', value: 'games'},
        {id: 4, name: 'Chess', value: 'chess'},
        {id: 5, name: 'Football', value: 'football'},
        {id: 6, name: 'Basketball', value: 'basketball'},
        {id: 7, name: 'Hockey', value: 'hockey'},
      ],
      valueCheckboxGroup: [],

      testRadioGroup: [
        {id: 8, name: 'Bachelor', value: 'bachelor'},
        {id: 9, name: 'Specialist-degree', value: 'specialist-degree'},
        {id: 10, name: 'Postgraduate', value: 'postgraduate'},
        {id: 11, name: 'Master', value: 'master'},
        {id: 12, name: 'Doctorate', value: 'doctorate'},
      ],
      valueRadioGroup: '',

      testSelect: {
        disabled: false,
        label: "Your age?",
        multiple: false,
        options: [
          {id: 13, name: 'Child', value: 'child'},
          {id: 14, name: 'Tween', value: 'tween'},
          {id: 15, name: 'Teenager', value: 'teenager'},
          {id: 16, name: 'Young adult', value: 'young-adult'},
          {id: 17, name: 'Middle aged', value: 'middle-aged'},
        ],
        placeholder: "Select your age",
      },
    };
  },
  methods: {
    getId() {
      return ids++;
    },
    getValue(itemCheckbox) {
      if (this.dataCheckbox.find((item) => item == itemCheckbox) === undefined)
        this.dataCheckbox.push(itemCheckbox);
      else this.dataCheckbox.splice(this.dataCheckbox.indexOf(itemCheckbox), 1);
    },
    acceptButton(itemButton) {
      console.log(itemButton);
    },
    getValueCheckbox(value) {
      if (this.valueCheckboxGroup.find((item) => item == value) === undefined)
        this.valueCheckboxGroup.push(value);
      else this.valueCheckboxGroup.splice(this.valueCheckboxGroup.indexOf(value), 1);
    },
    getValueRadio(value) {
      this.valueRadioGroup = value;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./App.scss";
</style>
