<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>
<style>
.el-dialog {
  overflow: hidden;
  height: 65%;
  margin-top: 5% !important;
}
.el-dialog__body {
  height: 80% !important;
}
.el-aside,
.el-main {
  overflow: hidden;
}
</style>
