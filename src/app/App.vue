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
      :name="testRadio.name"
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
      @select="selectOptions"
    >
    </Select>

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

    <Button class="button" @click="testModal.openModal = true" type="default">Open Modal</Button>
    <Modal
      v-if="testModal.openModal"
      @close="testModal.openModal = false"
      :title="testModal.title"
      :text="testModal.text"
    >
      <template v-slot:buttons>
        <Button v-for="item in testModal.buttons" :key="item.id" :type="item.type" @click="item.onClick"> {{ item.name }}</Button>
      </template>
    </Modal>

    <Tabs>
      <Tab title="Tab 1">Hello from Tab 1</Tab>
      <Tab title="Tab 2">Hello from Tab 2</Tab>
      <Tab title="Tab 3">Hello from Tab 3</Tab>
      <Tab title="Tab 4">Hello from Tab 4</Tab>
    </Tabs>
  </div>
</template>

<script>
import {
  Button,
  Checkbox,
  Input,
  Radio,
  CheckboxGroup,
  RadioGroup,
  Select,
  Modal,
  Tab,
  Tabs,
} from "@/components";

export default {
  name: "App",
  components: {
    Button,
    Checkbox,
    Input,
    Radio,
    CheckboxGroup,
    RadioGroup,
    Select,
    Modal,
    Tab,
    Tabs,
  },
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
        id: 1,
        label: "Over 18 years old",
        value: "18+",
      },
      testRadio: {
        checked: false,
        id: 2,
        label: "Male",
        value: "male",
        name: 'radio',
      },

      testInput: {
        disabled: false,
        label: "Hey !",
        placeholder: "Your name ...",
        type: "input",
      },

      testCheckboxGroup: [
        { id: 3, name: "Games", value: "games" },
        { id: 4, name: "Chess", value: "chess" },
        { id: 5, name: "Football", value: "football" },
        { id: 6, name: "Basketball", value: "basketball" },
        { id: 7, name: "Hockey", value: "hockey" },
      ],
      valueCheckboxGroup: [],

      testRadioGroup: {
        name: 'radioGroup',
        radios: [
          { id: 8, name: "Bachelor", value: "bachelor" },
          { id: 9, name: "Specialist-degree", value: "specialist-degree" },
          { id: 10, name: "Postgraduate", value: "postgraduate" },
          { id: 11, name: "Master", value: "master" },
          { id: 12, name: "Doctorate", value: "doctorate" },
        ]
      },
      valueRadioGroup: "",

      testSelect: {
        disabled: false,
        label: "Your age?",
        multiple: true,
        options: [
          { id: 13, name: "Child", value: "child" },
          { id: 14, name: "Tween", value: "tween" },
          { id: 15, name: "Teenager", value: "teenager" },
          { id: 16, name: "Young adult", value: "young-adult" },
          { id: 17, name: "Middle aged", value: "middle-aged" },
        ],
        placeholder: "Select your age",
      },
      valueSelect: "",

      testModal: {
        buttons: [
          { id: 21, name: "Close", type: "default", onClick: () => this.btnClose () , },
          { id: 22, name: "Save", type: "primary", onClick: () => this.btnSave () },
        ],
        text: "Test modal component",
        title: "Hello world!",
        openModal: false,
      },
      
    };
  },
  methods: {
    btnClose() {
      console.log('close');
      this.testModal.openModal = false;
    },
    btnSave() {
      console.log('save');
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
      else
        this.valueCheckboxGroup.splice(
          this.valueCheckboxGroup.indexOf(value),
          1
        );
    },
    getValueRadio(value) {
      this.valueRadioGroup = value;
    },

    selectOptions(option) {
      this.valueSelect = option;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./App.scss";
</style>
