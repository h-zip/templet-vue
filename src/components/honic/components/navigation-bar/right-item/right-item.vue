<template>
  <div :class="classes" :style="styles" @click="onClick"><slot></slot></div>
</template>

<script>
const prefixCls = 'xxx-right-item';
export default {
  name: "right-item",
  props: {
    space: {
      type: String,
      default: '0'
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
        marginRight: this.space
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
