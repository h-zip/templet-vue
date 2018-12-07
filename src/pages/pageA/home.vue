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
                color: 'white',
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
                color: 'white',
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
                  let r = this.$router.matcher.match(path.pageA.detail)
                  r.meta.naviType = 'push'
                  this.$router.push({path: path.pageA.detail})
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
    this.$navi.config(this.navi)
  },
  deactivated: function () {

  },
  methods: {
  }
}
</script>

<style scoped>

</style>
