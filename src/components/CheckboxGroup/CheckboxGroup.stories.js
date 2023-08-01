import CheckboxGroup from "./index";

export default {
  title: "UI-kit/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  args: {
    items: [
      { id: 3, name: "Games", value: "games" },
      { id: 4, name: "Chess", value: "chess" },
      { id: 5, name: "Football", value: "football" },
      { id: 6, name: "Basketball", value: "basketball" },
      { id: 7, name: "Hockey", value: "hockey" },
    ],
  },
};

// const Template = (args) => <CheckboxGroup {...args}></CheckboxGroup>;

const Template = (args) => ({
  components: { CheckboxGroup },
  setup() {
    return { args };
  },
  template: '<CheckboxGroup v-bind="args"  />',
});

export const Default = Template.bind({});
Default.args = {
  
};

// export const Default = Template.bind({});

// Default.args = {
//   items: [
//     { id: 3, name: "Games", value: "games" },
//     { id: 4, name: "Chess", value: "chess" },
//     { id: 5, name: "Football", value: "football" },
//     { id: 6, name: "Basketball", value: "basketball" },
//     { id: 7, name: "Hockey", value: "hockey" },
//   ],
// };
