import Radio from './Radio.vue';

export default {
  title: 'UI-kit/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    checked: false,
    id: 2,
    label: 'Default',
    value: 'default',
    name: 'radio',
  },
};

export const Checked = {
  args: {
    checked: true,
    id: 3,
    label: 'Checked',
    value: 'checked',
    name: 'radio',
  },
};
