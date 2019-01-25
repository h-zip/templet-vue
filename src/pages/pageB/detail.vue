<template>
  <div style="padding-top: 0px; color: white; font-size: 20px; width: 100%; height: 100%;">
    <div style="background-color: #c53ef5; width: 100%; height: 500px;">
      <scroll-view width="100%" height="100%" direction="y">
        <refresh-header slot="header" @on-refresh="onRefresh"></refresh-header>
        <div style="height: 100%;width: 100%" slot="content">
          B-Detail<br/><br/><br/><br/>
          <scroll-view width="100%" height="30%" direction="x" :nest="false" style="background-color: #ff9900">
            <div slot="content">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaalaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
          </scroll-view>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          aaa
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
  import ScrollView from '../../components/honic/components/scroll-view'
  import RefreshHeader from '../../components/honic/components/refresh-header'
  export default {
    props: {},
    components: {
      ScrollView,
      RefreshHeader
    },
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
            render: []
          },
          render_t: {
            props: {},
            render: []
          },
          render_r: {
            props: {space: '5px'},
            render: []
          }
        }
      }
    },
    watch: {},
    activated: function () {
      this.navi.alpha = 0
      this.$navi.config(this.navi, this.$route.meta.naviType)
    },
    deactivated: function () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll: function () {
        // const t_alpha =1 - Math.max(0,((200 - window.pageYOffset) / 200))
        // if (this.navi.alpha !== t_alpha) {
        //   this.navi.alpha = t_alpha
        //   this.y = 'yellow'
        //   this.z = 0
        // }
      },
      onRefresh: function (end) {
        setTimeout(function () {

          end()
        },3000)
      }
    }
  }
</script>

<style scoped>
</style>

