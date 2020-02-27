<template>
  <div>
    <el-header>
      <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="90px">
        <el-form-item label="房型">
          <el-date-picker v-model="formInline.startTime" type="datetime" placeholder="开始时间" value-format="yyyy-MM-dd HH:mm:ss" :picker-options="inPickerOptions"></el-date-picker>
        </el-form-item>
        <el-form-item label="客户账号">
          <el-date-picker v-model="formInline.endTime" type="datetime" placeholder="结束时间" value-format="yyyy-MM-dd HH:mm:ss" :picker-options="leavePickerOptions"></el-date-picker>
        </el-form-item>
        <el-form-item label="订单编号">
          <el-input v-model="formInline.buyerName" placeholder="请输入消费者" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryOrder()">查询</el-button>
        </el-form-item>
      </el-form>
    </el-header>
    <!-- <el-tabs v-model="activeName" style="padding-bottom:40px !important;background: #fff !important;">
      <el-tab-pane label="订单列表" name="first"> -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="buyerWechatID" label="客户账号"></el-table-column>
          <el-table-column prop="orderno" label="订单编号">
            <template slot-scope="scope">
              <div>
                <span style="margin-right:20px;">{{ scope.row.orderno }}</span>
                <el-button type="text" style="font-size:12px;">详情</el-button>
              </div>
            </template>
          </el-table-column>
           <el-table-column prop="buyerWechatID" label="房间编号"></el-table-column>
          <el-table-column prop="buyerWechatID" label="房型"></el-table-column>
          <el-table-column prop="buyerWechatID" label="订单总额"></el-table-column>
          <el-table-column prop="dealTime" label="成交时间"></el-table-column>
          <!-- <el-table-column label="绑定状态">
            <template slot-scope="scope">
              <div @click="unbind(scope.$index, scope.row)">
                <el-button type="danger" size="small" v-if="scope.row.bindState == 0">未绑定</el-button>
                <el-button type="success" size="small" v-else-if="scope.row.bindState == 1">已绑定</el-button>
              </div>
            </template>
          </el-table-column> -->
        </el-table>
      <!-- </el-tab-pane>
    </el-tabs> -->
    <div v-if="total>0" style="margin:40px;">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="formInline.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="formInline.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      loading: false,
      formInline: {
        startTime: '',
        endTime: '',
        buyerName: '',
        pageNum: 1,
        pageSize: 5
      },
      tableData: [],
      total: 0,
      // 绑定解绑状态
      type: '',
      inPickerOptions: {
        disabledDate: time => {
          return this.inDisabledDate(time)
        }
      },
      leavePickerOptions: {
        disabledDate: time => {
          return this.leaveDisabledDate(time)
        }
      }
    }
  },
  // mounted () {
  //   this.queryOrder() //要查数据就直接调用这个方法就好了
  // },
  // methods: {
  //   // --------------------------------绑定解绑切换-----------------------
  //   unbind (index, row) {
  //     this.$instance1({
  //       method: 'put',
  //       url: '/sOrder/modifySaleRecordBindState',
  //       params: {
  //         id: row.id,
  //         buyerWechatID: row.buyerWechatID,
  //         distributorName: row.distributorName
  //       }
  //     }).then(res => {
  //       console.log(res)
  //       this.queryOrder()
  //     })
  //   },
  //   queryOrder () {
  //     this.loading = true
  //     this.$instance1({
  //       method: 'get',
  //       url: '/sOrder/querySaleRecord',
  //       params: this.formInline
  //     }).then(res => {
  //       this.loading = false
  //       console.log(res)
  //       this.tableData = res.data.list
  //       this.total = res.data.total
  //     })
  //   },
  //   // -------------------------------------分页----------------------
  //   handleSizeChange (val) {
  //     this.formInline.pageSize = val
  //     this.queryOrder()
  //   },
  //   handleCurrentChange (val) {
  //     this.formInline.pageNum = val
  //     this.queryOrder()
  //   },
  //   // 限制入住时间可选日期
  //   inDisabledDate (time) {
  //     if (this.formInline.endTime === null) {
  //       return time.getTime() > Date.now()
  //     } else {
  //       return time.getTime() > new Date(this.formInline.endTime).getTime()
  //     }
  //   },
  //   // 限制离店时间可选日期
  //   leaveDisabledDate (time) {
  //     return time.getTime() < new Date(this.formInline.startTime).getTime()
  //   }
  // }
}
</script>
<style scoped>
.button {
  border-radius: 15px;
  height: 30px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 1;
}
.check_btn {
  width: 88px;
  background: rgba(29, 148, 231, 1);
}
.unbind_btn {
  width: 60px;
  background: rgba(204, 204, 204, 1);
}
.block {
  display: inline-block;
  margin-bottom: 30px !important;
}
.demonstration {
  display: inline-block !important;
  margin-right: 10px;
  margin-left: 10px;
}
.el-input {
  display: inline-block !important;
}
.distributor .el-form-item {
  margin-left: 40px;
}
.distributor {
  position: absolute;
  height: 40px;
}
.wechat_id {
  display: block;
  /* margin-bottom: 30px; */
}
.el-tabs__content {
  margin-top: 30px !important;
}

.el-form--inline .el-form-item__label {
  font-size: 16px !important;
  color: #000;
}
</style>
