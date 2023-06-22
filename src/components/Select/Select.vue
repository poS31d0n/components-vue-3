<template>
  <div :class="['select', { select_disabled: disabled }]">
    <div :class="['select__titles']" @click="areOptionsVisable = !areOptionsVisable">
      <div class="select__titles_list">
        <p class="select__titles_placeholder" v-if="titles.length == 0">{{ placeholder }}</p>
        <p class="select__titles_text" v-else v-for="title in titles">{{ title }}</p>
      </div>
      <div class="select__titles_arrow">
        <div :class="['arrow', {arrow_top: areOptionsVisable}, {arrow_bottom: !areOptionsVisable} ]"></div>
      </div>
    </div>

    <ul :class="['options', {options_multiple: !multiple}]" v-if="areOptionsVisable && !disabled">
      <li
        v-for="item in options"
        :class="[
          'options__option',
          { options__option_selected: titles.indexOf(item.name) >= 0 },
        ]"
        :id="item.id"
        :value="item.value"
        :name="item.name"
        @click="handleClick(item.name)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      areOptionsVisable: false,
      titles: [],
    };
  },
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    label: {
      default: "",
      type: String,
    },
    multiple: {
      default: false,
      type: Boolean,
    },
    options: {
      default: [],
      type: Array,
    },
    placeholder: {
      default: "",
      type: String,
    },
    modelValue: {
      default: [],
      type: Array,
    },
  },
  methods: {
    handleClick(option) {
      switch (this.multiple) {
        case true:
          if (this.titles.indexOf(option) >= 0)
            this.titles.splice(this.titles.indexOf(option), 1);
          else this.titles.push(option);
          break;
        case false:
          this.titles = option.split();
          this.hideSelect()
          break;
      }
      this.$emit("select", this.titles);
    },
    hideSelect() {
      this.areOptionsVisable = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Select.scss";
</style>
