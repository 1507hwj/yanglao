<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="余额" name="first">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="名称" width="180">
          </el-table-column>
          <el-table-column prop="money" label="金额" width="180">
          </el-table-column>
          <el-table-column prop="date" label="日期">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="激励金" name="second">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="名称" width="180">
          </el-table-column>
          <el-table-column prop="money" label="金额" width="180">
          </el-table-column>
          <el-table-column prop="date" label="日期">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="优惠券" name="third">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="名称" width="180">
          </el-table-column>
          <el-table-column prop="money" label="金额" width="180">
          </el-table-column>
          <el-table-column prop="date" label="日期">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="积分" name="fourth">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="名称" width="180">
          </el-table-column>
          <el-table-column prop="money" label="金额" width="180">
          </el-table-column>
          <el-table-column prop="date" label="日期">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="康养币" name="fifth">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="名称" width="180">
          </el-table-column>
          <el-table-column prop="money" label="金额" width="180">
          </el-table-column>
          <el-table-column prop="date" label="日期">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      tableData: [
        {
          name: "好易便民生活服务",
          money: "50.00",
          date: "12月13日 20:22"
        },
        {
          name: "好易便民生活服务",
          money: "50.00",
          date: "12月13日 20:22"
        },
        {
          name: "好易便民生活服务",
          money: "50.00",
          date: "12月13日 20:22"
        },
        {
          name: "好易便民生活服务",
          money: "50.00",
          date: "12月13日 20:22"
        },
        {
          name: "好易便民生活服务",
          money: "50.00",
          date: "12月13日 20:22"
        }
      ]
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style scoped>
</style>
