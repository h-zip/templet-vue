<template>
  <div class="page" v-nav="{hideNavbar: true}">
    <div class="page-content">
      <button class="button button-positive button-block" @click="login">login</button>
    </div>
  </div>
</template>

<script>
import sess from '../../components/vonic/src/sess'
import path from '../../router/path'
export default {
  props: {},
  computed: {},
  data: function () {
    return {}
  },
  watch: {},
  methods: {
    login: function () {
      sess.set('token','1')
      $router.navi_changeRoot(path.tabbar.index)
    }
  }
}
</script>

<style scoped>

</style>
