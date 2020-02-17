<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部评论" name="first">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="userid" label="用户id"> </el-table-column>
          <el-table-column prop="buyerName" label="用户名"> </el-table-column>
          <el-table-column prop="commentObject" label="商品名称">
          </el-table-column>
          <el-table-column prop="commentContent" label="评论内容">
          </el-table-column>
          <el-table-column prop="commentTime" label="评论时间">
          </el-table-column>
          <el-table-column prop="auditState" label="审核状态">
            <template slot-scope="scope">
              <div @click="changeState(scope.$index, scope.row)">
                <el-button plain size="small" type="primary" v-if="scope.row.auditState == '正在审核'" class="button">正在审核</el-button>
                <el-button size="small" type="warning" plain v-else-if="scope.row.auditState == '未通过'" class="button">未通过</el-button>
                <el-button size="small" type="success" plain v-else-if="scope.row.auditState == '已通过'" class="button">已通过</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block" style="margin:40px;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total" v-if="total > 0">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="正在审核" name="fourth">
        <el-table :data="checkData" style="width: 100%">
          <el-table-column prop="userid" label="用户id"> </el-table-column>
          <el-table-column prop="buyerName" label="用户名"> </el-table-column>
          <el-table-column prop="commentObject" label="商品名称">
          </el-table-column>
          <el-table-column prop="commentContent" label="评论内容">
          </el-table-column>
          <el-table-column prop="commentTime" label="评论时间">
          </el-table-column>
          <el-table-column prop="auditState" label="审核状态">
            <el-button size="small" type="primary" plain class="button" disabled>正在审核</el-button>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block" style="margin:40px;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="checkDataTotal" v-if="checkDataTotal > 0">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="未通过" name="fifth">
        <el-table :data="outData" style="width: 100%">
          <el-table-column prop="userid" label="用户id"> </el-table-column>
          <el-table-column prop="buyerName" label="用户名"> </el-table-column>
          <el-table-column prop="commentObject" label="商品名称">
          </el-table-column>
          <el-table-column prop="commentContent" label="评论内容">
          </el-table-column>
          <el-table-column prop="commentTime" label="评论时间">
          </el-table-column>
          <el-table-column prop="auditState" label="审核状态">
            <el-button size="small" type="warning" plain class="button" disabled>未通过</el-button>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block" style="margin:40px;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="outDataTotal" v-if="outDataTotal > 0">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已通过" name="sixth">
        <el-table :data="passData" style="width: 100%">
          <el-table-column prop="userid" label="用户id"> </el-table-column>
          <el-table-column prop="buyerName" label="用户名"> </el-table-column>
          <el-table-column prop="commentObject" label="商品名称">
          </el-table-column>
          <el-table-column prop="commentContent" label="评论内容">
          </el-table-column>
          <el-table-column prop="commentTime" label="评论时间">
          </el-table-column>
          <el-table-column prop="auditState" label="审核状态">
            <el-button size="small" type="success" plain class="button" disabled>已通过</el-button>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block" style="margin:40px;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 15, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="passDataTotal" v-if="passDataTotal > 0">
          </el-pagination>
        </div>
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
          userid: "o0EDM4hohUC7UZojEmnECW5CLXoc",
          commentContent: "htrhtyjuqwedw4",
          commentTime: "2019-12-05 20:32:58",
          commentObject: 22,
          auditState: "已通过",
          buyerName: "一年后的西瓜"
        },
        {
          userid: "o0EDM4hohUC7UZojEmnECW5CLXoc",
          commentContent: "htrhtyjuqwedw4",
          commentTime: "2019-12-05 20:32:58",
          commentObject: 22,
          auditState: "已通过",
          buyerName: "一年后的西瓜"
        },
        {
          userid: "o0EDM4hohUC7UZojEmnECW5CLXoc",
          commentContent: "htrhtyjuqwedw4",
          commentTime: "2019-12-05 20:32:58",
          commentObject: 22,
          auditState: "已通过",
          buyerName: "一年后的西瓜"
        },
        {
          userid: "o0EDM4hohUC7UZojEmnECW5CLXoc",
          commentContent: "htrhtyjuqwedw4",
          commentTime: "2019-12-05 20:32:58",
          commentObject: 22,
          auditState: "已通过",
          buyerName: "一年后的西瓜"
        },
        {
          userid: "o0EDM4hohUC7UZojEmnECW5CLXoc",
          commentContent: "htrhtyjuqwedw4",
          commentTime: "2019-12-05 20:32:58",
          commentObject: 22,
          auditState: "已通过",
          buyerName: "一年后的西瓜"
        }
      ],
      // 未通过的数据
      outData: [],
      // 已通过的数据
      passData: [],
      // 正在审核数据
      checkData: [],
      // 分页数据
      currentPage: 1,
      total: 0,
      pageNum: 1,
      pageSize: 5,
      // 正在审核、未通过、已通过total
      outDataTotal: 0,
      passDataTotal: 0,
      checkDataTotal: 0
    }
  },
  methods: {
    // --------------------------------未通过已通过tabs切换-------------------------------------
    handleClick (tab, event) {
      if (tab.label == '未通过') {
        this.getOutData('未通过', this.pageNum, this.pageSize)
        console.log(this.outData)
      } else if (tab.label == '已通过') {
        this.getPassData('已通过', this.pageNum, this.pageSize)
        console.log(this.passData)
      } else if (tab.label == '正在审核') {
        this.getCheckData('正在审核', this.pageNum, this.pageSize)
        console.log(this.checkData)
      }
    },
    // -----------------------------------正在审核、未通过、已通过获取数据-------------------------
    getCheckData (state, pageNum, pageSize) {
      this.$instance1({
        method: 'get',
        url: '/docomment/queryDoComment',
        params: {
          auditState: state,
          pageNum: pageNum,
          pageSize: pageSize
        }
      }).then(res => {
        this.checkData = res.data.list
        this.checkDataTotal = res.data.total
      })
    },
    getOutData (state, pageNum, pageSize) {
      this.$instance1({
        method: 'get',
        url: '/docomment/queryDoComment',
        params: {
          auditState: state,
          pageNum: pageNum,
          pageSize: pageSize
        }
      }).then(res => {
        this.outData = res.data.list
        this.outDataTotal = res.data.total
      })
    },
    getPassData (state, pageNum, pageSize) {
      this.$instance1({
        method: 'get',
        url: '/docomment/queryDoComment',
        params: {
          auditState: state,
          pageNum: pageNum,
          pageSize: pageSize
        }
      }).then(res => {
        console.log(res)
        this.passData = res.data.list
        this.passDataTotal = res.data.total
      })
    },
    // ---------------------------------获取数据-------------------------------------------
    getDataList (pageNum, pageSize) {
      this.$instance1({
        method: 'get',
        url: '/docomment/queryDoComment',
        params: {
          pageNum: pageNum,
          pageSize: pageSize
        }
      })
        .then(res => {
          console.log(res)

          this.tableData = res.data.list
          // console.log(res.data.list)
          this.total = res.data.total
          // console.log(this.tableData)
        })
        .catch(err => {
          console.log(err)
        })

      // return this.tableData
    },
    // ------------------------------修改状态------------------------------------------
    changeState (index, row) {
      this.getDataList(this.pageNum, this.pageSize)
      console.log(index, row)
      if (row.auditState == '正在审核') {
        this.$instance1({
          method: 'put',
          url: '/docomment/modifyDoComment',
          params: {
            ...row,
            auditState: '未通过'
          }
        })
          .then(res => {
            console.log(res)
            if (res.data.code == 1) {
              this.getDataList(this.pageNum, this.pageSize)
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else if (row.auditState == '未通过') {
        console.log(this.state)
        this.$instance1({
          method: 'put',
          url: '/docomment/modifyDoComment',
          params: {
            ...row,
            auditState: '已通过'
          }
        })
          .then(res => {
            console.log(res)
            if (res.data.code == 1) {
              this.getDataList(this.pageNum, this.pageSize)
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else if (row.auditState == '已通过') {
        console.log(this.state)
        this.$instance1({
          method: 'put',
          url: '/docomment/modifyDoComment',
          params: {
            ...row,
            auditState: '正在审核'
          }
        })
          .then(res => {
            console.log(res)
            if (res.data.code == 1) {
              this.getDataList(this.pageNum, this.pageSize)
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },

    // -----------------------------------删除评论----------------------------
    handleDelete (index, row) {
      console.log(index, row)

      this.$instance2({
        method: 'delete',
        url: '/docomment/removeDoComment/',
        params: {
          id: row.userid
        }
      })
        .then(res => {
          console.log(res)
          if (res.data.code == 1) {
            this.getDataList(this.pageNum, this.pageSize)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // -------------------------------------分页----------------------
    handleSizeChange (val) {
      this.pageSize = val
      this.getDataList(this.pageNum, this.pageSize)
    },
    handleCurrentChange (val) {
      this.pageNum = val
      this.getDataList(this.pageNum, this.pageSize)
    }
  },
  created () {
    this.getDataList(this.pageNum, this.pageSize)
  }
}
</script>
<style scoped>
.button {
  width: 80px;
}
</style>
