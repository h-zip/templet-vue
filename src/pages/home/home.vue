<template>
  <div class="page has-navbar">
    <von-header theme="light">
      <span slot="title">{{this.title}}</span>
    </von-header>
    <div class="page-content padding-top">
      <p class="text-center">{{this.title}}</p>
      <button class="button button-positive button-block" @click="pushToPageA">PageA</button>
    </div>
  </div>
</template>

<script>
import path from '../../router/path'
export default {
  props: {
  },
  computed: {},
  data: function () {
    return{
      title: 'Home'

    }
  },
  watch: {},
  methods: {
    pushToPageA: function () {
      $router.navi_push(path.pageA.home)
    }
  }
}
</script>

<style scoped>

</style>
