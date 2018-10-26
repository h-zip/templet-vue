<template>
  <div class="page has-navbar has-tabbar" v-tabbar-menu-index="0">
    <von-header theme="light">
      <span slot="title">{{this.title}}</span>
    </von-header>
    <div class="page-content padding-top">
      <p class="text-center">{{this.title}}</p>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>

<style scoped>

</style>
