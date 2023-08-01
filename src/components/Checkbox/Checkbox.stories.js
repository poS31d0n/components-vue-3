import Chechbox from './Checkbox.vue';

export default {
  title: 'UI-kit/Checkbox',
  component: Chechbox,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    label: 'Default',
    id: 0,
    checked: false,
    value: 'default',
  },
};

export const Checked = {
  args: {
    label: 'Checked',
    id: 1,
    checked: true,
    value: 'checked',
  },
};
