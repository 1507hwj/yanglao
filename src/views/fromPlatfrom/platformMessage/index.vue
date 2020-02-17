<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="messageTitle" label="消息标题">
      </el-table-column>
      <el-table-column prop="messageContent" label="消息内容">
      </el-table-column>
      <el-table-column prop="messageType" label="消息类型">
      </el-table-column>
      <el-table-column prop="sendTime" label="消息发出时间">
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <div>
            <el-button type="primary" size="small">忽略</el-button>
            <el-button type="danger" size="small">删除</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          messageTitle: "你的上架房间审核有新进展了",
          messageContent: "你昨天申请上架的房间D1010通过了审核",
          messageType: "审核进度",
          sendTime: "2019-12-25 12:09:13"
        },
        {
          messageTitle: "各位机构负责人，平台将于2020年零点整进行平台升级",
          messageContent: "各位机构负责人，平台将于2020年零点整进行平台升级。请及时做好相应的准备工作，由此造成的损失平台概不担责",
          messageType: "平台通知",
          sendTime: "2019-12-25 12:09:13"
        },
        {
          messageTitle: "有用户对你的房间做评论了",
          messageContent: "有用户对你的房间做评论了",
          messageType: "最新评论",
          sendTime: "2019-12-25 12:09:13"
        },
        {
          messageTitle: "各位机构负责人，平台将于2020年零点整进行平台升级",
          messageContent: "各位机构负责人，平台将于2020年零点整进行平台升级。请及时做好相应的准备工作，由此造成的损失平台概不担责",
          messageType: "平台通知",
          sendTime: "2019-12-25 12:09:13"
        },
        {
          messageTitle: "你的上架房间审核有新进展了",
          messageContent: "你昨天申请上架的房间D1010通过了审核",
          messageType: "审核进度",
          sendTime: "2019-12-25 12:09:13"
        },
        {
          messageTitle: "各位机构负责人，平台将于2020年零点整进行平台升级",
          messageContent: "各位机构负责人，平台将于2020年零点整进行平台升级。请及时做好相应的准备工作，由此造成的损失平台概不担责",
          messageType: "平台通知",
          sendTime: "2019-12-25 12:09:13"
        },

      ]
    }
  }

}
</script>
<style scoped>
</style>
