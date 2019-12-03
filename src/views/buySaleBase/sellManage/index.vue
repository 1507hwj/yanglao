<template>
  <div>
    <div style="position:relative;">
      <div class="block">
        <span class="demonstration">下单日期</span>
        <el-date-picker v-model="value1" placeholder="请选择时间" @blur="startDate()"></el-date-picker>
        <span class="demonstration">至</span>
        <el-date-picker v-model="value2" placeholder="请选择时间" @blur="endDate()"></el-date-picker>
      </div>
      <div class="block distributor">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="消费者" style="font-size:16px;">
            <el-input v-model="formInline.user" placeholder="请输入消费者" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="queryOrder()">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick()" style="padding-bottom:120px !important;background: #fff !important;">
      <el-tab-pane label="订单列表" name="first">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="account" label="消费者"></el-table-column>
          <el-table-column prop="orderserviceid" label="订单名"></el-table-column>
          <el-table-column prop="servicetype" label="服务类型"></el-table-column>
          <el-table-column prop="orderserviceTime" label="下单时间"></el-table-column>
          <el-table-column prop="operation" label="操作">
            <template>
              <el-button size="mini" @click="checkOrder()" class="check_btn button">查看订单</el-button>
              <el-button size="mini" @click="unbind()" class="unbind_btn button">解绑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row>
          <el-col :span="24" style="margin-top:40px;">
            <div class="pagination">
              <el-pagination v-if="paginations.total > 0" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="paginations.page_index" :page-sizes="paginations.page_sizes" :page-size="paginations.page_size" layout="total, sizes, prev, pager, next, jumper" :total="paginations.total">
              </el-pagination>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
// 销售管理

//将日期转为指定格式
Date.prototype.format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}
export default {
  data () {
    return {
      value1: '',
      value2: '',
      activeName: 'first',
      formInline: {
        user: ''
        // region: ""
      },
      paginations: {
        page_index: 1, // 当前位于哪页
        total: 0, // 总数
        page_size: 5, // 1页显示多少条
        page_sizes: [5, 10, 15, 20], //每页显示多少条
        layout: 'tatol, sizes, prev, pager, next, jumper' // 翻页属性
      },
      tableData: [],
      allTableData: [] //请求数据放到另外容器进行前端分页
    }
  },
  methods: {
    handleClick (tab, event) {
      window.console.log(tab, event)
    },
    checkOrder () {
      //查看订单
    },
    unbind () {
      //解绑
    },

    startDate () {
      this.value1 = this.value1.format('yyyy-MM-dd hh:mm:ss')
      window.console.log(this.value1)
    },
    endDate () {
      this.value2 = this.value2.format('yyyy-MM-dd 23:59:ss')
      window.console.log(this.value2)
    },
    //查询销售订单
    queryOrder () {
      this.$get('http://120.25.214.5:8081/orderNurse/queryOrderNurseByToday', {
        startTime: this.value1,
        endTime: this.value2
      }).then(data => {
        window.console.log(data)
        this.allTableData = data.list
        this.setPaginations()
      })
    },
    async render () {
      let data = await this.$axios.get(
        'http://120.25.214.5:8081/orderNurse/queryOrderNurseByToday'
      )

      this.allTableData = data.data.list //现在所有数据放到另外容器
      console.log(this.allTableData)

      //设置分页数据
      this.setPaginations()
    },
    setPaginations () {
      // 总页数
      this.paginations.total = this.allTableData.length //总页数以及总页数的长度
      this.paginations.page_index = 1 //当前页数 一开始显示一页
      this.paginations.page_size = 5 //=一页显示五条  一开始显示一页显示五条数据
      // 设置默认分页数据
      this.tableData = this.allTableData.filter((item, index) => {
        //拿到每一条数据 以及每条数据下标
        return index < this.paginations.page_size //下标小于当前页面值（比如一开始当前页面值为1）
      })
    },
    handleSizeChange (page_size) {
      // 切换size点击页数条跳转
      this.paginations.page_index = 1 //当前页数
      // paginations.page_size 注意渲染 page_size这个选择的值数据库有多少条数据总页面共显示多少条
      this.paginations.page_size = page_size

      this.tableData = this.allTableData.filter((item, index) => {
        return index < page_size //五条显示一页 亦可以切换十条一页
      })
    },
    handleCurrentChange (page) {
      // 获取当前页面
      let sortnum = this.paginations.page_size * (page - 1) //这就是当前页面的下标了
      let table = this.allTableData.filter((item, index) => {
        // 这句代获取数据总数
        return index >= sortnum
      })
      // 设置默认分页数据
      this.tableData = table.filter((item, index) => {
        return index < this.paginations.page_size
      })
    }
  },
  created () {
    this.render()
  }
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
