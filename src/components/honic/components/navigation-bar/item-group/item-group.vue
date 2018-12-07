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
        let node = v(h)
        // let on = node.data.on
        // delete node.data.on
        if (node.tag === 'i') {
          let size = node.data.style.fontSize
          node.data.style.lineHeight = size
          node.data.style.transform = `translateY(${(44 - size.slice(0,-2))/2}px)`
        }
        if (node.tag === 'img') {
          let hight = node.data.style.height
          node.data.style.transform = `translateY(${(44 - hight.slice(0,-2))/2}px)`
        }
        if (node.tag === 'span') {
          node.data.style.lineHeight = '44px'
        }
        a.push(h(I, {props: this.renderS.props, on: node.data.on}, [node]))
        delete node.data.on
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
