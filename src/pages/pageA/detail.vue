<template>
  <div style="padding-top: 64px; color: white; font-size: 20px;">
    A-detail<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    aaa
  </div>
</template>

<script>
import path from '../../router/path'
export default {
  props: {},
  computed: {},
  data: function () {
    return {
      navi: {
        hidden: false,
        alpha: 1,
        bgColor: '#ff9900',
        render_l: {
          props: {space: '5px'},
          render: [
            (h) =>  h('i',{
              class: {
                'ivu-icon': true,
                'ivu-icon-ios-arrow-back': true
              },
              style: {
                color: 'black',
                fontSize: '20px'
              },
              on: {
                click: () => {
                  let r = this.$router.matcher.match(this.$router.options.routes[this.$route.query.FRI])
                  r.meta.naviType = 'back'
                  this.$router.back()
                }
              }
            }, []),
            (h) =>  h('img',{
              style: {
                backgroundColor: 'black',
                height: '30px',
                width: '30px'
              },
              on: {
                click: () => {}
              }
            }, []),
            (h) =>  h('span', {
              style: {
                color: 'black',
                fontSize: '20px'
              },
              on: {
                click: () => {}
              }
            }, ['返回'])
          ]
        },
        render_t: {
          props: {},
          render: [
            (h) =>  h('div', {
              style: {
                color: 'black',
                fontSize: '20px'
              }
            }, ['A-detail'])
          ]
        },
        render_r: {
          props: {space: '5px'},
          render: [
            (h) =>  h('img',{
              style: {
                backgroundColor: 'black',
                height: '30px',
                width: '30px'
              },
              on: {
                click: () => {
                  let r = this.$router.matcher.match(path.pageB.home)
                  r.meta.naviType = 'push'
                  this.$router.push({path: path.pageB.home, query: {FRI:4}})
                }
              }
            }, [])
          ]
        }
      }
    }
  },
  watch: {},
  mounted: function () {

  },
  activated: function () {
    this.$navi.config(this.navi, this.$route.meta.naviType)
  },
  deactivated: function () {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>
