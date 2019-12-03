<template>
  <div>
    <!-- 添加商品的弹出框 -->
    <el-dialog :visible.sync="centerDialogVisible1" width="50%" center key="form1">
      <el-form label-width="80px" :model="formLabelAlign">
        <el-form-item label="商品名称">
          <el-input v-model="formLabelAlign.name" style="width:70%" @change="getGoodsName"></el-input>
        </el-form-item>
        <el-form-item label="商品类型">
          <el-input v-model="formLabelAlign.type" style="width:70%" @change="getGoodsType"></el-input>
        </el-form-item>
        <el-form-item label="商品参数">
          <el-input v-model="formLabelAlign.parameter" style="width:70%" @change="getGoodsParameter"></el-input>
        </el-form-item>
        <el-form-item label="图片上传">
          <el-upload action="http://120.25.214.5:8081/sGoods/upload" list-type="picture-card" :on-preview="handlePictureCardPreview" :before-upload="beforeUpload" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改商品的弹出框 -->
    <el-dialog :visible.sync="centerDialogVisible2" width="50%" center key="form2">
      <el-form label-width="80px" :model="formLabelAlign">
        <el-form-item label="商品名称">
          <el-input v-model="formLabelAlign2.name" style="width:70%" @change="getGoodsName2"></el-input>
        </el-form-item>
        <el-form-item label="商品类型">
          <el-input v-model="formLabelAlign2.type" style="width:70%" @change="getGoodsType2"></el-input>
        </el-form-item>
        <el-form-item label="商品参数">
          <el-input v-model="formLabelAlign2.parameter" style="width:70%" @change="getGoodsParameter2"></el-input>
        </el-form-item>
        <el-form-item label="图片上传">
          <el-upload action="http://120.25.214.5:8081/sGoods/upload" list-type="picture-card" :on-preview="handlePictureCardPreview" :before-upload="beforeUpload" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="edit">确 定</el-button>
      </span>
    </el-dialog>
    <el-button style="margin-bottom:12px;" @click="centerDialogVisible1 = true">十 增加</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="goodsName" label="商品名称"></el-table-column>
      <el-table-column prop="goodsType" label="商品类型"></el-table-column>
      <el-table-column prop="goodsImages" label="商品图片">
        <template slot-scope="scope">
          <img :src="url+'/'+scope.row.goodsImages" width="50 " height="50 " class="head_pic " />
        </template>
        <!-- <template slot-scope="scope">
          <img :src="url+'/'+item" width="50 " height="50 " class="head_pic " v-for="item in (scope.row.goodsImages.split(','))" :key="item" />
        </template> -->
      </el-table-column>
      <el-table-column prop="goodsParameter" label="商品参数 "></el-table-column>
      <el-table-column label="操作 ">
        <template slot-scope="scope ">
          <el-button size="mini " @click="handleEdit(scope.$index, scope.row) ">编辑</el-button>
          <el-button size="mini " type="danger " @click="handleDelete(scope.$index, scope.row) ">删除</el-button>
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
export default {
  // --------------------数据data-------------------------
  data () {
    return {
      tableData: [],
      centerDialogVisible1: false,
      centerDialogVisible2: false,
      formLabelAlign: {
        name: "",
        type: "",
        parameter: ""
      },
      formLabelAlign2: {
        name: "",
        type: "",
        parameter: ""
      },
      dialogImageUrl: "",
      dialogVisible: false,
      img: [],
      goodsID: "",   //编辑商品时需要用到
      url: "http://120.25.214.5:8081",
      // 分页数据
      currentPage: 1,
      total: 0,
      pageNum: 1,
      pageSize: 5
    };
  },
  methods: {
    // 获取所有商品列表
    getGoodsList (pageNum, pageSize) {
      // console.log(pageNum)
      this.$instance1({
        method: "get",
        url: "/sGoodsInventory/querySGoodsInventorys",
        params: {
          pageNum: pageNum,
          pageSize: pageSize
        }
      })
        .then(res => {
          window.console.log(res)
          this.tableData = res.data.list;
          this.total = res.data.total;
          // console.log(this.total)
        })
        .catch(err => {
          window.console.log(err);
        });
    },
    // -------------------------------图片上传-----------------------------
    // 上传图片中的删除图片
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    // 上传图片中的点击查看大图
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    beforeUpload (file) {
      let fd = new FormData(); //通过form数据格式来传
      fd.append("file", file); //传文件
      this.$instance1({
        method: "post",
        url: "/sGoods/upload",
        data: fd
      })
        .then(res => {
          window.console.log(res);
          let status = res.status;
          if (status == 200) {
            this.$message({
              message: "上传成功",
              type: "success"
            });

            let imgURL = res.data.url;
            this.img.push(imgURL);
            window.console.log(this.img);

          } else {
            this.$message.error(data.msg);
          }
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    // ------------------------------增加商品--------------------------------------
    // 拿到商品名称
    getGoodsName (val) {
      window.console.log(val);
      this.formLabelAlign.name = val;
    },
    // 获取商品类型
    getGoodsType (val) {
      window.console.log(val);
      this.formLabelAlign.type = val;
    },
    // 获取商品参数
    getGoodsParameter (val) {
      window.console.log(val);
      this.formLabelAlign.parameter = val;
    },
    // 提交
    submit () {
      let formData = new FormData();
      formData.append("goodsName", this.formLabelAlign.name);
      formData.append("goodsType", this.formLabelAlign.type);
      formData.append("goodsParameter", this.formLabelAlign.parameter);
      formData.append("goodsImages", this.img);

      this.$instance1({
        method: "post",
        url: "/sGoods/addGoods",
        data: formData
      })
        .then(res => {
          window.console.log(res);
          if (res.data.code == 1) {
            this.getGoodsList(this.pageNum, this.pageSize);
            this.$message({
              message: "添加成功",
              type: "success"
            });
          }
        })
        .catch(err => {
          window.console.log(err);
        });

      this.centerDialogVisible1 = false;
      this.formLabelAlign.name = "";
      this.formLabelAlign.type = "";
      this.formLabelAlign.parameter = "";
    },
    // ------------------------------------------删除商品-----------------------------
    // 删除
    handleDelete (index, row) {
      console.log(1111111);
      console.log(index, row.id);
      this.$instance1({
        method: "delete",
        url: "/sGoods/removeGoods/" + row.id,
      })
        .then(res => {
          console.log(res);
          if (res.data.code == 1) {
            this.getGoodsList(this.pageNum, this.pageSize);
            this.$message({
              message: "删除成功！",
              type: "warning"
            })

          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // -----------------------------------修改商品--------------------------------------
    // 点击编辑按钮
    handleEdit (index, row) {
      this.centerDialogVisible2 = true;
      this.formLabelAlign2.name = row.goodsName;
      this.formLabelAlign2.type = row.goodsType;
      this.formLabelAlign2.parameter = row.goodsParameter;

      this.goodsID = row.id;
      console.log(this.goodsID)
    },
    // 拿到商品名称
    getGoodsName2 (val) {
      window.console.log(val);
      this.formLabelAlign2.name = val;
    },
    // 获取商品类型
    getGoodsType2 (val) {
      window.console.log(val);
      this.formLabelAlign2.type = val;
    },
    // 获取商品参数
    getGoodsParameter2 (val) {
      window.console.log(val);
      this.formLabelAlign2.parameter = val;
    },
    // 确定编辑
    edit () {
      this.centerDialogVisible2 = false;
      console.log(this.goodsID)

      this.$instance1({
        method: "put",
        url: "/sGoods/modifyGoods",
        params: {
          id: this.goodsID,
          goodsName: this.formLabelAlign2.name,
          goodsType: this.formLabelAlign2.type,
          goodsParameter: this.formLabelAlign2.parameter
        }
      })
        .then(res => {
          window.console.log(res);
          if (res.data.code == 1) {
            this.getGoodsList(this.pageNum, this.pageSize);
            this.$message({
              message: "修改成功",
              type: "success"
            });
          }
        })
        .catch(err => {
          window.console.log(err);
        });

      this.centerDialogVisible1 = false;
      this.formLabelAlign.name = "";
      this.formLabelAlign.type = "";
      this.formLabelAlign.parameter = "";


    },
    // -------------------------------------分页----------------------
    handleSizeChange (val) {
      this.pageSize = val;
      // console.log(this.pageSize)
      // console.log(`每页 ${val} 条`);
      this.getGoodsList(this.pageNum, this.pageSize);
    },
    handleCurrentChange (val) {
      this.pageNum = val;
      console.log(this.pageNum)
      // console.log(`当前页: ${val}`);
      this.getGoodsList(this.pageNum, this.pageSize)
    }
  },
  created () {
    this.getGoodsList(this.pageNum, this.pageSize);
    console.log(this.pageNum, this.pageSize)
  }
};
</script>
<style scoped>
.el-upload--picture-card,
.el-upload-list__item-actions {
  width: 20% !important;
  height: 20% !important;
}
.block {
  margin: 40px;
}
</style>
