<script>
const prefixCls = 'xxx-title-view';
export default {
  name: "title-view",
  props: {
    renderS: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  computed: {
    classes: function () {
      return [
        `${prefixCls}`
      ]
    }
  },
  watch:{
    renderS: function () {
      this.$forceUpdate()
    }
  },
  render: function (h) {
    let a = []
    if (this.renderS) {
      this.renderS.render.forEach((v) => {
        let node = v(h)
        node.data.style.lineHeight = '44px'
        v instanceof Function ? a.push(node) : a.push(v)
      })
    }
    return h('div', {
      'class': this.classes
    }, a)
  }
}
</script>

<style scoped>

</style>
