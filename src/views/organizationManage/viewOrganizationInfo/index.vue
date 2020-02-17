<template>
  <div>
    <div class="form_top">
      <div class="fl">
        <i></i>
        <span>机构信息</span>
      </div>
      <div class="fr">
        <span>进入养老机构前台</span>
        <i></i>
        <el-button v-if="!flag" type="primary" size="small" @click="edit">编辑</el-button>
        <el-button v-else type="primary" size="small" @click="editSave">保存</el-button>
      </div>
    </div>
    <div style="width:100%;background:#fff;padding:20px 50px;">
      <el-form ref="form" :model="form" label-width="80px" class="form">
        <el-form-item label="机构名称">
          <p v-if="!flag">{{form.organizationName}}</p>
          <el-input v-else v-model="form.organizationName" style="width:30%;border:0;" ref="text">

          </el-input>
        </el-form-item>
        <el-form-item label="主图">
          <img src="../../../assets/organization/img1.png" alt="" style="margin-right:20px;">
          <img src="../../../assets/organization/img1.png" alt="">
        </el-form-item>
        <el-form-item label="详情">
          <p v-if="!flag">{{form.detail}}</p>
          <el-input v-else type="textarea" v-model="form.detail" style="width:70%;min-height:150px;"></el-input>
        </el-form-item>
        <el-form-item label="开业时间">
          <p v-if="!flag">{{form.openingTime}}</p>
          <el-input v-else v-model="form.openingTime" style="width:30%"></el-input>
        </el-form-item>
        <el-form-item label="星级">
          <el-row>
            <el-col :span="8">
              <!-- <span class="star">5星</span> -->
              <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}" style="margin-top:10px;">
              </el-rate>
            </el-col>
            <el-col :span="8">
              <span>评分</span>
              <span class="star">5分</span>
            </el-col>
            <el-col :span="8">
              <span>评论</span>
              <span class="star">110条</span>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="地址">
          <p v-if="!flag">{{form.address}}</p>
          <el-input v-else v-model="form.address" style="width:30%"></el-input>
        </el-form-item>
        <el-form-item label="订房必读">
          <p v-if="!flag">{{form.setBooks}}</p>
          <el-input v-else type="textarea" v-model="form.setBooks" style="width:70%"></el-input>
        </el-form-item>
        <el-form-item label="房型">
          <el-table :data="form.tableData" border style="width: 70%">
            <el-table-column prop="date" width="140px">
              <template slot-scope="scope">
                <div>
                  <p v-for="(item,index) in scope.row.date" :key="index" style="text-align:center;">{{item}}</p>
                </div>
              </template>
            </el-table-column>
            <el-table-column>
              <img src="../../../assets/organization/img1.png" alt="" v-for="(item,index) in 4" :key="index" style="width:78px;height:78px;margin-right:20px;">
            </el-table-column>
            <el-table-column width="100px">
              <template slot-scope="scope">
                <el-button type="text" style="text-align:center;">下架</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>
<script>
export default {
  data () {
    return {
      value: 4.8,
      form: {
        organizationName: '广州百悦百泰颐养中心',
        detail: `百悦百泰城市颐养中心，是由广东祥利集团投资，祥利百悦养老事业股份有限公司主持承建，以生机养老、护养结合为理念的新型养老照护机构。百悦百泰城市颐养中心隶属于广东百悦百泰养老投资有限公司，是由广东祥利集团投资，祥利百悦养老事业股份有限公司主持承建，以生机养老、  医养结合为理念的新型养老照护机构。本中心为长者提供全日制养老护理、康复理疗、健康膳食、日间照护、文娱活动、长者学堂等综合性服务。 此外，也为周边小区的长者提供居家上门的养老照护服务。`,
        openingTime: '2019年',
        address: '广州市番禺区大石街道石北工业路',
        setBooks: `患有传染病及精神类疾病老人暂不接收
能独立自主生活的老人，接受老人短期居住或全托服务`,
        tableData: [
          {
            date: ["独立套间", "45㎡", "￥1000元/月", "（共10套余2套）"]
          },
          {
            date: ["独立套间", "45㎡", "￥1000元/月", "（共10套余2套）"]
          }, {
            date: ["独立套间", "45㎡", "￥1000元/月", "（共10套余2套）"]
          },

        ],

      },
      flag: false

    }
  },
  methods: {
    onSubmit () {
      console.log('submit!');
    },
    edit () {
      this.flag = true

    },
    editSave () {
      this.flag = false
    }


  },
  mounted () {
    console.log(this.$refs.form)
  }
}
</script>
<style scoped>
* {
  margin: 0;
}
.form_top {
  height: 69px;
  border-bottom: 2px #0090fe solid;
  background: #fff;
  font-size: 16px;
}
.fl {
  float: left;
  line-height: 69px;
  font-size: 20px;
  color: #333;
  margin-left: 20px;
}
.fl i {
  width: 34px;
  height: 34px;
  display: inline-block;
  background: url(../../../assets/organization/organization.png);
  vertical-align: middle;
  margin-right: 9px;
}
.fl span {
  vertical-align: middle;
}
.fr {
  float: right;
  line-height: 69px;
  color: #0090fe;
  font-size: 18px;
  margin-right: 40px;
}
.fr i {
  width: 16px;
  height: 16px;
  display: inline-block;
  background: url(../../../assets/organization/enter.png);
  margin: 0 30px 0 10px;
}
.star {
  color: #0090fe;
  margin-left: 10px;
  vertical-align: middle;
}
</style>
