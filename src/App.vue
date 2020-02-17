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
  min-height: 90%;
  margin-top: 5% !important;
}
.el-dialog__body {
  min-height: 80% !important;
}
.el-aside,
.el-main {
  overflow: hidden;
}
/*解决表格表头和单元格列不对齐问题*/
body .el-table th.gutter {
  display: table-cell !important;
}

/*-------------首页表格样式----------*/
.el-table .cell {
  text-align: center;
}
.el_table th,
.el_table tr,
.el_table td {
  border: 0 !important;
  background-color: transparent;
  text-align: center;
  font-size: 14px;
  color: rgba(102, 102, 102, 1);
}
.el_table th {
  background: rgba(240, 245, 250, 1);
}
.tl th,
.tl td {
  text-align: left;
  padding-left: 20px;
}
.el_table td .cell {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
/*----------------养老机构详情页--------------*/
.form .el-form-item {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px !important;
}
.form thead {
  display: none;
}
.form .el-form-item .cell {
  text-align: center;
}
.form .el-form-item__content {
  margin-left: 100px !important;
  font-size: 16px;
}
.form .el-form-item__label {
  text-align: left;
  font-size: 16px;
  color: #333;
  font-weight: normal;
}
.form .el-textarea__inner,
.form .el-input__inner {
  font-size: 16px;
  color: #333;
}
.form .el-textarea__inner {
  min-height: 100px !important;
}
.add_post {
  width: 80%;
  text-align: center;
}

.el-select {
  width: 70% !important;
}

.el_checkbox .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
  background-color: #409eff !important;
  border-color: #409eff !important;
}
.el_checkbox
  .el-checkbox__input.is-disabled.is-checked
  .el-checkbox__inner::after {
  border-color: #fff !important;
}
.resume_dialog .el-dialog{
  color: #333;
  font-size: 14px;
  width: 40%;
}
.resume_dialog .el-dialog__header {
  color: #333;
  font-size: 14px;
  height: 182px !important;
  border-bottom: 1px #0160fe solid !important;
}
.resume_dialog .el-dialog__body{
  color: #333;
  font-size: 14px;
  padding-left:55px;
}
</style>
