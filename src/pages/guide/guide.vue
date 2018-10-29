<template>
  <div class="page" v-nav="{hideNavbar: true}">
    <div class="page-content">
      <button class="button button-positive button-block" @click="guide">guide</button>
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
    guide: function () {
      sess.set('firstOpen','0')
      $router.navi_changeRoot(path.login.index)
    }
  }
}
</script>

<style scoped>

</style>
