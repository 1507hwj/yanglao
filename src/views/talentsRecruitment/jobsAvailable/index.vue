<template>
  <div id="adv" class="app-container">
    <el-row style="padding:20px">
      <el-button type="primary" plain icon='el-icon-plus' @click="dialogVisible = true">发布职位</el-button>
      <el-dialog title="发布职位" :visible.sync="dialogVisible" width="600px" :before-close="handleClose">
        <!-- <span>这是一段信息</span> -->
        <el-form ref="form" :model="form" label-width="130px" label-position="left">
          <el-form-item label="职位名称" prop="positionName">
            <el-input style="width:200px" v-model="form.positionName"></el-input>
          </el-form-item>
          <el-form-item label="用人部门" prop="accountid">
            <el-select v-model="form.accountid" placeholder="请选择">
              <el-option label=1 value=1></el-option>
              <el-option label=2 value=2></el-option>
              <el-option label=3 value=3></el-option>
              <el-option label=4 value=4></el-option>
              <el-option label=5 value=5></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="哪个职位" prop="organizationid">
            <el-select v-model="form.organizationid" placeholder="请选择">
              <el-option label=1 value=1></el-option>
              <el-option label=2 value=2></el-option>
              <el-option label=3 value=3></el-option>
              <el-option label=4 value=4></el-option>
              <el-option label=5 value=5></el-option>
            </el-select>
          </el-form-item>
          <!-- <el-form-item label="发布时间" prop="time">
            <el-date-picker v-model="form.time" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item> -->
          <el-form-item label="需求人数" prop="openpositionNumber">
            <el-input-number v-model="form.openpositionNumber" :min="1" :max="20" label="描述文字"></el-input-number>
          </el-form-item>
          <el-form-item label="职位有效期" prop="positionValidity">
            <el-select v-model="form.positionValidity" placeholder="请选择">
              <el-option label="一个月" value="一个月"></el-option>
              <el-option label="两个月" value="两个月"></el-option>
              <el-option label="三个月" value="三个月"></el-option>
              <el-option label="半年" value="半年"></el-option>
              <el-option label="一年" value="一年"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="最低薪资" prop="salaryTo">
            <el-select v-model="form.salaryTo" placeholder="请选择">
              <el-option label=3000 value=3000></el-option>
              <el-option label=6000 value=6000></el-option>
              <el-option label=8000 value=8000></el-option>
              <el-option label=10000 value=10000></el-option>
              <el-option label=12000 value=12000></el-option>
              <el-option label=15000 value=15000></el-option>
              <el-option label=25000 value=25000></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="最高薪资" prop="salaryFrom">
            <el-select v-model="form.salaryFrom" placeholder="请选择">
              <el-option label=3000 value=3000></el-option>
              <el-option label=6000 value=6000></el-option>
              <el-option label=8000 value=8000></el-option>
              <el-option label=10000 value=10000></el-option>
              <el-option label=12000 value=12000></el-option>
              <el-option label=15000 value=15000></el-option>
              <el-option label=25000 value=25000></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="工作地点" prop="workAddress">
            <el-select v-model="form.workAddress" placeholder="请选择">
              <el-option label="广州" value="广州"></el-option>
              <el-option label="深圳" value="深圳"></el-option>
              <el-option label="北京" value="北京"></el-option>
              <el-option label="上海" value="上海"></el-option>
              <el-option label="武汉" value="武汉"></el-option>
              <el-option label="长沙" value="长沙"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="addItem('form')">提交</el-button>
        </span>
      </el-dialog>
    </el-row>
    <!-- 模拟数据 -->
    <!-- <el-table :data="list" border fit v-loading="listLoading" ref="filterTable">
      <el-table-column prop="postName" label="职位名称" width="260" align="center" column-key="postName" :filters="[{text: '营销专员', value: '营销专员'}, {text: '技术助理', value: '技术助理'}, 
      {text: '财务会计', value: '财务会计'}, {text: '保洁员', value: '保洁员'}]" :filter-method="filterHandler"></el-table-column>
      <el-table-column prop="issuer" label="发布人" align="center"></el-table-column>
      <el-table-column prop="department" label="用人部门" align="center"></el-table-column>
      <el-table-column prop="time" label="发布时间" align="center" sortable></el-table-column>
      <el-table-column prop="needNum" label="需求人数" align="center"></el-table-column>
      <el-table-column prop="compensation" label="薪资" align="center"></el-table-column>
      <el-table-column prop="address" label="工作地点" align="center" :filters="[{ text: '广州', value: '广州' }, { text: '深圳', value: '深圳' }]" :filter-method="filterTag" filter-placement="bottom-end"></el-table-column>

      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row)">编辑</el-button>
          <el-dialog title="编辑" :visible.sync="dialog2Visible" width="600px" :before-close="handle2Close" :modal-append-to-body="false">
            <el-form ref="form2" :model="form2" label-width="80px" label-position="left">
              <el-form-item label="职位名称" prop="postName">
                <el-input v-model="form2.postName" style="width:215px"></el-input>
              </el-form-item>
              <el-form-item label="发布人" prop="issuer">
                <el-radio-group v-model="form2.issuer">
                  <el-radio label="王经理"></el-radio>
                  <el-radio label="黄彩"></el-radio>
                  <el-radio label="黄主管"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="用人部门" prop="department">
                <el-select v-model="form2.department" placeholder="请选择">
                  <el-option label="行政部" value="行政部"></el-option>
                  <el-option label="技术部" value="技术部"></el-option>
                  <el-option label="生产部" value="生产部"></el-option>
                  <el-option label="营销部" value="营销部"></el-option>
                  <el-option label="市场部" value="市场部"></el-option>
                  <el-option label="研发部" value="研发部"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="发布时间" prop="time">
                <el-date-picker v-model="form2.time" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="需求人数" prop="needNum">
                <el-input-number v-model="form2.needNum" :min="1" :max="20" label="描述文字"></el-input-number>
              </el-form-item>
              <el-form-item label="薪资" prop="compensation">
                <el-select v-model="form2.compensation" placeholder="请选择">
                  <el-option label="3000~5000/月" value="3000~5000/月"></el-option>
                  <el-option label="5000~7000/月" value="5000~7000/月"></el-option>
                  <el-option label="7000~9000/月" value="7000~9000/月"></el-option>
                  <el-option label="9000~10000/月" value="9000~10000/月"></el-option>
                  <el-option label="10000~12000/月" value="10000~12000/月"></el-option>
                  <el-option label="12000~14000/月" value="12000~14000/月"></el-option>
                  <el-option label="14000~16000/月" value="14000~16000/月"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="工作地点" prop="address">
                <el-select v-model="form2.address" placeholder="请选择">
                  <el-option label="广州" value="广州"></el-option>
                  <el-option label="深圳" value="深圳"></el-option>
                  <el-option label="北京" value="北京"></el-option>
                  <el-option label="上海" value="上海"></el-option>
                  <el-option label="武汉" value="武汉"></el-option>
                  <el-option label="长沙" value="长沙"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div>
              <span slot="footer" class="dialog-footer" style="margin-right:30px">
                <el-button @click="isCancel()">取消</el-button>
              </span>
              <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="on2Submit()">确定</el-button>
              </span>
            </div>
          </el-dialog>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" style="margin-left: 10px">删除</el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <!-- 接口数据 -->
    <el-table :data="list" border fit >
      <el-table-column prop="id" label="编号" align="center"></el-table-column>
      <el-table-column prop="positionid" label="职位名称" align="center"></el-table-column>
      <el-table-column prop="positionIndustry" label="所属行业" align="center"></el-table-column>
      <el-table-column prop="accountid" label="发布人" align="center"></el-table-column>
      <el-table-column prop="openpositionTime" label="发布时间" align="center"></el-table-column>
      <el-table-column prop="openpositionNumber" label="职位开放数目" align="center"></el-table-column>
      <el-table-column prop="positionValidity" label="职位有效期" align="center"></el-table-column>
      <el-table-column prop="salary" label="职位薪资" align="center">
        <el-table-column prop="salaryFrom" label="薪资最小值" align="center"></el-table-column>
        <el-table-column prop="salaryTo" label="薪资最大值" align="center"></el-table-column>
      </el-table-column>
      <el-table-column prop="workAddress" label="工作地点" align="center"></el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" style="margin-left: 10px">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" /> -->
  </div>
</template>

<script>
let tableData = [
  {
    id: '1',
    postName: '营销专员',
    issuer: '黄彩',
    time: '2019-04-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '2',
    postName: '技术助理',
    issuer: '黄彩',
    time: '2019-05-11',
    department: '生产部',
    needNum: 1,
    compensation: '11000~13000/月',
    address: '广州'
  }, {
    id: '3',
    postName: '财务会计',
    issuer: '黄彩',
    time: '2019-06-11',
    department: '营销部',
    needNum: 3,
    compensation: '10000~12000/月',
    address: '深圳'
  },
  {
    id: '4',
    postName: '财务会计',
    issuer: '黄彩',
    time: '2019-07-11',
    department: '营销部',
    needNum: 3,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '5',
    postName: '保洁员',
    issuer: '黄彩',
    time: '2019-08-11',
    department: '行政部',
    needNum: 4,
    compensation: '3000~3500/月',
    address: '深圳'
  }, {
    id: '6',
    postName: '营销专员2',
    issuer: '黄彩',
    time: '2019-09-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '7',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '8',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '9',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '10',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '11',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '12',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '13',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '14',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '15',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '16',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '17',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '18',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '19',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '20',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }, {
    id: '21',
    postName: '营销专员3',
    issuer: '黄彩',
    time: '2019-11-11',
    department: '营销部',
    needNum: 2,
    compensation: '10000~12000/月',
    address: '广州'
  }]
import { deepClone } from '@/utils'
// import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  data () {
    return {
      total: 0,
      list: null,
      listLoading: true,
      dialogVisible: false,
      dialog2Visible: false,
      keyword: '',
      listQuery: {
        page: 1,
        limit: 3,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      form: {
        accountid: null,
        organizationid: null,
        positionid: null,
        openpositionNumber: null,
        positionValidity: '',
        workAddress: '',
        salaryFrom:null,
        salaryTo:null,
        positionName:''
      },
      form2: {
        id: '',
        postName: '',
        issuer: '',
        time: '',
        department: '',
        needNum: 1,
        compensation: '',
        address: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogImageUrl: '',

    }

  },
  components: {
    // Pagination
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
    //   this.listLoading = true
      // 模拟请求事件
      //   this.list = tableData
      //   this.total = tableData.length
      //   window.console.log('list', tableData,this.total);
      //   setTimeout(() => {
      //     this.listLoading = false
      //   }, .5 * 1000)
      //   接口数据
      let { data } = await this.$getQueryOpenPositions({
        params: { status: 0 }
      });
      this.list = data.list
    //   this.listLoading = false
      window.console.log('list', data.list);
    },
    // 表单重置
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    // 删除
    async handleDelete (index, row) {
      this.$confirm("是否确定要删除" + row.postName + ", 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        this.list.splice(index, 1)
        this.getList()
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    // 增加
    addItem (formName) {
      window.console.log('this.form', this.form.positionName, this.form);
      this.$refs[formName].validate((valid) => {
        if (valid) {

          //时间格式转换
          //   let d = new Date(this.form.time);
          //   let timeNow = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        //   let formtList = {
        //     postName: this.form.postName,
        //     issuer: this.form.issuer,
        //     // time: timeNow,
        //     department: this.form.department,
        //     needNum: this.form.needNum,
        //     compensation: this.form.compensation,
        //     address: this.form.address,
        //   };
          // 表单发送网络请求
          let fd = new FormData();
          window.console.log('fd',fd);
          
          fd.append('accountid', this.form.accountid); //账号组织表ID
          fd.append('organizationid', this.form.organizationid);//账号组织表ID
          fd.append('positionid', this.form.positionid);  //发布的哪个职位
          fd.append('openpositionNumber', this.form.openpositionNumber); //开放职位的数目
          fd.append('positionValidity', this.form.positionValidity);  //职位有效期
          fd.append('workAddress', this.form.workAddress);  //工作地址
          fd.append('salaryTo', this.form.salaryTo);   //薪资下限
          fd.append('salaryFrom', this.form.salaryFrom);   //薪资上限
          fd.append('positionName ', this.form.salaryFrom);   //职位名称

          this.$axios.post('http://120.25.214.5:8081/openposition/recordOpenPosition', fd, {
          })
          .then(res => {
            window.console.log('222',res.data)
            if (res.data.code == 0) {
              this.$message({
                type: "warning",
                message: "发布失败"
              });
              return;
            }
            if (res.data.code == 1) {
              this.$message({
                type: "success",
                message: "发布成功!"
              });
              this.getList();
            }
          })
          .catch(err=>{
          window.console.log('400',err);
        });
        //   this.listLoading = true
          //   表单重置
          this.resetForm(formName)
          this.dialogVisible = false
          //   this.getList()
        } else {
          window.console.log('error submit!!');
          return false;
        }
      });
      this.dialogVisible = false
      window.console.log('111');
    },
    handleClose (done) {
      done();
    },
    handle2Close (done) {
      done();
    },
    // 编辑
    edit (row) {
      this.dialog2Visible = true;
      this.form2 = deepClone(row)
      window.console.log('form2', this.form2);

    },
    // 编辑确定弹框推送
    on2Submit () {
      for (let index = 0; index < this.list.length; index++) {
        if (this.list[index].id === this.form2.id) {
          window.console.log(this.list[index].id);
          this.listLoading = true
          this.list.splice(index, 1, Object.assign({}, this.form2))
          this.dialogVisible = false
          // 模拟请求事件
          setTimeout(() => {
            this.listLoading = false
            this.$message({
              message: '编辑成功',
              type: 'success'
            });
          }, .5 * 1000)
          break
        }
      }
      this.dialog2Visible = false
    },
    isCancel () {
      this.dialog2Visible = false;
    },
    filterTag (value, row) {
      return row.address === value;
    },
    filterHandler (value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
}
</script>
<style>
#adv {
  /* height: 100%; */
  padding: 20px;
}
.el-container {
  height: 100%;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header {
  text-align: center;
  height: 150px;
  line-height: 150px;
  padding: 0 !important;
  /* background: #1d94e7; */
}
.el-header h1 {
  width: 250px;
  height: 100%;
  background: #1d94e7;
  color: #fff;
}
.el-header span {
  color: #fff;
}
.el-table th > .cell {
  font-weight: 700;
  font-size: 16px;
  color: rgba(0, 17, 34, 0.993);
}
.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.mb-3 {
  height: 60px;
  text-align: left;
  line-height: 60px;
}
.form-control {
  width: 300px;
  height: 35px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-row,
.el-table td .el-form-item__content {
  text-align: left;
}
.el-dialog__footer {
  text-align: center !important;
}
/* .el-dialog{
    width: 50% !important;
} */
</style>

