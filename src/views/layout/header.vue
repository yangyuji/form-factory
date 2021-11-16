<template>
  <header class="app-header">
    <img class="header-logo" src="https://yangyuji.github.io/form-factory/static/img/logo.png">
    表单制作工厂
  </header>
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-header {
    position: relative;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    background-color: #2d5eff;
    font-size: 18px;
    color: #fff;

    .header-logo {
      display: inline-block;
      width: 30px;
      height: 30px;
      vertical-align: middle;
      margin-right: 15px;
    }
  }
</style>
