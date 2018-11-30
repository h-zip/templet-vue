<template>
  <div :class="classes" :style="styles"><slot></slot></div>
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
  }
}
</script>

<style scoped>

</style>
