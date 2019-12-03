<template>
  <div>
    <p class="add">
      <el-button @click="add">十 增加</el-button>
      <el-button>进入店铺主页</el-button>
    </p>
    <el-dialog :visible.sync="dialogVisible" class="my_dialog" width="70%">
      <el-container style="height:100%">
        <el-aside width="50%" height="90%">
          <div>
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model.trim="goods" style="width:60%" @change="getSearchValue"></el-input>
            <el-button type="primary" style="margin-left:20px;" @click="searchGoods">搜索</el-button>
          </div>
          <table class="Account-table" cellpadding="6" cellspacing="6" width="100%" height="70%" style="display:block;">
            <thead>
              <th>
                <td>商品名称</td>
              </th>
            </thead>
            <tbody height="100%" style="overflow:auto;display:block;" width="100%">
              <tr class="Syhover" style="display:block;width:100%" v-for="(item,index) in goodsName" :key="index" @click="activeClick($event,index)">
                <td>{{item.goodsName}}</td>
              </tr>
            </tbody>
          </table>
          <!-- <el-table :data="goodsName" style="width: 100%">
            <el-table-column prop="goodsName" label="商品名称" @click="activeClick($event)">
            </el-table-column>
          </el-table> -->
        </el-aside>
        <el-main>
          <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="名称">
              <el-input v-model="form.username" placeholder="请输入名称" style="width:82%"></el-input>
            </el-form-item>
            <el-form-item label="数量">
              <el-input v-model="form.number" placeholder="请输入数量" style="width:82%" @change="getNumber"></el-input>
            </el-form-item>
            <el-form-item label="原始价格">
              <el-input v-model="form.oldPrice" placeholder="请输入原始价格" style="width:82%" @change="getPriceOriginal"></el-input>
            </el-form-item>
            <el-form-item label="价格范围">
              <el-input v-model="form.priceFrom" placeholder="请输入价格" style="width:39.5%" @change="getPriceFrom"></el-input>—
              <el-input v-model="form.priceTo" placeholder="请输入价格" style="width:39.5%" @change="getPriceTo"></el-input>
            </el-form-item>
            <el-form-item class="confirm">
              <el-button type="primary" @click="racking">确定</el-button>
              <el-button @click="dialogVisible = false">取消</el-button>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="goodsName" label="商品名称"> </el-table-column>
      <el-table-column prop="number" label="商品数量"> </el-table-column>
      <el-table-column prop="priceFrom" label="商品下限价格"> </el-table-column>
      <el-table-column prop="priceTo" label="商品上限价格"> </el-table-column>
      <el-table-column prop="priceOriginal" label="商品原始价格"> </el-table-column>
      <el-table-column prop="img" label="商品图片">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" />
        </template>
      </el-table-column>
      <!-- <el-table-column prop="priceOriginal" label="上架时间"> </el-table-column> -->
      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleDelete(scope.$index, scope.row)" class="button" type="danger">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5,10, 15, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
// 已上架服务
export default {
  data () {
    return {
      tableData: [
        // {
        //   date: '2016-05-02  8:30',
        //   name: '王小虎',
        //   shopName: '上海市普陀区金沙江路 1518 弄',
        //   price: '98.9',
        //   kitchenInfo: '一厨一卫',
        //   img: require('../../../assets/default_img.png')
        // },
        // {
        //   date: '2016-05-02  8:30',
        //   name: '王小虎',
        //   shopName: '上海市普陀区金沙江路 1518 弄',
        //   price: '98.9',
        //   kitchenInfo: '一厨一卫',
        //   img: require('../../../assets/default_img.png')
        // },
        // {
        //   date: '2016-05-02  8:30',
        //   name: '王小虎',
        //   shopName: '上海市普陀区金沙江路 1518 弄',
        //   price: '98.9',
        //   kitchenInfo: '一厨一卫',
        //   img: require('../../../assets/default_img.png')
        // },
        // {
        //   date: '2016-05-02  8:30',
        //   name: '王小虎',
        //   shopName: '上海市普陀区金沙江路 1518 弄',
        //   price: '98.9',
        //   kitchenInfo: '一厨一卫',
        //   img: require('../../../assets/default_img.png')
        // },
        // {
        //   date: '2016-05-02  8:30',
        //   name: '王小虎',
        //   shopName: '上海市普陀区金沙江路 1518 弄',
        //   price: '98.9',
        //   kitchenInfo: '一厨一卫',
        //   img: require('../../../assets/default_img.png')
        // },
        // {
        //   date: '2016-05-02  8:30',
        //   name: '王小虎',
        //   shopName: '上海市普陀区金沙江路 1518 弄',
        //   price: '98.9',
        //   kitchenInfo: '一厨一卫',
        //   img: require('../../../assets/default_img.png')
        // },
        // {
        //   date: '2016-05-02  8:30',
        //   name: '王小虎',
        //   shopName: '上海市普陀区金沙江路 1518 弄',
        //   price: '98.9',
        //   kitchenInfo: '一厨一卫',
        //   img: require('../../../assets/default_img.png')
        // }
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
      goodsName: [],
      goods: "",
      index: 0,
      // 分页数据
      currentPage: 1,
      total: 0,
      pageNum: 1,
      pageSize: 5
    }
  },
  methods: {
    async handleDelete (index, row) {
      // let { data } = await this.$axios.delete(
      //   `http://localhost:1906/goodsAdmin/${row._id}`
      // )
      // if (data.code === 1) {
      //   this.render()
      //   this.$message({
      //     message: '删除成功!', //消息提示
      //     type: 'warning'
      //   })
      // }
      window.console.log(index, row)
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
        console.log(res)
        this.tableData = res.data.list
        this.total = res.data.total;
        console.log(this.total)
      }).catch((err) => {
        console.log(err)
      })
    },
    // 点哪个哪个的内容就是显示在输入框
    activeClick ($event, index) {
      let target = $event.target.parentNode;
      // console.log(target);

      let active = document.getElementsByClassName("Syhover");
      // console.log(active, "1111111111111");
      let len = active.length;
      for (let i = 0; i < len; i++) {
        active[i].style.background = "";
      }
      let text = target.children[0].innerText;
      target.style.background = "#efefef";

      this.form.username = text;
      console.log(this.form.username)
      // console.log($event, index)

      this.index = index;
      // console.log(this.index)
    },
    // -------------------------------------------商品搜索-----------------------------
    // 获取商品列表名称
    getGoodsList () {
      this.$instance1({
        method: "get",
        url: "/sGoods/queryGoods"
      })
        .then(res => {
          this.goodsName = res.data.list;
          window.console.log(this.goodsName);
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    // 获取搜索框的值
    getSearchValue (val) {
      window.console.log(val);
      this.goods = val;
    },
    // 搜索商品列表
    searchGoods () {
      this.$instance1({
        method: "get",
        url: "/sGoods/queryGoods",
        params: {
          goodsName: this.goods
        }
      })
        .then(res => {
          window.console.log(res);
          this.goodsName = res.data.list;
        })
        .catch(err => {
          window.console.log(err);
        });

      // 清空输入框
      this.goods = "";
    },
    // -----------------------------获取增加表单输入框的值-----------------------------
    // 获取数量
    getNumber (val) {
      this.form.number = val;
      console.log(this.form.number);

    },
    // 获取原始价格
    getPriceOriginal (val) {
      this.form.oldPrice = val;
      console.log(this.form.oldPrice)
    },
    // 获取价格下限
    getPriceFrom (val) {
      this.form.priceFrom = val;
      console.log(this.form.priceFrom)
    },
    // 获取价格上限
    getPriceTo (val) {
      this.form.priceTo = val;
      console.log(this.form.priceTo)
    },
    // 获取商品id
    getGoodsID (index, row) {
      console.log(index, row)

    },
    // 上架商品
    racking () {
      this.dialogVisible = false;
      let id = this.goodsName[this.index].id;
      console.log(id)
      let formData = new FormData();
      formData.append('goodsid', id)
      formData.append('number', this.form.number)
      formData.append('state', 1)
      formData.append('priceFrom', this.form.priceFrom)
      formData.append('priceTo', this.form.priceTo)
      formData.append('priceOriginal', this.form.oldPrice)
      formData.append('goodsName', this.form.username)
      this.$instance1({
        method: "post",
        url: "/sgoodsSale/onGoodsSale",
        data: formData
      }).then((res) => {
        console.log(res)
        if (res.data.code == 1) {
          this.$message({
            message: "上架成功！",
            type: "success"
          })

          // 点击确定之后清空输入框的值
          this.form.username = ""
          this.form.number = ""
          this.form.priceFrom = ""
          this.form.priceTo = ""
          this.form.oldPrice = ""

          // this.getGoodsList();
          this.getData(this.pageNum, this.pageSize)
        }
      }).catch((err) => {
        console.log(err)
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
  background: #fff;
  /* margin-bottom: 10px; */
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
