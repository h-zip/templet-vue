<template>
  <div class="page has-navbar">
    <von-header theme="light">
      <button class="button button-icon ion-ios-arrow-back" slot="left" @click="back"></button>
      <span slot="title">{{this.title}}</span>
    </von-header>
    <div class="page-content padding-top">
      <p class="text-center">{{this.title}}</p>
    </div>
  </div>
</template>

<script>
import path from '../../router/path'
export default {
  props: {},
  computed: {},
  data: function () {
    return {
      title: 'PageA'
    }
  },
  watch: {},
  methods: {
    back: function () {
      $router.navi_pop(path.tabbar.index)
    }
  }
}
</script>

<style scoped>

</style>
