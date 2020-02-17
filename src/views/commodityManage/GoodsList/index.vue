<template>
  <div>
    <!-- 添加商品的弹出框 -->
    <el-dialog :visible.sync="centerDialogVisible1" width="50%" center key="form1">
      <el-form label-width="80px" :model="formLabelAlign" ref="form">
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="formLabelAlign.name" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="商品类型" prop="type">
          <el-select v-model="formLabelAlign.type" placeholder="请选择">
            <el-option label="特价" value="0"></el-option>
            <el-option label="今日推荐" value="1"></el-option>
            <el-option label="热卖" value="2"></el-option>
            <el-option label="最新" value="3"></el-option>
            <el-option label="猜你喜欢" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品参数" prop="parameter">
          <el-input v-model="formLabelAlign.parameter" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="图片上传">
          <el-upload ref="upload1" action="http://120.25.214.5:8081/sGoods/upload" list-type="picture-card" :on-preview="handlePictureCardPreview" :before-upload="beforeUpload" :on-remove="handleRemove" multiple>
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
      <el-form label-width="80px" :model="formLabelAlign2" ref="form1">
        <el-form-item label="商品名称">
          <el-input v-model="formLabelAlign2.goodsName" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="商品类型">
          <el-select v-model="formLabelAlign2.goodsType" placeholder="请选择">
            <el-option label="特价" value="0"></el-option>
            <el-option label="今日推荐" value="1"></el-option>
            <el-option label="热卖" value="2"></el-option>
            <el-option label="最新" value="3"></el-option>
            <el-option label="猜你喜欢" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品参数">
          <el-input v-model="formLabelAlign2.goodsParameter" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="图片上传">
          <el-upload ref="upload2" action="http://120.25.214.5:8081/sGoods/upload" list-type="picture-card" :on-preview="handlePictureCardPreview" :before-upload="beforeUpload1" :on-remove="handleRemove">
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
    <el-button style="margin-bottom:12px; float: left;" @click="add">十 增加</el-button>
    <div class="search_input">
      <el-input placeholder="请输入房型" v-model="input1" clearable style="width:40%;float:left;margin:0px 10px 20px 0;"> </el-input>
      <el-button type="primary" style="margin-left:50px; float: left;">搜索</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="roomType" label="房型"></el-table-column>
      <el-table-column prop="roomno" label="房间编号">
      </el-table-column>
      <el-table-column prop="roomImages" label="房间图片">
        <!-- <template slot-scope="scope">
          <img :src="url+'/'+item" width="50 " height="50" v-for="item in (scope.row.goodsImages.split(','))" :key="item" />
        </template> -->
      </el-table-column>
      <el-table-column prop="roomLevel" label="标准等级">
        <template slot-scope="scope">
          <div>
            <el-button type="text">{{scope.row.roomLevel}}</el-button>
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
    <!-- <div class="block">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5,10, 15, 20]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div> -->
  </div>
</template>
<script>
export default {
  // --------------------数据data-------------------------
  data () {
    return {
      input1: "",
      input2: "",
      input3: "",
      tableData: [

      ],
      // tableData1: [
      //   {
      //     houseType: "两室一厅",
      //     roomNumber: "D1-809",
      //     roomImg: "",
      //     grade: "S1"
      //   },
      //   {
      //     houseType: "两室一厅",
      //     roomNumber: "D1-809",
      //     roomImg: "",
      //     grade: "S1"
      //   },
      //   {
      //     houseType: "两室一厅",
      //     roomNumber: "D1-809",
      //     roomImg: "",
      //     grade: "S1"
      //   }
      // ],
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
      img1: [],
      url: "http://120.25.214.5:8081",
      // 分页数据
      currentPage: 1,
      total: 0,
      pageNum: 1,
      pageSize: 5,


      data: {
        pageNum: 1,
        pageSize: 5,
      }
    };
  },
  // mounted () {
  //   console.dir(this.$refs.upload1)
  // },
  methods: {
    getRoomList () {
      this.$instance1({
        method: "get",
        url: "/ysRoom/queryRooms",
        params: this.data
      }).then((res) => {
        console.log(res)
        this.tableData = res.data.data.list
        this.total = res.data.data.total
      }).catch((err) => {
        console.log(err)
      })
    },
    add () {
      this.centerDialogVisible1 = true
    },
    // 表单重置
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 获取所有商品列表
    getGoodsList (pageNum, pageSize) {
      this.$instance1({
        method: "get",
        url: "/sGoods/queryGoods",
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
            this.getGoodsList(this.pageNum, this.pageSize)

          } else {
            this.$message.error(data.msg);
          }
        })
        .catch(error => {
          window.console.log(error);
        });
    },

    // ------------------------------增加商品--------------------------------------
    // 提交
    submit () {
      console.log(this.img)
      this.centerDialogVisible1 = false
      console.log(this.formLabelAlign)
      this.$refs['form'].validate(valid => {
        if (valid) {
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
                this.img = [],
                  // 上传成功之后清除图片
                  this.$refs.upload1.clearFiles()
                //   表单重置
                this.resetForm('form')
              }

            })
            .catch(err => {
              window.console.log(err);
            });

          this.centerDialogVisible1 = false


        } else {
          window.console.log('error submit!!')
          return false
        }
      })


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
    beforeUpload1 (file) {
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
            this.img1.push(imgURL);
            window.console.log(this.img1);
            this.getGoodsList(this.pageNum, this.pageSize)

          } else {
            this.$message.error(data.msg);
          }
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    // 点击编辑按钮
    handleEdit (index, row) {
      this.centerDialogVisible2 = true;
      this.formLabelAlign2 = {
        ...row
      }

      console.log(this.formLabelAlign2)
    },
    // 确定编辑
    edit () {
      this.centerDialogVisible2 = false;
      console.log(this.formLabelAlign2)

      if (this.img1.length == 0) {
        this.img1 = null
      } else {
        this.img1 = this.img1.join(",")
      }
      console.log('img', this.img1)
      this.$refs['form1'].validate(valid => {
        if (valid) {
          this.$instance1({
            method: "put",
            url: "/sGoods/modifyGoods",
            params: {
              id: this.formLabelAlign2.id,
              goodsName: this.formLabelAlign2.goodsName,
              goodsType: this.formLabelAlign2.goodsType,
              goodsParameter: this.formLabelAlign2.goodsParameter,
              goodsImages: this.img1
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
                this.img1 = [],
                  // 上传成功之后清除图片
                  this.$refs.upload2.clearFiles()
                //   表单重置
                this.resetForm('form1')
              }
            })
            .catch(err => {
              window.console.log(err);
            });

          this.centerDialogVisible2 = false

        } else {
          window.console.log('error submit!!')
          return false
        }
      })


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
    this.getRoomList()
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
.search_input {
  width: 60%;
  float: left;
  margin-left: 100px;
}
</style>
