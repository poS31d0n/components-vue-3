<template>
  <div class="table">
    <div class="table-title">{{ title }}</div>
    <div class="table-container">
      <div class="col" v-for="col in cols">
        <div @click="$emit('cellClick', $event.target)">{{ col }}</div>
        <div
          @click="$emit('cellClick', $event.target)"
          v-for="item in rows"
        >
          {{ item[col] }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cols: {
      default: [],
      type: Array,
    },
    rows: {
      default: [],
      type: Array,
    },
    title: {
      default: "",
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./Table.scss";
</style>
