import {
  request,
  request1,
  request2,
} from '../utils/request'



// ---------------------------查看公司职位-------------------------
// 获取公司职位
export function getPosition(data) {
  return request({
    url: '/position/queryPositions',
    method: 'get',
    params: data
  })
}
// 添加公司职位
export function postPosition(data) {
  return request({
    url: '/position/addPosition',
    method: 'post',
    data: data
  })
}
// 删除公司职位
export function deletePosition(data) {
  return request({
    url: '/position/delete/' + data,
    method: 'delete',
  })
}
// 修改公司职位
export function editPosition(data) {
  return request({
    url: '/position/put',
    method: 'put',
    data: data
  })
}

// ------------------------------查看在招职位------------------
// 获取已经发布的职位
export function getIssued(data) {
  return request({
    url: '/openposition/queryOpenPositions',
    method: 'get',
    params: data
  })
}
// 获取未发布的职位
export function getUnpublished() {
  return request({
    url: '/position/getUnpublishedOption',
    method: 'get',
  })
}
// 上架职位
export function rackingPosition(data) {
  return request({
    url: '/openposition/recordOpenPosition',
    method: 'post',
    data: data
  })
}
// 编辑职位
export function editAddedPosition(data) {
  return request({
    url: '/openposition/put',
    method: 'put',
    data: data
  })
}
// 删除已上架的职位
export function deleteAddedPosition(data) {
  return request({
    url: '/closepositiony/recordClosePositon',
    method: 'post',
    params: data
  })
}
// -------------------------------------简历-------------------

// 获取已投递的简历数据
export function getResumer(data) {
  return request({
    url: '/resume/queryPutResume',
    method: 'get',
    params: data
  })
}
// 点击搜索按钮获取高级人才
export function seachResumes(data) {
  return request({
    url: '/resume/seachResumes',
    method: 'get',
    params: data
  })
}
// 阅读简历
export function read(data) {
  return request({
    url: '/jRecruit/recordRecruitProgress',
    method: 'put',
    params: data
  })
}
// 面试邀请
export function Invited(data) {
  return request({
    url: '/jInviteInterview/recordInviteInterview',
    method: 'post',
    data: data
  })
}
// 参加面试
export function join(data) {
  return request({
    url: '/jRecruit/recordRecruitProgress',
    method: 'put',
    params: data
  })
}
// 面试结果
export function result(data) {
  return request({
    url: '/jRecruit/recordRecruitProgress',
    method: 'put',
    params: data
  })
}
// 发送入职offer
export function sendOffer(data) {
  return request({
    url: '/jSendOffer/recordSendOffer',
    method: 'post',
    data: data
  })
}

// 入职
export function entryOffice(data) {
  return request({
    url: '/jRecruit/recordRecruitProgress',
    method: 'put',
    params: data
  })
}
// 离职
export function leave(data) {
  return request({
    url: '/jRecruit/recordRecruitProgress',
    method: 'put',
    params: data
  })
}
// -------------------------高级人才简历操作----------------
// 阅读简历
export function read1(data) {
  return request({
    url: "/jRecruitProgresss/record",
    method: 'put',
    params: data
  })
}
