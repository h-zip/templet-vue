<template>
  <div :class="classes" :style="styles" @click="onClick"><slot></slot></div>
</template>

<script>
const prefixCls = 'xxx-left-item';
export default {
  name: "left-item",
  props: {
    space: {
      type: String,
      default: '0'
    }
  },
  data: function () {
    return {
    }
  },
  computed: {
    classes: function () {
      return [
        `${prefixCls}`
      ]
    },
    styles: function () {
      return {
        marginLeft: this.space
      }
    }
  },
  methods: {
    onClick: function () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>
