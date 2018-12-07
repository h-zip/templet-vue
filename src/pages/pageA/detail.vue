<template>
  <div style="padding-top: 64px">A-detail</div>
</template>

<script>
export default {
  props: {},
  computed: {},
  data: function () {
    return {
      navi: {
        render_l: {
          props: {space: '5px'},
          render: [
            (h) =>  h('i',{
              class: {
                'ivu-icon': true,
                'ivu-icon-ios-arrow-back': true
              },
              style: {
                color: 'white',
                fontSize: '20px'
              },
              on: {
                click: () => {
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
                color: 'white',
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
                color: 'white',
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
                click: () => {}
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
