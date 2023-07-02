<template>
  <div class="tab" @click="selectTab, selected = !selected">
    <div class="tab__title" >
      <p class="tab__title_text">{{ this.title }}</p>
    </div>
    <div v-show="title == selectedTitle">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
import { inject, ref } from 'vue';

export default {
  name: 'Tab',
  props: {
    title: {
      default: '',
      type: String,
    }
  },
  setup() {
    const selected = ref(true);
    const selectedTitle = inject('selectedTitle')
  
    return {
      selectedTitle, selected
    }
  },
  methods: {
    selectTab(event) {
      console.log(event.target)
      this.$emit("clickTab", this.event);
    }
  },
}
</script>

<style lang="scss" scoped>
  @import './Tab.scss';
</style>