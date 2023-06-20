<template>
  <div class="select">
    <p class="title" :placeholder="placeholder" @click="areOptionsVisable = !areOptionsVisable">{{ title.join(', ') }}</p>
    <div class="options" v-if="areOptionsVisable">
      <p
        v-for="item in options"
        :id="item.id"
        :value="item.value"
        :name="item.name"
        @click="handleClick(item)"
      >{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      areOptionsVisable: true,
      title: [],
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

      if(this.title.indexOf(option.name) >= 0)
        this.title.splice(this.title.indexOf(option.name), 1)
      else this.title.push(option.name);
      
      this.$emit('select', this.title);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Select.scss";
</style>
