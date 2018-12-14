<template>
  <div :class="classes" :style="styles">
    <transition :name="transitionName1">
      <div v-if="n0">
        <ItemGroup type="left" :renderS="render_0_l"></ItemGroup>
        <ItemGroup type="right" :renderS="render_0_r"></ItemGroup>
      </div>
    </transition>
    <transition :name="transitionName1">
      <div v-if="n1">
        <ItemGroup type="left" :renderS="render_1_l"></ItemGroup>
        <ItemGroup type="right" :renderS="render_1_r"></ItemGroup>
      </div>
    </transition>
    <transition :enter-active-class="enterClasses" :leave-active-class="leaveClasses"
                @after-enter="afterEnter" @after-leave="afterLeave"
                @before-enter="beforeEnter" @before-leave="beforeLeave">
    <div v-if="n0">
    <TitleView :renderS="render_0_t"></TitleView>
    </div>
    </transition>
    <transition :enter-active-class="enterClasses" :leave-active-class="leaveClasses">
      <div v-if="n1">
        <TitleView :renderS="render_1_t"></TitleView>
      </div>
    </transition>
  </div>
</template>

<script>
import ItemGroup from './item-group'
import TitleView from './title-view'
import utils from '../../utils'
const prefixCls = 'xxx-navibar';
const prefixAnimate1 = 'xxx-navi-fade-1';
const prefixAnimate2 = 'xxx-navi-fade-2';
const prefixAnimateColor = 'xxx-navi-color';
export default {
  name: "navigation-bar",
  components: {
    ItemGroup,
    TitleView
  },
  computed: {
    classes: function () {
      return [
        `${prefixCls}`,
        {
          'xxx-navi-color': this.animated
        }
      ]
    },
    styles: {
      get: function () {
        let color = utils.hexToRgbaString(this['bg_color_' + this.n], this['alpha_' + this.n])
        return [{backgroundColor: color}]
      }
    },
    transitionName1: function () {
      return `${prefixAnimate1}`
    },
    enterClasses: function () {
      let a = ''
      if (this.naviType === 'push') { a = `${prefixAnimate2}-enter-active` }
      if (this.naviType === 'back') { a = `${prefixAnimate1}-enter-active` }
      return a
    },
    leaveClasses: function () {
      let a = ''
      if (this.naviType === 'push') { a = `${prefixAnimate1}-leave-active` }
      if (this.naviType === 'back') { a = `${prefixAnimate2}-leave-active` }
      return a
    },
    bg_color_0 : function () {
      return (this.item0 || {}).bgColor || '#FFFFFF'
    },
    alpha_0: function () {
      let alpha = 1
      if ((this.item0 === undefined) || (this.item0.alpha === undefined)) {
        alpha = 1
      } else {
        alpha = this.item0.alpha
      }
      return alpha
    },
    hidden_0: function() {
      return (this.item0 || {}).hidden || false
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
    bg_color_1 : function () {
      return (this.item1 || {}).bgColor || '#FFFFFF'
    },
    alpha_1: function () {
      let alpha = 1
      if ((this.item1 === undefined) || (this.item1.alpha === undefined)) {
        alpha = 1
      } else {
        alpha = this.item1.alpha
      }
      return alpha
    },
    hidden_1: function() {
      return (this.item1 || {}).hidden || false
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
      item1: undefined,
      naviType: undefined,
      animated: false
    }
  },
  mounted: function () {
    window.Vue.prototype.$navi = this
  },
  methods: {
    beforeEnter: function (el) {
      // console.log('beforeEnter')
      let end = utils.hexToRgbaString(this['bg_color_' + this.n], this['alpha_' + this.n])
      let orign = ''
      this.n === 0 ? orign = utils.hexToRgbaString(this['bg_color_1'], this['alpha_1']) : orign = utils.hexToRgbaString(this['bg_color_0'], this['alpha_0'])
      utils.changeKeyframesColor(prefixAnimateColor, orign, end)
      this.animated = true
    },
    beforeLeave: function (el) {
      // console.log('beforeLeave')
      let end = utils.hexToRgbaString(this['bg_color_' + this.n], this['alpha_' + this.n])
      let orign = ''
      this.n === 0 ? orign = utils.hexToRgbaString(this['bg_color_1'], this['alpha_1']) : orign = utils.hexToRgbaString(this['bg_color_0'], this['alpha_0'])
      utils.changeKeyframesColor(prefixAnimateColor, orign, end)
      this.animated = true
    },
    afterEnter: function (el) {
      // console.log('afterEnter')
      this.animated = false
    },
    afterLeave: function (el) {
      // console.log('afterLeave')
      this.animated = false
    },
    config: function (item, type) {
      console.log(type)
      this.naviType = type
      this.$nextTick(() => {
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
      })
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
