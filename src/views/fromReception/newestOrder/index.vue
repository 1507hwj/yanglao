<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="下单人" width="180">
      </el-table-column>
      <el-table-column prop="room" label="房间" width="180">
      </el-table-column>
      <el-table-column prop="dealTime" label="下单时间">
      </el-table-column>
      <el-table-column prop="dealMoney" label="下单金额">
      </el-table-column>
      <el-table-column prop="dealNumber" label="订单编号">
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <div>
            <el-button type="success" size="small">添加</el-button>
            <el-button type="danger" size="small">拒绝</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          name: "王小虎",
          room: "D1-903",
          dealTime: "2019-12-23",
          dealMoney: "399",
          dealNumber: "79868549"
        },
        {
          name: "王小虎",
          room: "D1-903",
          dealTime: "2019-12-23",
          dealMoney: "399",
          dealNumber: "79868549"
        },
        {
          name: "王小虎",
          room: "D1-903",
          dealTime: "2019-12-23",
          dealMoney: "399",
          dealNumber: "79868549"
        },
        {
          name: "王小虎",
          room: "D1-903",
          dealTime: "2019-12-23",
          dealMoney: "399",
          dealNumber: "79868549"
        },
        {
          name: "王小虎",
          room: "D1-903",
          dealTime: "2019-12-23",
          dealMoney: "399",
          dealNumber: "79868549"
        }
      ]
    }
  }

}
</script>
<style scoped>
</style>
