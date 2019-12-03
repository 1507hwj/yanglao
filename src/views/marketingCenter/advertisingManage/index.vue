<template>
  <div id="adv">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="在售广告位" name="first" class="onsale">
        <el-table :data="onsaleData">
          <el-table-column prop="name" label="广告位名称" width="260"></el-table-column>
          <el-table-column prop="date" align="center" label="日期"></el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <template slot-scope="scope">
              <!-- <el-button size="mini" type="primary" @click="dialog2Visible = true">编辑</el-button> -->
              <!-- <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
               -->
              <span>未购买</span>
              <el-button type="primary" round size='mini' @click="dialogVisible = true">购买</el-button>
              <el-dialog :visible.sync="dialogVisible" width="50%" :before-close="handleClose" :data="scope">
                <!-- <span>这是一段信息</span> -->
                <h3 style="text-align:left;width:100%;margin-bottom:20px">竞争对手出价排名</h3>
                <p v-for="(item,i) in auctionItem" :class="setClass(item.isme)" :key="i" style="width:100%;height:30px;line-height:30px;margin-bottom:20px">
                  <span style="float:left" class="fl">{{item.companyName}}</span>
                  <span style="float:right">{{item.price}}</span>
                </p>
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="我出价:">
                    <el-input v-model="form.myprice" placeholder="请输入价格" autofocus style="font-size:20px">
                    </el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
                  <el-button type="primary" disabled @click="addItem()">下一步</el-button>
                </span>
              </el-dialog>
              <a href="#" class="underline">查看</a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已购广告位" name="second" class="havebought">
        <el-table :data="haveboughtData">
          <el-table-column prop="name" label="广告位名称" width="260"></el-table-column>
          <el-table-column prop="date" align="center" label="日期"></el-table-column>
          <el-table-column align="center" label="操作" width="200">
            <template>
              <a href="#" class="underline">查看</a>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
// 广告管理

export default {
  data () {
    return {
      dialogVisible: false,
      activeName: 'first',
      form: {
        myprice: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      onsaleData: [
        {
          name: '首页广告位',
          date: '2016-05-02'
        }, {
          name: '首页广告位',
          date: '2016-05-02'
        }, {
          name: '首页广告位',
          date: '2016-05-02'
        }, {
          name: '首页广告位',
          date: '2016-05-02'
        }, {
          name: '首页广告位',
          date: '2016-05-02'
        }, {
          name: '首页广告位',
          date: '2016-05-02'
        }],
      haveboughtData: [
        {
          name: '首页广告位',
          date: '2016-05-02'
        }, {
          name: '首页广告位',
          date: '2016-05-02'
        }, {
          name: 'PC首页广告位',
          date: '2019-05-02'
        }],
      auctionItem: [
        {
          companyName: '广东省广州市某某某某养老机构',
          price: '900元',
          isme: false
        },
        {
          companyName: '广东省广州市某某某某养老机构',
          price: '800元',
          isme: false
        },
        {
          companyName: '广东省广州市某某某某养老机构',
          price: '700元',
          isme: false
        },
        {
          companyName: '广东省广州市百悦百泰颐养中心',
          price: '600元',
          isme: true
        },
        {
          companyName: '广东省广州市某某某某养老机构',
          price: '500元',
          isme: false
        },
        {
          companyName: '广东省广州市某某某某养老机构',
          price: '500元',
          isme: false
        }
      ]
    }
  },
  components: {

  },
  methods: {

    handleClick (tab, event) {
      window.console.log(tab, event)
    },
    addItem () {

    },
    handleClose (done) {
      done()
    },
    // “我”高亮
    setClass (i) {
      return i ? 'isme' : ''
    }
  }

}
</script>

<style scoped>
#adv {
  height: 100%;
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
.el-row {
  text-align: left;
}
.el-dialog__footer {
  text-align: center !important;
}
.underline {
  color: #e9716d;
  padding-bottom: 2px;
  border-bottom: 1px solid #e9716d;
}
.havebought .underline {
  color: #e9716d;
  padding-bottom: 0;
  border-bottom: 1px solid #e9716d;
}
.el-form-item__content {
  margin-left: 80px;
  width: 140px;
  display: inline-block;
}
.el-form-item__label {
  font-size: 20px !important;
  font-weight: 800;
  position: absolute;
}
.el-dialog__body {
  padding: 10px 50px !important;
}
/* 我高亮 */
.isme {
  color: #1d94e7;
}
.isme .fl::after {
  content: '(我)';
}
</style>
