<template>
  <div>
    <el-table :data="tableData" style="width: 80%">
      <el-table-column prop="room" label="房间" width="180">
      </el-table-column>
      <el-table-column prop="progress" label="进度" width="180">
        <template slot-scope="scope">
          <el-tag  v-if="scope.row.progress=='待审核'">{{scope.row.progress}}</el-tag>
          <el-tag type="warning" v-else-if="scope.row.progress=='审核中'">{{scope.row.progress}}</el-tag>
          <el-tag type="info" v-else-if="scope.row.progress=='未通过'">{{scope.row.progress}}</el-tag>
          <el-tag type="success" v-else-if="scope.row.progress=='已通过'">{{scope.row.progress}}</el-tag>

        </template>
      </el-table-column>
      <el-table-column prop="frontAnd" label="前面还有">
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
          room: "D2-788",
          progress: "待审核",
          frontAnd: "13人"
        },
        {
          room: "D2-788",
          progress: "待审核",
          frontAnd: "13人"
        },
        {
          room: "D2-788",
          progress: "审核中",
          frontAnd: "13人"
        },
        {
          room: "D2-788",
          progress: "未通过",
          frontAnd: "13人"
        },
        {
          room: "D2-788",
          progress: "已通过",
          frontAnd: "13人"
        }
      ]
    }
  }

}
</script>
<style scoped>
</style>
