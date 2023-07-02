<template>
  <div class="tab-content" v-show="title == selectedTitle">
    <slot></slot>
  </div>
</template>

<script>
import { inject, ref } from 'vue';

export default {
  name: 'Tab',
  props: ['title'],
  setup() {
    const selectedTitle = inject("selectedTitle")

    return {
      selectedTitle
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './Tab.scss';
</style>