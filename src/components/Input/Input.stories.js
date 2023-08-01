import Input from './Input.vue';

export default {
  title: 'UI-kit/Input',
  component: Input,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    disabled: false,
    label: 'Default',
    placeholder: 'Default',
    type: 'input',
    modelValue: '',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    label: 'Disabled',
    placeholder: 'Disabled',
    type: 'input',
    modelValue: '',
  },
};
