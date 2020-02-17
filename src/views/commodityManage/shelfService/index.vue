<template>
  <div>
    <p class="add">
      <el-button @click="add" style="float:left;margin-bottom:30px;">十 上架</el-button>
      <el-button style="float:right;margin-bottom:30px;" type="primary" plain>进入养老机构主页</el-button>
    </p>
    <el-dialog :visible.sync="dialogVisible" class="my_dialog" width="70%">
      <el-container style="height:100%">
        <el-aside width="50%" height="90%">
          <div>
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model.trim="goods" style="width:60%" @change="getSearchValue"></el-input>
            <el-button type="primary" style="margin-left:20px;" @click="searchGoods">搜索</el-button>
          </div>
          <el-table :data="goodsName" style="width: 100%">
            <el-table-column label="房型">
              <template slot-scope="scope">
                <div @click="getGoodsInfo(scope.$index,scope.row)">{{scope.row.goodsName}}</div>
              </template>
            </el-table-column>
            <el-table-column label="房间编号">
              <template slot-scope="scope">
                <div @click="getGoodsInfo(scope.$index,scope.row)">{{scope.row.goodsName}}</div>
              </template>
            </el-table-column>
          </el-table>
        </el-aside>
        <el-main>
          <el-form ref="form" :model="goodsInfo" label-width="120px">
            <el-form-item label="房型" prop="goodsName">
              <el-input v-model="goodsInfo.goodsName" placeholder="请输入名称" style="width:82%"></el-input>
            </el-form-item>
            <el-form-item label="房间编号" prop="number">
              <el-input v-model="goodsInfo.number" placeholder="请输入数量" style="width:82%"></el-input>
            </el-form-item>
            <el-form-item label="原始价格" prop="oldPrice">
              <el-input v-model="goodsInfo.oldPrice" placeholder="请输入原始价格" style="width:82%"></el-input>
            </el-form-item>
            <el-form-item label="价格范围" prop="priceFrom" style="display:inline-block;width:50%;float:left">
              <el-input v-model="goodsInfo.priceFrom" placeholder="请输入价格"></el-input>
            </el-form-item>
            <el-form-item label="一" prop="priceTo" style="display:inline-block;width:30%;float:left" label-width="30px">
              <el-input v-model="goodsInfo.priceTo" placeholder="请输入价格"></el-input>
            </el-form-item>
            <el-form-item class="confirm" style="padding-top:80px;">
              <el-button type="primary" @click="racking">确定</el-button>
              <el-button @click="dialogVisible = false">取消</el-button>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
    </el-dialog>
    <!-- <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="goodsName" label="房型"> </el-table-column>
      <el-table-column prop="goodsType" label="房间编号"> </el-table-column>
       <el-table-column prop="img" label="房间图片">
        <template slot-scope="scope">
          <img :src="url+item" width="50 " height="50" v-for="item in (scope.row.goodsImages.split(','))" :key="item" />
        </template>
      </el-table-column>
        <el-table-column prop="number" label="原始价"> </el-table-column>
      <el-table-column prop="priceFrom" label="打折价"> </el-table-column>

     
      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" :type="scope.row.state==0?'success':'danger'" @click="changStatus(scope.$index, scope.row)">{{scope.row.state==0?"上架":"下架"}}</el-button>

        </template>
      </el-table-column>
    </el-table> -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column prop="state" label="售卖状态">
            <template slot-scope="scope">
              <div>
                <el-tag>{{scope.row.state}}</el-tag>
              </div>
            </template>

          </el-table-column>

          <el-table-column prop="houseType" label="房型">
             <template slot-scope="scope">
              <div>
                <i class="iconfont  icon-home" style="font-size:22px;"></i>
                <span>{{scope.row.houseType}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="roomNumber" label="房间编号">
          </el-table-column>
          <el-table-column prop="roomImg" label="房间图片">
            <!-- <template slot-scope="scope">
          <img :src="url+'/'+item" width="50 " height="50" v-for="item in (scope.row.goodsImages.split(','))" :key="item" />
        </template> -->
          </el-table-column>
          <el-table-column prop="grade" label="标准等级">
            <template>
              <div>
                <el-button type="text">S1</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作 ">
            <template slot-scope="scope ">
              <el-button size="mini " @click="handleEdit(scope.$index, scope.row) ">编辑</el-button>
              <el-button size="mini " type="danger " @click="handleDelete(scope.$index, scope.row) ">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待售卖" name="second">
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column prop="state" label="售卖状态">
            <template slot-scope="scope">
              <div>
                <el-tag>{{scope.row.state}}</el-tag>
              </div>
            </template>
          </el-table-column>

          <el-table-column prop="houseType" label="房型">
             <template slot-scope="scope">
              <div>
                <i class="iconfont  icon-home" style="font-size:22px;"></i>
                <span>{{scope.row.houseType}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="roomNumber" label="房间编号">
          </el-table-column>
          <el-table-column prop="roomImg" label="房间图片">
            <!-- <template slot-scope="scope">
          <img :src="url+'/'+item" width="50 " height="50" v-for="item in (scope.row.goodsImages.split(','))" :key="item" />
        </template> -->
          </el-table-column>
          <el-table-column prop="grade" label="标准等级">
            <template>
              <div>
                <el-button type="text">S1</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作 ">
            <template slot-scope="scope ">
              <el-button size="mini " @click="handleEdit(scope.$index, scope.row) ">编辑</el-button>
              <el-button size="mini " type="danger " @click="handleDelete(scope.$index, scope.row) ">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已预定" name="third">
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column prop="state" label="售卖状态">
            <template slot-scope="scope">
              <div>
                <el-tag>{{scope.row.state}}</el-tag>
              </div>
            </template>
          </el-table-column>

          <el-table-column prop="houseType" label="房型">
             <template slot-scope="scope">
              <div>
                <i class="iconfont  icon-home" style="font-size:22px;"></i>
                <span>{{scope.row.houseType}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="roomNumber" label="房间编号">
          </el-table-column>
          <el-table-column prop="roomImg" label="房间图片">
            <!-- <template slot-scope="scope">
          <img :src="url+'/'+item" width="50 " height="50" v-for="item in (scope.row.goodsImages.split(','))" :key="item" />
        </template> -->
          </el-table-column>
          <el-table-column prop="grade" label="标准等级">
            <template>
              <div>
                <el-button type="text">S1</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作 ">
            <template slot-scope="scope ">
              <el-button size="mini " @click="handleEdit(scope.$index, scope.row) ">编辑</el-button>
              <el-button size="mini " type="danger " @click="handleDelete(scope.$index, scope.row) ">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已售卖" name="fourth">
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column prop="state" label="售卖状态">
            <template slot-scope="scope">
              <div>
                <el-tag>{{scope.row.state}}</el-tag>
              </div>
            </template>
          </el-table-column>

          <el-table-column prop="houseType" label="房型">
             <template slot-scope="scope">
              <div>
                <i class="iconfont  icon-home" style="font-size:22px;"></i>
                <span>{{scope.row.houseType}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="roomNumber" label="房间编号">
          </el-table-column>
          <el-table-column prop="roomImg" label="房间图片">
            <!-- <template slot-scope="scope">
          <img :src="url+'/'+item" width="50 " height="50" v-for="item in (scope.row.goodsImages.split(','))" :key="item" />
        </template> -->
          </el-table-column>
          <el-table-column prop="grade" label="标准等级">
            <template>
              <div>
                <el-button type="text">S1</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作 ">
            <template slot-scope="scope ">
              <el-button size="mini " @click="handleEdit(scope.$index, scope.row) ">编辑</el-button>
              <el-button size="mini " type="danger " @click="handleDelete(scope.$index, scope.row) ">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已入住" name="fifth">
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column prop="state" label="售卖状态">
            <template slot-scope="scope">
              <div>
                <el-tag>{{scope.row.state}}</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="houseType" label="房型">
            <template slot-scope="scope">
              <div>
                <i class="iconfont  icon-home" style="font-size:22px;"></i>
                <span>{{scope.row.houseType}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="roomNumber" label="房间编号">
          </el-table-column>
          <el-table-column prop="roomImg" label="房间图片">
          </el-table-column>
          <el-table-column prop="grade" label="标准等级">
            <template>
              <div>
                <el-button type="text">S1</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作 ">
            <template slot-scope="scope ">
              <el-button size="mini " @click="handleEdit(scope.$index, scope.row) ">编辑</el-button>
              <el-button size="mini " type="danger " @click="handleDelete(scope.$index, scope.row) ">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!-- <el-table :data="tableData1" style="width: 100%">
      <el-table-column prop="houseType" label="房型"></el-table-column>
      <el-table-column prop="roomNumber" label="房间编号">
      </el-table-column>
      <el-table-column prop="roomImg" label="房间图片">
      </el-table-column>
      <el-table-column prop="grade" label="标准等级">
        <template>
          <div>
            <el-button type="text">S1</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作 ">
        <template slot-scope="scope ">
          <el-button size="mini " @click="handleEdit(scope.$index, scope.row) ">编辑</el-button>
          <el-button size="mini " type="danger " @click="handleDelete(scope.$index, scope.row) ">删除</el-button>
        </template>
      </el-table-column>
    </el-table> -->
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5,10, 15, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
// 出售中的商品
export default {
  data () {
    return {
      activeName: 'first',
      tableData1: [
        {
          state: "待售卖",
          houseType: "两室一厅",
          roomNumber: "D1-809",
          roomImg: "",
          grade: "S1"
        },
        {
          state: "已售卖",
          houseType: "两室一厅",
          roomNumber: "D1-809",
          roomImg: "",
          grade: "S1"
        },
        {
          state: "已预定",
          houseType: "两室一厅",
          roomNumber: "D1-809",
          roomImg: "",
          grade: "S1"
        },
      ],
      url: "http://120.25.214.5:8081/",
      tableData: [
      ],
      dialogVisible: false,
      form: {
        username: "",
        number: "",
        oldPrice: "",
        priceFrom: "",
        priceTo: ""
      },
      fileList: [],
      // 商品其他信息
      goodsName: [],
      goodsInfo: {

      },
      goods: "",
      index: 0,
      // 分页数据
      currentPage: 1,
      total: 0,
      pageNum: 1,
      pageSize: 5,
      // 上下架切换状态
      status: false
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    // -------------------------------根据点击药品名称获取药品其他信息----------------
    getGoodsInfo (index, row) {
      this.goodsInfo = {
        ...row,
        number: '',
        storeid: '',
        priceFrom: '',
        priceTo: '',
        priceOriginal: ""
      }
      console.log('goodsName', this.goodsInfo)

    },
    getData (pageNum, pageSize) {
      this.$instance1({
        method: "get",
        url: "/sgoodsSale/queryGoodsSale",
        params: {
          pageNum: pageNum,
          pageSize: pageSize
        }
      }).then((res) => {
        console.log('res', res)
        this.tableData = res.data.data.list
        this.total = res.data.data.total;
        console.log(this.total)
      }).catch((err) => {
        console.log(err)
      })
    },

    // -------------------------------------------商品搜索-----------------------------
    // 表单重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 获取商品列表名称
    getGoodsList () {
      this.$instance1({
        method: "get",
        url: "/sGoods/queryGoodsUnSale",
      })
        .then(res => {
          this.goodsName = res.data
          window.console.log('未上架', res);
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    // 获取搜索框的值
    getSearchValue (val) {
      window.console.log(val);
      this.goods = val;
      if (!this.goods) {
        this.getGoodsList()
      }
    },
    // 搜索商品列表
    searchGoods () {
      this.$instance1({
        method: "get",
        url: "/sGoods/queryGoodsUnSale",
        params: {
          goodsName: this.goods
        }
      })
        .then(res => {
          window.console.log(res);
          this.goodsName = res.data;
        })
        .catch(err => {
          window.console.log(err);
        });

      // 清空输入框
      // this.goods = "";
    },
    // -----------------------------获取增加表单输入框的值-----------------------------
    // 上架商品
    racking () {
      console.log('form', this.form)
      this.$refs['form'].validate(valid => {
        if (valid) {
          let formData = new FormData();
          formData.append('goodsid', this.goodsInfo.id)
          formData.append('number', this.goodsInfo.number)
          formData.append('state', 1)
          formData.append('priceFrom', this.goodsInfo.priceFrom)
          formData.append('priceTo', this.goodsInfo.priceTo)
          formData.append('priceOriginal', this.goodsInfo.oldPrice)
          formData.append('goodsName', this.goodsInfo.goodsName)

          this.$instance1({
            method: "post",
            url: "/sgoodsSale/onGoodsSale",
            data: formData
          })
            .then(res => {
              window.console.log(res);
              if (res.data.code == 1) {
                this.$message({
                  message: "上架成功！",
                  type: "success"
                })
                this.getData(this.pageNum, this.pageSize)
              }
              // 重置表单
              this.resetForm('form')
            })
            .catch(err => {
              window.console.log(err);
            });
          this.dialogVisible = false;


        } else {
          window.console.log('error submit!!')
          return false
        }
      })

    },
    add () {
      this.dialogVisible = true
      this.getGoodsList();
    },
    // -------------------------------------分页----------------------
    handleSizeChange (val) {
      this.pageSize = val;
      // console.log(this.pageSize)
      // console.log(`每页 ${val} 条`);
      this.getData(this.pageNum, this.pageSize);
    },
    handleCurrentChange (val) {
      this.pageNum = val;
      console.log(this.pageNum)
      // console.log(`当前页: ${val}`);
      this.getData(this.pageNum, this.pageSize)
    },
    // ---------------------------------上架下架进行切换--------------------------
    changStatus (index, row) {
      console.log(row.id)
      this.$instance1({
        method: "put",
        url: "/sgoodsSale/closeGoodsSale",
        params: {
          id: row.id
        }

      }).then((res) => {
        console.log(res)
        if (res.data.code == 1) {
          this.getData(this.pageNum, this.pageSize)
        }
      }).catch((err) => {
        console.log(err)
      })

    }
  },
  created () {
    this.getData(this.pageNum, this.pageSize)
    this.getGoodsList();
  }
}
</script>
<style scoped>
.add {
  /* background: #fff; */
  /* margin-bottom: 10px; */
  overflow: hidden;
}
.Syhover tr,
.Syhover td {
  border-top: 1px #efefef solid;
  width: 100%;
  display: block;
}
.el-dialog__body {
  height: 60% !important;
}
.block {
  margin: 40px;
}
</style>
