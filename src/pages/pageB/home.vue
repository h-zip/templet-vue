<template>
  <div style="padding-top: 0; color: white; font-size: 20px;">
    <div style="background-color: #a4d4f5; width: 100%; height: 200px; "></div>
    B-home<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    aaa
  </div>
</template>

<script>
export default {
  props: {},
  computed: {},
  data: function () {
    return {
      navi: {
        hidden: false,
        alpha: 0,
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
                click: () => {}
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
  },
  deactivated: function () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll: function () {
      const t_alpha =1 - Math.max(0,((200 - window.pageYOffset) / 200))
      if (this.navi.alpha !== t_alpha) {
        this.navi.alpha = t_alpha
      }
    }
  }
}
</script>

<style scoped>
</style>
