<template>
  <div style="padding-top: 0; color: white; font-size: 20px;">
    <div style="background-color: #a4d4f5; width: 100%; height: 200px;"></div>
    <scroll-view width="100%" height="200px" direction="x" :nest="false" style="background-color: #ff9900">
      <div slot="content">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab</div>
    </scroll-view>
    B-home<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    aaa
  </div>
</template>

<script>
import path from '../../router/path'
import ScrollView from '../../components/honic/components/scroll-view'
export default {
  components: {
    ScrollView
  },
  props: {},
  computed: {},
  data: function () {
    return {
      x: true,
      y: 'black',
      z: 1,
      navi: {
        hidden: false,
        alpha: 0,
        render_l: {
          props: {space: '5px'},
          render: [
            (h) =>  h('i',{
              class: {
                'ivu-icon': this.x,
                'ivu-icon-ios-arrow-back': this.x
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
                backgroundColor: this.y,
                height: '30px',
                width: '30px',
                opacity: this.z
              },
              on: {
                click: () => {}
              }
            }, []),
            (h) =>  h('span', {
              style: {
                color: 'black',
                fontSize: '20px',
                opacity: this.z
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
            }, ['B-home'])
          ]
        },
        render_r: {
          props: {space: '5px'},
          render: [
            (h) =>  h('img',{
              style: {
                backgroundColor: 'blue',
                height: '30px',
                width: '30px'
              },
              on: {
                click: () => {
                  let r = this.$router.matcher.match(path.pageB.detail)
                  r.meta.naviType = 'push'
                  this.$router.push({path: path.pageB.detail, query: {FRI:5}})
                }
              }
            }, [])
          ]
        }
      }
    }
  },
  watch: {},
  activated: function () {
    this.navi.alpha = 0
    this.$navi.config(this.navi, this.$route.meta.naviType)
    window.addEventListener('scroll', this.handleScroll)
    // window.addEventListener('onpopstate', this.handlePopState)
    window.onpopstate = this.handlePopState
  },
  deactivated: function () {
    window.removeEventListener('scroll', this.handleScroll)
    // window.removeEventListener('onpopstate', this.handlePopState)
  },
  methods: {
    handlePopState: function (e) {
      console.log(e)
    },
    handleScroll: function () {
      const t_alpha =1 - Math.max(0,((200 - window.pageYOffset) / 200))
      if (this.navi.alpha !== t_alpha) {
        this.navi.alpha = t_alpha
        this.y = 'yellow'
        this.z = 0
      }
    }
  }
}
</script>

<style scoped>
</style>
