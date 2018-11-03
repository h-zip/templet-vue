<template>
  <div class="page has-navbar">
    <von-header theme="light">
      <span slot="title">{{this.title}}</span>
    </von-header>
    <div class="page-content padding-top">
      <p class="text-center">{{this.title}}</p>
      <button class="button button-positive button-block" @click="logout">logout</button>
    </div>
  </div>
</template>

<script>
import sess from '../../components/vonic/src/sess'
import path from '../../router/path'
export default {
  props: {
  },
  computed: {},
  data: function () {
    return{
      title: 'My'

    }
  },
  watch: {},
  methods: {
    logout: function () {
      sess.remove('token')
      $router.navi_changeRoot(path.login.index)
    }
  }
}
</script>

<style scoped>

</style>
