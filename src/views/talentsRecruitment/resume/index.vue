<template>
  <div class="app-container resume">
    <div class="filter-container" style="text-align:left;padding-bottom:20px">
      <el-form ref="form" :model="searchCondition" label-width="120px">
        <el-row :gutter="40">
          <el-col :span="8">
            <el-form-item label="职位">
              <el-input v-model="searchCondition.targetPosion" placeholder="请输入职位" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别">
              <el-select v-model="searchCondition.gender" placeholder="请选择性别" clearable style="width:100% !important">
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="年龄">
              <el-input v-model="searchCondition.age" placeholder="请输入年龄" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="40">
          <el-col :span="16">
            <el-form-item label="人才库" style="font-size:30px !important">
              <el-select v-model="searchCondition.status" filterable placeholder="请选择人才库" style="width:100% !important">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-button type="primary" style="margin-left:80px;" @click="searchBtn">搜索</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-table :data="tableData" border style="width: 100%;" id="resume_table">
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="应聘职位" align="center" prop="targetPosion">
      </el-table-column>
      <el-table-column label="年龄" align="center" prop="age">
      </el-table-column>
      <el-table-column label="性别" align="center" prop="gender">
      </el-table-column>
      <el-table-column label="学历" align="center" prop="education">
      </el-table-column>
      <el-table-column label="工作经验" align="center" prop="experience">
      </el-table-column>
      <el-table-column label="手机号" align="center" prop="telephone">
      </el-table-column>
      <el-table-column label="邮箱" align="center" prop="email">
      </el-table-column>
      <el-table-column label="期望薪资" align="center" prop="expectedSalary">
      </el-table-column>
      <el-table-column label="阅读简历" align="center">
        <template slot-scope="scope">
          <el-tag @click="readResume(scope.row)">
            <i class="iconfont icon-trues" style="font-size:20px;" v-if="scope.row.readResumeTime"></i>
            <i class="iconfont icon-changyongicon-" style="font-size:20px;" v-else></i>
          </el-tag>
          <el-dialog center :visible.sync="dialogVisible" title="简历" :before-close="handleClose" class="resume_dialog">
            <div slot="title" class="header-title">
              <el-row>
                <el-col :span="6">
                  <img src="../../../assets/head_portrait.png" alt="" />
                </el-col>
                <el-col :span="18">
                  <el-row>
                    <el-col :span="12">
                      <p class="info_label">
                        <span style="display:inline-block;text-align:right">姓名：</span>
                        {{ resumeDetail.name }}
                      </p>
                    </el-col>
                    <el-col :span="12">
                      <p class="info_label">
                        <span style="display:inline-block;text-align:right">籍贯：</span>
                        {{ resumeDetail.nativePlace }}
                      </p>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">
                      <p class="info_label">
                        <span style="display:inline-block;text-align:right">学历：</span>
                        {{ resumeDetail.education }}
                      </p>
                    </el-col>
                    <el-col :span="12">
                      <p class="info_label">
                        <span style="display:inline-block;text-align:right">居住地址：</span>
                        {{ resumeDetail.currentResidence }}
                      </p>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">
                      <p class="info_label">
                        <span style="display:inline-block;text-align:right">出生年月：</span>
                        {{ resumeDetail.birYear +"年" +resumeDetail.birMonth }}
                      </p>
                    </el-col>
                    <el-col :span="12">
                      <p class="info_label">
                        <span style="display:inline-block;text-align:right">联系电话：</span>
                        {{ resumeDetail.telephone }}
                      </p>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">
                      <p class="info_label">
                        <span style="display:inline-block;text-align:right">邮箱：</span>
                        {{ resumeDetail.email }}
                      </p>
                    </el-col>
                    <el-col :span="12"> </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
            <el-row>
              <el-col :span="24">
                <el-row>
                  <el-col :span="24">
                    <p style="font-size:16px;color:#0160FE;margin-left:-20px;">基本信息</p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">年龄：</span>
                      {{ resumeDetail.age }}
                    </p>
                  </el-col>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">身高：</span>
                      {{ resumeDetail.height }}
                    </p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">婚姻状况：</span>
                      {{ resumeDetail.maritalStatus }}
                    </p>
                  </el-col>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">体重：</span>
                      {{ resumeDetail.weight }}
                    </p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">健康状况：</span>
                      {{ resumeDetail.healthCondition }}
                    </p>
                  </el-col>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">民族：</span>
                      {{ resumeDetail.folk }}
                    </p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">政治面貌：</span>
                      {{ resumeDetail.name }}
                    </p>
                  </el-col>
                  <el-col :span="12"> </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-row>
                  <el-col :span="24">
                    <p style="font-size:16px;color:#0160FE;margin-left:-20px;">求职意向</p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">求职状态：</span>
                      {{ resumeDetail.jobhuntingStatus }}
                    </p>
                  </el-col>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">目标职位：</span>
                      {{ resumeDetail.targetPosion }}
                    </p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">目标工作地点：</span>
                      {{ resumeDetail.targetAddress }}
                    </p>
                  </el-col>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">工作类型：</span>
                      {{ resumeDetail.weight }}
                    </p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">期望薪资：</span>
                      {{ resumeDetail.expectedSalary }}
                    </p>
                  </el-col>
                  <el-col :span="12">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">到岗时间：</span>
                      {{ resumeDetail.arrivalTime }}
                    </p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">自我评价：</span>
                      {{ resumeDetail.selfAssessment }}
                    </p>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-row>
                  <el-col :span="24">
                    <p style="font-size:16px;color:#0160FE;margin-left:-20px;">工作经验</p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24" v-for="(item,index) in experience" :key="index">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">{{item.dateFrom + '一'+item.dateTo }}</span>
                      {{item.companyName}}
                    </p>
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">{{item.position}}</span>
                    </p>
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">工作内容：</span><br> {{item.workIntroduce}}
                    </p>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-row>
                  <el-col :span="24">
                    <p style="font-size:16px;color:#0160FE;margin-left:-20px;">教育经历</p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24" v-for="(item,index) in education" :key="index">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">{{item.dateFrom + '一'+item.dateTo }}</span>
                      {{item.institutionName}}
                    </p>
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">学位学历：{{item.degree}}</span>
                    </p>
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">主修专业：{{item.major}}</span>
                    </p>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-row>
                  <el-col :span="24">
                    <p style="font-size:16px;color:#0160FE;margin-left:-20px;">培训经历</p>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24" v-for="(item,index) in train" :key="index">
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">{{item.dateFrom + '一'+item.dateTo }}</span>
                      {{item.companyName}}
                    </p>
                    <p class="info_label">
                      <span style="display:inline-block;text-align:right">培训专业：{{item.major}}</span>
                    </p>
                    <!-- <p class="info_label">
                      <span style="display:inline-block;text-align:right">主修专业：{{item.major}}</span>
                    </p> -->
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-dialog>
        </template>
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <div>
            <el-button type="text" v-if="scope.row.sendTime">已邀约</el-button>
            <el-button type="text" v-else style="color:red">未邀约</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="面试邀约" align="center">
        <template slot-scope="{ row }">
          <div>
            <el-button type="primary" size="mini" @click="handleInvite(row)">
              邀约
            </el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="join" label="参加面试">
        <template slot-scope="{ row }">
          <div v-if="!row.attendinterviewTime" @click.once="joinInterview(row)">
            <el-checkbox v-model="row.attendinterviewTime" name="type" class="el_checkbox" :disabled="row.attendinterviewTime"></el-checkbox>
          </div>
          <div v-else>
            <el-checkbox v-model="row.attendinterviewTime" name="type" class="el_checkbox" :disabled="row.attendinterviewTime"></el-checkbox>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="result" label="面试结果">
        <template slot-scope="scope">
          <div @click="interviewRes(scope.row)" class="payShow">
            <el-button v-if="scope.row.interviewResult == 1" type="success" size="small">已通过</el-button>
            <el-button v-else-if="scope.row.interviewResult == 0" type="danger" size="small">未通过</el-button>
            <el-button v-else size="small">未面试</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="sendOffer" label="发录取通知书">
        <template slot-scope="scope">
          <el-button type="primary" v-if="!scope.row.issueofferTime" @click="sendInterview(scope.row)" size="small">发送</el-button>
          <el-button type="danger" v-if="scope.row.issueofferTime" size="small">已发送</el-button>
          <el-dialog title="入职邀请" :visible.sync="centerDialogVisible" width="500px">
            <el-form ref="form" :model="form1" label-width="80px">
              <el-form-item label="入职时间">
                <el-date-picker v-model="form1.entryTime" type="datetime" placeholder="选择日期时间">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="入职地点">
                <el-input type="textarea" v-model="form1.entryAddress" placeholder="请输入面试地点"></el-input>
              </el-form-item>
              <el-form-item label="联系方式">
                <el-input v-model="form1.entryContact" placeholder="请输入联系人与联系电话"></el-input>
              </el-form-item>
              <el-form-item label="交通线路">
                <el-input type="textarea" v-model="form1.entryTrafficroute" placeholder="请输入交通路线"></el-input>
              </el-form-item>
              <el-form-item label="携带资料">
                <el-input type="textarea" v-model="form1.entryMaterial" placeholder="请输入需携带资料"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="makeSure()">确定</el-button>
                <el-button @click="centerDialogVisible = false">取消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
        </template>
      </el-table-column>
      <el-table-column prop="entry" label="入职">
        <template slot-scope="{ row }">
          <div @click.once="entry(row)">
            <el-checkbox v-model="row.entrydutyTime" name="type" class="el_checkbox" :disabled="row.entrydutyTime"></el-checkbox>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="leaveOffice" label="离职">
        <template slot-scope="{ row }">
          <div @click.once="leaveOffice(row)">
            <el-checkbox v-model="row.quitdutyTime" name="type" class="el_checkbox" :disabled="row.quitdutyTime"></el-checkbox>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="面试邀请" :visible.sync="dialog2Visible" width="500px" :before-close="handle2Close">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="面试官">
          <el-input v-model="form.interviewerName" placeholder="请输入面试官姓名"></el-input>
        </el-form-item>
        <el-form-item label="面试时间">
          <el-date-picker v-model="form.interviewTime" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="面试地点">
          <el-input type="textarea" v-model="form.interviewAddress" placeholder="请输入面试地点"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="form.interviewContact" placeholder="请输入联系人与联系电话"></el-input>
        </el-form-item>
        <el-form-item label="交通线路">
          <el-input type="textarea" v-model="form.interviewTrafficroute" placeholder="请输入交通路线"></el-input>
        </el-form-item>
        <el-form-item label="携带资料">
          <el-input type="textarea" v-model="form.interviewMaterial" placeholder="请输入需携带资料"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="invite">立即邀约</el-button>
          <el-button @click="dialog2Visible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <div class="block" style="margin:30px;" v-if="total > 0">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="data.pageNum" :page-sizes="[5, 10, 15, 20]" :page-size="data.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { formatDate } from '../../../common/common.js'

import {
  getResumer,
  seachResumes,
  read,
  Invited,
  join,
  result,
  sendOffer,
  entryOffice,
  leave,
  read1,
} from '@/api/job'
import { constants } from 'fs';
export default {
  data () {
    return {
      table: `<el-row>
              <el-col :span="12">
                <p class="info_label">
                  <span style="width:100px;display:inline-block;text-align:right">姓名：</span>
                  {{ resumeDetail.name }}
                </p>
              </el-col>
              <el-col :span="12">
                <p class="info_label">
                  <span style="width:100px;display:inline-block;text-align:right">性别：</span>
                  {{ resumeDetail.gender }}
                </p>
              </el-col>
            </el-row>`,
      dialogVisible: false,
      dialog2Visible: false,
      centerDialogVisible: false,

      tableData: [],
      total: 0,
      data: {
        pageNum: 1,
        pageSize: 10,
        targetPosion: '',
        gender: '',
        age: '',
        type: '1'
      },
      // 发送面试邀请
      form: {
        interviewerName: '赵总监', //面试官姓名
        interviewTime: '2019-12-31 10:00:00', //面试时间
        interviewAddress:
          '广州市黄埔区开源大道11号加速器产业园区B2栋9楼六顺生物', //面试地点
        interviewContact: '王经理 18790187654', //联系方式
        interviewTrafficroute:
          '公交车367、358、B24、339路公交到加速器产业园区站下车', //交通路线
        interviewMaterial:
          '携带个人简历、身份证、学历证书、体检报告等相关证书及复印件一份', //携带资料
        sendresumeid: '', //简历id
        name: '', //用户姓名
        phone: '', //手机号码
        email: '' //电子邮箱
      },
      // 发送入职邀请
      form1: {
        entryTime: '2019-12-31 10:00:00', //入职时间
        entryAddress: '广州市黄埔区开源大道11号加速器产业园区B2栋9楼六顺生物', //入职地点
        entryContact: '王经理 18790187654', //联系方式
        entryTrafficroute:
          '公交车367、358、B24、339路公交到加速器产业园区站下车', //交通路线
        entryMaterial:
          '携带个人简历、身份证、学历证书、体检报告等相关证书及复印件一份', //携带资料
        sendresumeid: '', //简历id
        processid: '', //进度id
        jodStr: ''
      },
      // 简历详情
      resumeDetail: {},
      options: [
        {
          value: null,
          label: '收到的简历'
        },
        {
          value: 0,
          label: '康养无忧人才库'
        },
        {
          value: 1,
          label: '康养无忧高级人才'
        }
      ],
      // 搜索条件
      searchCondition: {
        targetPosion: '',
        gender: '',
        age: '',
        status: null
      },
      // 检查当条简历是否已阅读
      isRead: false,
      // 简历来源，求职者主动投递为1，机构主动搜索为2
      type: '1',
      // 工作经验
      experience: {

      },
      // 教育经历
      education: {

      },
      // 培训经历
      train: {

      }
    }
  },
  mounted () {
    this.getResume()
    // this.getEducation()
  },
  methods: {
    // -----------------------获取工作经验-----------------------
    getExperience (row) {
      // console.log(row)
      this.$instance1({
        method: "get",
        url: "/resumeWork/queryResumes",
        params: {
          accountid: row.accountid,
          adminQuery: "-1"
        }
      }).then((res) => {
        console.log(res)
        this.experience = res.data.data.list
        console.log('experience1', this.experience)
      })
    },
    // -------------------------获取教育经历------------------------
    getEducation (row) {
      // console.log('res1')
      console.log('row', row)
      this.$instance1({
        method: "get",
        url: "/resumeEducation/queryResumes",
        params: {
          accountid: row.accountid,
          adminQuery: "-1"
        }
      }).then((res) => {
        this.education = res.data.data.list
        console.log('education', this.education)
      }).catch((err) => {
        console.log(err)
      })

    },
    //-------------------------- 获取培训经历----------------------------
    getTrain (row) {
      this.$instance1({
        method: "get",
        url: "/resumeTrain/queryResumes",
        params: {
          accountid: row.accountid,
          adminQuery: "-1"
        }
      }).then((res) => {
        console.log(res)
        this.train = res.data.data.list
      }).catch((err) => {
        console.log(err)
      })

    },
    // --------------------------获取简历数据----------------------------
    getResume () {
      this.type = '1'
      this.data.targetPosion = this.searchCondition.targetPosion
      this.data.gender = this.searchCondition.gender
      this.data.age = this.searchCondition.age

      getResumer({
        ...this.data,
        type: this.type
      })
        .then(res => {
          console.log(res)
          this.tableData = res.data.list
          this.total = res.data.total

          let len = this.tableData.length

          for (let i = 0; i < len; i++) {
            // 参加面试
            if (this.tableData[i].attendinterviewTime) {
              // console.log(111)
              this.tableData[i].attendinterviewTime = true
            } else {
              // console.log(222)
              this.tableData[i].attendinterviewTime = false
            }
            // 入职
            if (this.tableData[i].entrydutyTime) {
              this.tableData[i].entrydutyTime = true
            } else {
              this.tableData[i].entrydutyTime = false
            }

            // 离职
            if (this.tableData[i].quitdutyTime) {
              this.tableData[i].quitdutyTime = true
            } else {
              this.tableData[i].quitdutyTime = false
            }

            // 学历
            if (this.tableData[i].education == 0) {
              this.tableData[i].education = '小学'
            } else if (this.tableData[i].education == 1) {
              this.tableData[i].education = '初中'
            } else if (this.tableData[i].education == 2) {
              this.tableData[i].education = '高中/中技/中专'
            } else if (this.tableData[i].education == 3) {
              this.tableData[i].education = '大专'
            } else if (this.tableData[i].education == 4) {
              this.tableData[i].education = '本科'
            } else if (this.tableData[i].education == 5) {
              this.tableData[i].education = '硕士'
            } else if (this.tableData[i].education == 6) {
              this.tableData[i].education = '博士'
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // ------------------------------点击搜索按钮获取高级人才---------------------
    searchBtn () {
      if (
        this.searchCondition.status == 0 ||
        this.searchCondition.status == 1
      ) {
        this.type = '2'
        seachResumes({
          ...this.searchCondition,
          type: this.type
        })
          .then(res => {
            console.log('res', res)
            this.type = '2'
            this.tableData = res.data.list
            console.log('tableData', this.tableData)
            this.total = res.data.total

            let len = this.tableData.length

            for (let i = 0; i < len; i++) {
              console.log(11111111)
              // 参加面试
              if (this.tableData[i].attendinterviewTime) {
                this.tableData[i].attendinterviewTime = true
              } else {
                // console.log(222)
                this.tableData[i].attendinterviewTime = false
              }
              // 入职
              if (this.tableData[i].entrydutyTime) {
                this.tableData[i].entrydutyTime = true
              } else {
                this.tableData[i].entrydutyTime = false
              }

              // 离职
              if (this.tableData[i].quitdutyTime) {
                this.tableData[i].quitdutyTime = true
              } else {
                this.tableData[i].quitdutyTime = false
              }

              // 学历
              if (this.tableData[i].education == 0) {
                this.tableData[i].education = '小学'
              } else if (this.tableData[i].education == 1) {
                this.tableData[i].education = '初中'
              } else if (this.tableData[i].education == 2) {
                this.tableData[i].education = '高中/中技/中专'
              } else if (this.tableData[i].education == 3) {
                this.tableData[i].education = '大专'
              } else if (this.tableData[i].education == 4) {
                this.tableData[i].education = '本科'
              } else if (this.tableData[i].education == 5) {
                this.tableData[i].education = '硕士'
              } else if (this.tableData[i].education == 6) {
                this.tableData[i].education = '博士'
              }
            }
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.type = '1'
        this.getResume()
      }
    },
    // ------------------------------阅读简历------------------------
    readResume (row) {
      console.log('row')
      if (row.readResumeTime) {
        this.getEducation(row)
        this.getExperience(row)
        this.getTrain(row)

        console.log('res1')
        this.dialogVisible = true
        this.resumeDetail = {
          ...row
        }
      } else {
        this.getExperience(row)
        this.getEducation(row)
        this.getTrain(row)
        this.dialogVisible = true
        this.resumeDetail = {
          ...row
        }
        let date = formatDate('yyyy-MM-dd hh:mm:ss')

        // if (row.jRecruitProgresss || !row.jRecruitProgresss) {
        //   read1({
        //     resumeid: row.id,
        //     readresumeTime: date,
        //     userAccountId: row.accountid
        //   }).then(res => {
        //     console.log(res)
        //     if (res.code == 1) {
        //       this.getResume()
        //     }
        //   })
        //     .catch(err => {
        //       console.log(err)
        //     })
        // } else {
        //   read({
        //     sendresumeid: row.id,
        //     readresumeTime: date,
        //     resumeFrom: this.type,
        //     userAccountId: row.userAccountId
        //   }).then(res => {
        //     console.log(res)
        //     if (res.code == 1) {
        //       this.getResume()
        //     }
        //   })
        //     .catch(err => {
        //       console.log(err)
        //     })
        // }


        read({
          sendresumeid: row.id,
          readresumeTime: date,
          resumeFrom: this.type,
          userAccountId: row.userAccountId
        })
          .then(res => {
            console.log(res)
            if (res.code == 1) {
              this.getResume()
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    // --------------------------------面试邀请-------------------------
    handleInvite (row) {
      // if (!row.readResumeTime) {
      //   this.$alert('请先阅读该条简历', '温馨提示', {
      //     confirmButtonText: '确定'
      //   })
      // } else {
      this.dialog2Visible = true
      this.form.sendresumeid = row.id
      this.form.name = row.name
      this.form.phone = row.telephone
      this.form.email = row.email
      // }
    },
    invite () {
      console.log(11111111111111)
      this.dialog2Visible = false
      Invited(this.form)
        .then(res => {
          console.log(res)

          if (res.code == 1) {
            this.dialog2Visible = false
            this.$message({
              message: '邀约成功',
              type: 'success'
            })
            this.getResume()
          } else {
            this.$message({
              message: '邀约失败',
              type: 'info'
            })
            this.dialog2Visible = false
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // -----------------------------跟踪简历进度-----------------------------
    // 参加面试
    joinInterview (row) {
      // if (row.sendTime) {
      let date = formatDate('yyyy-MM-dd hh:mm:ss')
      console.log('date', date)
      join({
        attendinterviewTime: date,
        sendresumeid: row.id
      })
        .then(res => {
          console.log(res)
          this.getResume()
        })
        .catch(err => {
          console.log(err)
        })
      // } else {
      //   this.$alert('请先发送面试邀请', '温馨提示',
      //     //  {
      //     //   confirmButtonText: '确定',
      //     // callback: action => {
      //     //   this.$message({
      //     //     type: 'info',
      //     //     message: `action: ${action}`
      //     //   });
      //     // }
      //     // }
      //   );
      //   row.attendinterviewTime = false
      //   this.getResume()
      // }
    },
    // ------------------------------面试结果-----------------------------
    interviewRes (row) {
      // if (row.attendinterviewTime) {
      let res = row.interviewResult
      if (res == 0) {
        res = 1
        console.log(res)
      } else if (res == 1) {
        res = 0
        console.log(res)
      } else if (res == null) {
        res = 0
      }
      result({
        sendresumeid: row.id,
        interviewResult: res
      })
        .then(res => {
          console.log(res)
          this.getResume()
        })
        .catch(err => {
          console.log(err)
        })
      // } else {
      //   this.$alert('还未参加面试', '温馨提示', {
      //     confirmButtonText: '确定',
      //     // callback: action => {
      //     //   this.$message({
      //     //     type: 'info',
      //     //     message: `action: ${action}`
      //     //   });
      //     // }
      //   });
      // }
    },
    //点击发送按钮
    sendInterview (row) {
      if (row.interviewResult == 1) {
        this.centerDialogVisible = true
        this.form1.sendresumeid = row.id
        this.form1.processid = row.progressId
        this.form1.jodStr = row.targetPosion
      } else {
        this.$alert('该面试未通过', '温馨提示', {
          confirmButtonText: '确定'
        })
      }
    },
    makeSure () {
      this.centerDialogVisible = false
      let formData = new FormData()
      formData.append('sendresumeid', this.form1.sendresumeid)
      formData.append('entryTime', this.form1.entryTime)
      formData.append('entryAddress', this.form1.entryAddress)
      formData.append('entryContact', this.form1.entryContact)
      formData.append('entryTrafficroute', this.form1.entryTrafficroute)
      formData.append('entryMaterial', this.form1.entryMaterial)
      formData.append('processid', this.form1.processid)
      formData.append('jodStr', this.form1.jodStr)

      sendOffer(formData)
        .then(res => {
          console.log(res)
          if (res.code == 1) {
            this.$message({
              message: '发送成功',
              type: 'success'
            })
          }
          this.getResume()
        })
        .catch(err => {
          console.log(err)
        })
    },
    // ----------------------------入职----------------------
    entry (row) {
      // if (row.entrydutyTime) {
      let date = formatDate('yyyy-MM-dd hh:mm:ss')
      console.log('date', date)
      entryOffice({
        entrydutyTime: date,
        sendresumeid: row.id
      })
        .then(res => {
          console.log(res)
          this.getResume()
        })
        .catch(err => {
          console.log(err)
        })
      // } else {
      //   this.$alert('请先发送入职邀请', '温馨提示',
      //     {
      //       confirmButtonText: '确定',
      //       callback: action => {
      //         // this.$message({
      //         //   type: 'info',
      //         //   message: `action: ${action}`
      //         // });
      //         row.entrydutyTime = false
      //         this.getResume()
      //       }
      //     }
      //   );
      // row.entrydutyTime = false
      // this.getResume()
      // }
    },
    // -------------------------------离职----------------------
    leaveOffice (row) {
      // if (row.quitdutyTime) {
      let date = formatDate('yyyy-MM-dd hh:mm:ss')
      console.log('date', date)
      leave({
        quitdutyTime: date,
        sendresumeid: row.id
      })
        .then(res => {
          console.log(res)
          this.getResume()
        })
        .catch(err => {
          console.log(err)
        })
      // } else {
      //   this.$alert('该简历还未入职', '温馨提示',
      //     //  {
      //     //   confirmButtonText: '确定',
      //     // callback: action => {
      //     //   this.$message({
      //     //     type: 'info',
      //     //     message: `action: ${action}`
      //     //   });
      //     // }
      //     // }
      //   );
      //   row.quitdutyTime = false
      //   this.getResume()
      // }
    },
    // -----------------------关闭对话框------------------------
    handleClose (done) {
      done()
    },
    handle2Close (done) {
      done()
    },
    // --------------------------分页----------------------------
    handleSizeChange (val) {
      this.data.pageSize = val
      this.getResume()
    },
    handleCurrentChange (val) {
      this.data.pageNum = val
      this.getResume()
    }
  }
}
</script>

<style scoped>
* {
  /* margin: 0; */
  /* padding: 0; */
}
.resumeContent p,
.resumeContent h4 {
  margin-bottom: 20px;
}
.info_label {
  text-align: left;
}
.info_label[data-v-08685e00] {
  margin-bottom: 0px;
}
</style>
