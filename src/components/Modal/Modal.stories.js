import Modal from './Modal.vue';

export default {
  title: 'UI-kit/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    buttons: [
      { id: 21, name: "Close", type: "default", onClick: () => this.btnClose () , },
      { id: 22, name: "Save", type: "primary", onClick: () => this.btnSave () },
    ],
    text: 'est modal component',
    title: 'Hello world!',
  },
};
