<template>
  <div :class="classes">
    <NavigationBar></NavigationBar>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
import NavigationBar from '../navigation-bar'
const prefixCls = 'xxx-app';
export default {
  name: "app",
  components: {
    NavigationBar
  },
  computed: {
    classes: function () {
      return [
        `${prefixCls}`
      ]
    }
  },
  data: function () {
    return {}
  },
  mounted: function () {
    window.Vue.prototype.$keepAliveCache = this.$children[1].$vnode.parent.componentInstance.cache
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  .tabbar {
    width: 100%;
    position: fixed;
    height: 45px;
    bottom: 0;
    background-color: #9e9e9e;
    box-sizing: content-box;
    padding-bottom: env(safe-area-inset-bottom);
    border: red 1px solid;
  }
  .content {
    padding: 64px 0 45px;
    color: white;
  }
</style>
