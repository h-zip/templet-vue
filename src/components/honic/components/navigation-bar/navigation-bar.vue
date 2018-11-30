<template>
  <div :class="classes">
    <ItemGroup type="left" :renderS="render_l"></ItemGroup>
    <TitleView :renderS="render_t"></TitleView>
    <ItemGroup type="right" :renderS="render_r"></ItemGroup>
  </div>
</template>

<script>
import ItemGroup from './item-group'
import TitleView from './title-view'
const prefixCls = 'xxx-navibar';
const f = () => {};
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
    render_l: function () {
      return (this.$_.last(this.catchedNaviItem) || []).render_l || {props: {}, render: []}
    },
    render_t: function () {
      return (this.$_.last(this.catchedNaviItem) || []).render_t || {props: {}, render: []}
    },
    render_r: function () {
      return (this.$_.last(this.catchedNaviItem) || []).render_r || {props: {}, render: []}
    },
  },
  data: function () {
    return {
      catchedNaviItem: [],
    }
  },
  mounted: function () {
    window.Vue.prototype.$navi = this
  },
  methods: {
    config: function (item) {
      this.catchedNaviItem.push(item)
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
