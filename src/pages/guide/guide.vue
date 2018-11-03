<template>
  <div class="page" v-nav="{hideNavbar: true}">
    <div class="page-content">
      <button class="button button-positive button-block" @click="guide">guide</button>
      <div class="center">
        <button :class="btnClasses1"><i class="ion-ios-home icont"></i><span>我的</span></button>
        <button :class="btnClasses2"><i class="ion-ios-home icont"></i><span>我的</span></button>
      </div>
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
    return {
      btnClasses1: [
        'btn',
        'btn-size',
        'btn-color',
        'btn-rect'
      ],
      btnClasses2: [
        'btn',
        'btn-size',
        'btn-color',
        'btn-rect',
        'btn-v'
      ]
    }
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
  .center {
    margin: auto;
    padding: auto;
  }
  .btn {
    display: inline-block;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    line-height: 1.2;

  }
  .btn-size {
    padding: 0 15px;
    font-size: 12px;
    border-radius: 4px;
  }
  .btn-color {
    color: #ffffff;
    background-color: #4cd964;
    border-color: #4cd964;
  }
  .btn-rect {
    width: 50%;
    height: 44px;
    margin: 20px 25%;
  }
  .btn:not(.btn-v) > .icont + span, .btn > span + .icont {
    margin-left: 4px;
  }
  .btn-v > .icont + span {
    display: block;
  }
  .icont {
    font-size: 24px;
  }

</style>
