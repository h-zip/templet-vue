<template>
  <div style="padding-top: 64px">A-home</div>
</template>

<script>
import path from '../../router/path'
export default {
  props: {},
  computed: {},
  data: function () {
    return {
      title: 'PageA',
      navi: {
        hidden: false,
        alpha: 1,
        render_l: {
          props: {space: '5px'},
          render: [
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
            }, ['1'])
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
            }, ['A-home'])
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
                  // console.log(this.$router)
                  // console.log(this.$vnode.tag.split('-')[2])
                  // console.log(this.$keepAliveCache)
                  let r = this.$router.matcher.match(path.pageA.detail)
                  r.meta.naviType = 'push'
                  this.$router.push({path: path.pageA.detail, query: {FRI:3}})
                }
              }
            }, [])
          ]
        }
      }
    }
  },
  watch: {
  },
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
