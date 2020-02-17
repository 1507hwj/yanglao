<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="activityName" label="活动名称">
          </el-table-column>
          <el-table-column prop="activityContent" label="活动内容">
          </el-table-column>
          <el-table-column prop="activityPerson" label="活动发起人">
          </el-table-column>
          <el-table-column prop="activityTime" label="活动时间">
          </el-table-column>
          <el-table-column prop="activityType" label="活动类型">
          </el-table-column>
          <el-table-column prop="activityType" label="报名条件">
            <template slot-scope="scope">
              <div>
                <el-button size="small" @click="checkDetail">查看详情</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <el-button size="small" type="success">报名</el-button>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待审核" name="second">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="activityName" label="活动名称">
          </el-table-column>
          <el-table-column prop="activityContent" label="活动内容">
          </el-table-column>
          <el-table-column prop="activityPerson" label="活动发起人">
          </el-table-column>
          <el-table-column prop="activityTime" label="活动时间">
          </el-table-column>
          <el-table-column prop="activityType" label="活动类型">
          </el-table-column>
          <el-table-column prop="activityType" label="报名条件">
            <template slot-scope="scope">
              <div>
                <el-button size="small">查看详情</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <el-button size="small" type="warning">撤销</el-button>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="已通过" name="third">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="activityName" label="活动名称">
          </el-table-column>
          <el-table-column prop="activityContent" label="活动内容">
          </el-table-column>
          <el-table-column prop="activityPerson" label="活动发起人">
          </el-table-column>
          <el-table-column prop="activityTime" label="活动时间">
          </el-table-column>
          <el-table-column prop="activityType" label="活动类型">
          </el-table-column>
          <el-table-column prop="activityType" label="报名条件">
            <template slot-scope="scope">
              <div>
                <el-button size="small">查看详情</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="未通过" name="fourth">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="activityName" label="活动名称">
          </el-table-column>
          <el-table-column prop="activityContent" label="活动内容">
          </el-table-column>
          <el-table-column prop="activityPerson" label="活动发起人">
          </el-table-column>
          <el-table-column prop="activityTime" label="活动时间">
          </el-table-column>
          <el-table-column prop="activityType" label="活动类型">
          </el-table-column>
          <el-table-column prop="activityType" label="报名条件">
            <template slot-scope="scope">
              <div>
                <el-button size="small">查看详情</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="reason" label="驳回理由">
            <!-- <el-button size="small" type="warning">撤销</el-button> -->
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" center>
      <!-- <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span> -->
      <div class="content">
        <div>
          <span style="font-size:16px;">　　一、报名店铺要求</span>
        </div>
        <div>
          <span style="font-size:16px;">　　二、收费标准</span>
        </div>
        <div>
          <span style="font-size:16px;">　　平台活动收费标准：活动单品下单价×份数×8%</span>
        </div>
        <div>
          <span style="font-size:16px;">　　三、商品要求</span>
        </div>
        <div>
          <span style="font-size:16px;">　　（一）商品主要要求</span>
        </div>
        <div>
          <span style="font-size:16px;">　　1、必须是质量合格的全新正品商品（非瑕疵品），且在商品的保质期内，若出现质量问题，交由所在交易平台处理。</span>
        </div>
        <div>
          <span style="font-size:16px;">　　2、商家出售的商品须是质量合格的全新、正装商品，且在商品保质期内。不允许发布商品小样、样品、赠品、试用装、体验装、非卖品等。</span>
        </div>
        <div>
          <span style="font-size:16px;">　　3、如是属于多款式商品合并链接的清仓商品，不予报名上线。</span>
        </div>
        <div>
          <span style="font-size:16px;">　　（二）商品证件要求</span>
        </div>
        <div>
          <span style="font-size:16px;">　　食品类：企业营业执照、食品卫生许可证QS等。</span>
        </div>
        <div>
          <span style="font-size:16px;">　　保健品：保健食品经营企业卫生许可证、保健食品GMP证书等。</span>
        </div>
        <div>
          <span style="font-size:16px;">　　进口食品：进口报关单据、检疫证书、海外进货发票或者代购小票等。</span>
        </div>
        <div>
          <span style="font-size:16px;">　　医疗器械类：医疗器械经营许可证。</span>
        </div>
        <div>
          <span style="font-size:16px;">　　（以上证件如是天猫店及京东店无需提交）</span>
        </div>
        <div>
          <span style="font-size:16px;">　　（三）类目商品要求</span>
        </div>
        <div>
          <span style="font-size:16px;">　　四、邮费要求</span>
        </div>
        <div>
          <span style="font-size:16px;">　　1、普通商品包邮范围</span>
        </div>
        <div>
          <span style="font-size:16px;">　　参与平台的商品必须全国包邮（注：港澳台地区除外）。商家指定快递不能到达的地区，请用EMS或者其他快递包邮送达。</span>
        </div>
        <div>
          <span style="font-size:16px;">　　2、酒类、生鲜类包邮范围</span>
        </div>
        <div>
          <span style="font-size:16px;">　　酒类、生鲜类商品可限制地区抢购，商家至少需要标明3个允许参与的省份地区，并且承诺所允许参与的地区都包邮。并在活动标题中加上【限地区】。</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      tableData: [
        {
          activityName: '元宵节限时优惠',
          activityContent: '一年一度大促销',
          activityPerson: '康养平台官方',
          activityTime: '2020-01-15',
          activityType: '节日主题活动',
          reason: "非品牌商家"

        },
        {
          activityName: '元宵节限时优惠',
          activityContent: '一年一度大促销',
          activityPerson: '康养平台官方',
          activityTime: '2020-01-15',
          activityType: '节日主题活动',
          reason: "非品牌商家"
        },
        {
          activityName: '元宵节限时优惠',
          activityContent: '一年一度大促销',
          activityPerson: '康养平台官方',
          activityTime: '2020-01-15',
          activityType: '节日主题活动',
          reason: "非品牌商家"
        },
        {
          activityName: '元宵节限时优惠',
          activityContent: '一年一度大促销',
          activityPerson: '康养平台官方',
          activityTime: '2020-01-15',
          activityType: '节日主题活动',
          reason: "非品牌商家"
        },
        {
          activityName: '元宵节限时优惠',
          activityContent: '一年一度大促销',
          activityPerson: '康养平台官方',
          activityTime: '2020-01-15',
          activityType: '节日主题活动',
          reason: "非品牌商家"
        },
        {
          activityName: '元宵节限时优惠',
          activityContent: '一年一度大促销',
          activityPerson: '康养平台官方',
          activityTime: '2020-01-15',
          activityType: '节日主题活动',
          reason: "非品牌商家"
        },
      ],
      centerDialogVisible: false
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    checkDetail () {
      this.centerDialogVisible = true
    }
  }

}
</script>
<style scoped>
</style>
