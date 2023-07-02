<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    buttons: {
      default: [],
      type: Array,
    },
    text: {
      default: '',
      type: String,
    },
    title: {
      default: '',
      type: String,
    }
  }
  
}
</script>

<style lang="scss" scoped>
  @import './Modal.scss';
</style>