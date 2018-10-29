<template>
  <div class="page" v-nav="{hideNavbar: true}" v-tabbar="{'menus': menus, menuColor: '#999', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
      <div v-if="index === 0"><home/></div>
      <div v-if="index === 1"><my/></div>
      <!--<div v-if="index === 2"><home/></div>-->
  </div>
</template>

<script>
  import home from '../home/home'
  import my from '../my/my'
  export default {
    components: {
      home,
      my
    },
    props: {},
    computed: {
    },
    data: function () {
      return {
        index: 0,
        menus: [
          {
            iconOn: 'ion-ios-home',
            iconOff: 'ion-ios-home',
            text: '首页'
          },
          {
            iconOn: 'ion-ios-person',
            iconOff: 'ion-ios-person',
            text: '我的'
          }
        ]
      }
    },
    watch: {},
    methods: {
      menuClicked: function (index) {
        this.index = index
      }
    },
    beforeDestroy() {
      $tabbar.$emit('hideTabbar')
    }
  }
</script>

<style scoped>

</style>
