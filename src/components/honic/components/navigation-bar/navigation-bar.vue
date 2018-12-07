<template>
  <div :class="classes">
    <transition :enter-active-class="enterClasses" :leave-active-class="leaveClasses">
      <div v-if="n0">
        <ItemGroup type="left" :renderS="render_0_l"></ItemGroup>
        <TitleView :renderS="render_0_t"></TitleView>
        <ItemGroup type="right" :renderS="render_0_r"></ItemGroup>
      </div>
    </transition>
    <transition :enter-active-class="enterClasses" :leave-active-class="leaveClasses">
      <div v-if="n1">
        <ItemGroup type="left" :renderS="render_1_l"></ItemGroup>
        <TitleView :renderS="render_1_t"></TitleView>
        <ItemGroup type="right" :renderS="render_1_r"></ItemGroup>
      </div>
    </transition>
  </div>
</template>

<script>
import ItemGroup from './item-group'
import TitleView from './title-view'
const prefixCls = 'xxx-navibar';
export default {
  name: "navigation-bar",
  components: {
    ItemGroup,
    TitleView
  },
  computed: {
    classes: function () {
      return [
        `${prefixCls}`
      ]
    },
    enterClasses: function () {
      return 'animated fadeInLeft'
    },
    leaveClasses: function () {
      return 'animated fadeOutRight'
    },
    render_0_l: function () {
      return (this.item0 || {}).render_l || {props: {}, render: []}
    },
    render_0_t: function () {
      return (this.item0 || {}).render_t || {props: {}, render: []}
    },
    render_0_r: function () {
      return (this.item0 || {}).render_r || {props: {}, render: []}
    },
    render_1_l: function () {
      return (this.item1 || {}).render_l || {props: {}, render: []}
    },
    render_1_t: function () {
      return (this.item1 || {}).render_t || {props: {}, render: []}
    },
    render_1_r: function () {
      return (this.item1 || {}).render_r || {props: {}, render: []}
    },
  },
  data: function () {
    return {
      n0: true,
      n1: false,
      n: 0,
      item0: undefined,
      item1: undefined
    }
  },
  mounted: function () {
    window.Vue.prototype.$navi = this
  },
  methods: {
    config: function (item) {
      if (!this.item0 && !this.item1) {
        this.item0 = item
      } else {
        if (this.n === 0) {
          this.n1 = true
          this.item1 = item
          //.......
          this.n0 = false
          this.n = 1
        } else {
          this.n0 = true
          this.item0 = item
          //.......
          this.n1 = false
          this.n = 0
        }
      }
      // const render_l = item.render_l
      // const render_t = item.render_t
      // const render_r = item.render_r
      // const Vue = window.Vue
      // const G = Vue.extend(ItemGroup)
      // let l = new G({
      //   propsData:{title:this.count}
      // }).$mount('#qq')
    }
  }
}
</script>

<style scoped>

</style>
