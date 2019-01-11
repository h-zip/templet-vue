<template>
  <div style="padding-top: 0px; color: white; font-size: 20px; width: 100%; height: 100%;">
    <div style="background-color: #c53ef5; width: 100%; height: 500px;">
      <scroll-view width="100%" height="100%">
        <refresh-header slot="header"></refresh-header>
        <div slot="content">
          B-Detail<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          aaa
        </div>
        <!--<refresh-header slot="footer" slot-scope="scope" :scroll-top="scope.scrollTop" :touching="scope.touching" :refreshing="scope.refreshing" :diff="scope.diff" :top="scope.top"></refresh-header>-->
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
      }
    }
  }
</script>

<style scoped>
</style>

