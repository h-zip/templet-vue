<template>
  <div :class="classes">
    <NavigationBar ref="navi"></NavigationBar>
    <div class="content" @click="onClick">
      aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      aaa
    </div>
    <div class="tabbar">bottom</div>
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
        display: 'block',
        position: 'relative',
        backgroundColor: 'black',
        height: '40px',
        width: '40px',
        transform: 'translateY(2px)'


      },
      styleC: {
        position: 'relative',
        color: 'white',
        fontSize: '20px',
        margin: 'auto',
        lineHeight: '44px'
      },
      styleD: {
        // backgroundColor: 'black',
        color: 'white',
        fontSize: '20px',
        lineHeight: '20px',
        transform: 'translateY(12px)'
      },
      classD: {
        'ivu-icon': true,
        'ivu-icon-ios-arrow-back': true
      },
      count: 1234567
    }
  },
  mounted: function () {
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
              style: this.styleD
            }, []),
            (h) =>  h('i',{
              class: this.classD,
              style: this.styleD
            }, [])
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
