<template>
  <div :class="classes">
    <NavigationBar></NavigationBar>
    <keep-alive><router-view></router-view></keep-alive>
    <!--<div class="content" @click="onClick">-->
      <!--aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>-->
      <!--aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>-->
      <!--aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>-->
      <!--aaa-->
    <!--</div>-->
    <!--<div class="tabbar">bottom</div>-->
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
    return {
      styleA: {
        display: 'inline-block',
        position: 'relative',
        backgroundColor: 'red',
        height: '20px',
        width: '30px',
        transform: 'translateY(12px)',
        fontSize: '0'
      },
      styleB: {
        backgroundColor: 'black',
        height: '30px',
        width: '30px'
      },
      styleC: {
        color: 'white',
        fontSize: '20px'
      },
      styleD: {
        color: 'white',
        fontSize: '20px'
      },
      classD: {
        'ivu-icon': true,
        'ivu-icon-ios-arrow-back': true
      },
      count: 1234567
    }
  },
  mounted: function () {
    window.Vue.prototype.$keepAliveCache = this.$children[1].$vnode.parent.componentInstance.cache
  },
  methods: {
    onClick: function () {
      this.count++
      let a = {
        render_l: {
          props: {
            space: '5px'
          },
          render: [
            (h) =>  h('i',{
              class: this.classD,
              style: this.styleD,
              on: {
                click: () => {
                  console.log(1111)
                }
              }
            }, []),
            (h) =>  h('img',{
              style: this.styleB,
              on: {
                click: () => {
                  console.log(2222)
                }
              }
            }, []),
            (h) =>  h('span', {
              style: this.styleC,
              on: {
                click: () => {
                  console.log(3333)
                }
              }
            }, [1234])
          ]
        },
        render_t: {
          props: {},
          render: [
            (h) =>  h('div', {
              style: this.styleC
            }, [this.count])
          ]
        },
        render_r: {
          props: {
            space: '5px'
          },
          render: [
            (h) =>  h('img',{
              style: this.styleB
            }, [])
          ]
        }
      }
      this.$navi.config(a)
    }
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
