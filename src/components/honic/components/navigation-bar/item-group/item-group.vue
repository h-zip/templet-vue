<script>
import LeftItem from '../left-item'
import RightItem from '../right-item'
const prefixCls = 'xxx-item-group';
export default {
  name: "item-group",
  components: {
    LeftItem,
    RightItem
  },
  props: {
    type: String,
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
        `${prefixCls}`,
        this.type === 'right' ? `${prefixCls}-right` : `${prefixCls}-left`
      ]
    }
  },
  watch:{
    renderS: function () {
      this.$forceUpdate()
    }
  },
  data: function () {
    return {
    }
  },
  render: function (h) {
    const I = this.type === 'right' ? RightItem : LeftItem
    let a = []
    if (this.renderS) {
      this.renderS.render.forEach((v) => {
        a.push(h(I, {props: this.renderS.props}, [v(h)]))
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
