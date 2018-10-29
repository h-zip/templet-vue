<template>
  <div class="page has-navbar">
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
      title: 'My'

    }
  },
  watch: {},
  methods: {
  }
}
</script>

<style scoped>

</style>
