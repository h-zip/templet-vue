<template>
  <div :class="classes">
    <div class="navibar">top</div>
    <div class="content">
      aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      aaa<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      aaa
    </div>
    <div class="tabbar">bottom</div>
  </div>
</template>

<script>
const prefixCls = 'xxx-app';
export default {
  name: "app",
  data: function () {
    return {
      classes: [
        `${prefixCls}`
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .navibar {
    width: 100%;
    position: fixed;
    height: 45px;
    top: 0;
    background-color: #4cd964;
  }
  .tabbar {
    width: 100%;
    position: fixed;
    height: 45px;
    bottom: 0;
    background-color: #9e9e9e;
    box-sizing: content-box;
    padding-bottom: env(safe-area-inset-bottom);
    border: red 1px solid;
  }
  .content {
    padding: 45px 0;
    color: white;
  }
</style>
