import Button from './Button.vue';

export default {
  title: 'UI-kit/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    type: 'default',
    title: 'Default',
    disabled: false,
    tooltip: 'Default',
  },
};

export const Primary = {
  args: {
    type: 'primary',
    title: 'Primary',
    disabled: false,
    tooltip: 'Primary',
  },
};

export const Info = {
  args: {
    type: 'info',
    title: 'Info',
    disabled: false,
    tooltip: 'Info',
  },
};

export const Warning = {
  args: {
    type: 'warning',
    title: 'Warning',
    disabled: false,
    tooltip: 'Warning',
  },
};

export const Success = {
  args: {
    type: 'success',
    title: 'Success',
    disabled: false,
    tooltip: 'Success',
  },
};

export const Disabled = {
  args: {
    type: 'disabled',
    title: 'Disabled',
    disabled: true,
    tooltip: 'Disabled',
  },
};