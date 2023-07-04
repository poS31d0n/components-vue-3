<template>
  <div class="tabs">
    <ul class="tabs__header">
      <li
        v-for="title in tabTitles"
        :key="title"
        :class="{ selected: title == selectedTitle }"
        @click="selectedTitle = title"
      >
        {{ title }}
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
import { ref, provide } from "vue";

export default {
  name: "Tabs",
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);
    return {
      tabTitles,
      selectedTitle,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./Tabs.scss";
</style>
