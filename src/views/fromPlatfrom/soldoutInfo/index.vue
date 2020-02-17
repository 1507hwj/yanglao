<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="soldoutRoom" label="下架房间">
      </el-table-column>
      <el-table-column prop="soldoutReason" label="下架理由">
      </el-table-column>
      <el-table-column prop="soldoutType" label="下架类型">
      </el-table-column>
      <el-table-column prop="soldoutTime" label="下架时间">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div>
            <el-button type="primary" size="small">检查</el-button>
            <el-button type="success" size="small">重上架</el-button>

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
          soldoutRoom: "D2-899",
          soldoutReason: "房间太小",
          soldoutType: "技术合规性",
          soldoutTime: "2019-12-23"
        },
        {
          soldoutRoom: "D2-899",
          soldoutReason: "房间太小",
          soldoutType: "技术合规性",
          soldoutTime: "2019-12-23"
        },
        {
          soldoutRoom: "D2-899",
          soldoutReason: "房间太小",
          soldoutType: "技术合规性",
          soldoutTime: "2019-12-23"
        },
      ]
    }
  }

}
</script>
<style scoped>
</style>
