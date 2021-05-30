import axios from 'axios'
import CONFIG from './appconfig'

/**
 * @description API前缀
 */
const API_PRE =''// "cai/"

function saveObject(item, obj) {
  sessionStorage.setItem(item, JSON.stringify(obj));
}
function getObject(item) {
  let obj = sessionStorage.getItem(item);
  let str = obj != null ? obj.toString() : ''
  return JSON.parse(str);
}

function saveItem(item, str) {
  sessionStorage.setItem(item, str);
}
function getItem(item) {
  let obj = sessionStorage.getItem(item);
  return obj;
}

function exportFile(act, params) {
  return exportFileRequest(act, params)
}
// 文件导出
function exportFileRequest(url, params) {
  return axios({
    method: 'get',
    url: `${CONFIG.BASE_URL}${API_PRE}${url}`,
    params: params,
    responseType: 'blob',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  })
}

/**
 * @description 使用axios向服务器发送post请求。
 * @param {*} action 
 * @param {*} params 
 */
function axiosPost(action, params) {
  const url = CONFIG.BASE_URL + API_PRE + action
  console.log(url)
  return axios.post(url, params, {
    headers: {
      'content-type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded'
      'Access-Control-Allow-Origin': '*'
    }
  })
}
function getdata(action) {
  return axios.get(CONFIG.BASE_URL + API_PRE + action)
}

function axiosGet(action) {
  return axios.get(CONFIG.BASE_URL + API_PRE + action)
}

/**
 * @description 下载文件
 * @param  row 
 */
function downloadFile(row) {
  const act = `knowledges/download?category=${row.category}&year=${row.year}&filename=${row.filename}`
  exportFile(act, {}).then(res => {
    const fileName = row.filename
    if (res.status === 200) {
      download(res.data, fileName)
    }
  }).catch(e => {
    console.log(e)
  })
}
function download(data, fileName) {
  if (!data) {
    return
  }
  const url = window.URL.createObjectURL(new Blob([data])) // 创建下载链接
  const link = document.createElement('a') // 创建a标签
  link.style.display = 'none' // 将a标签隐藏
  link.href = url // 给a标签添加下载链接
  link.setAttribute('download', fileName) // 此处注意，要给a标签添加一个download属性，属性值就是文件名称 否则下载出来的文件是没有属性的，空白白
  document.body.appendChild(link)
  link.click() // 执行a标签
  // 释放URL对象所占资源
  window.URL.revokeObjectURL(url)
  // 用完即删
  document.body.removeChild(link)
}

function fetchPost(act, params) {
  return fetch(CONFIG.BASE_URL + API_PRE + act, {
    method: 'POST',
    body: JSON.stringify(params),
    mode: 'cors'
  })
}



export default {
  saveObject,
  getObject,
  saveItem,
  getItem,
  fetchPost,
  getdata: getdata,
  axiosGet,
  axiosPost: axiosPost,
  exportFile: exportFile,
  downloadFile: downloadFile
}
