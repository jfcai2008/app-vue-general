/*
common methods

List:
* 1 * axiosGet ------------- get请求
* 2 * axiosPost ------------ post请求
* 3 * judgeInteger(str) ------------ 判断正整数

*/
import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.baseURL = 'http://140.143.32.99:88'
// axios.defaults.baseURL = ' http://localhost:8080'
/**
 * http GET 请求方法
 * @param {Object} options  http请求的参数集合
 *       {
 *            url:     {String}       http请求路径
 *            success: {Function}     http请求成功时执行的方法
 *            error:   {Function}     http请求失败时执行的方法
 *            message: {String}       http请求提示信息
 *            config:  {Object}       axios配置信息
 *            that:    {Object}       vue实例
 *        }
 */
export function axiosGet(options) {
  if (typeof options.url !== 'string' || !options.url.length) {
    return false
  }
  options = Object.assign({
    url: '',
    success: null,
    error: null,
    message: '',
    config: { headers: { 'content-type': 'application/json;charset=UTF-8' }},
    that: self
  }, options)

  const urlSuffix = options.url.indexOf('?') !== -1 ? '&v=' + new Date().getTime() : '?v=' + new Date().getTime()

  axios.get(options.url + urlSuffix, options.config)
    .then(function(respons) {
      processResponseData(options.that, respons, options.message, options.success)
    })
    .catch(function(error) {
      // showMsg('GET请求异常：' + error, 'error');
      options.error && options.error(error)
    })
}

/**
 * http POST 请求方法
 * @param {Object} options  http请求的参数集合
 *       {
 *            url:     {String}       http请求路径
 *            data:    {Object}       POST发送数据
 *            success: {Function}     http请求成功时执行的方法
 *            error:   {Function}     http请求失败时执行的方法
 *            message: {String}       http请求提示信息
 *            config:  {Object}       axios配置信息
 *            that:    {Object}       vue实例
 *        }
 */
export function axiosPost(options) {
  console.log('axiosPost')
  if (typeof options.url !== 'string' || !options.url.length) {
    return false
  }
  options = Object.assign({
    url: '',
    data: {},
    success: null,
    error: null,
    message: '',
    config: { headers: { 'content-type': 'application/json;charset=UTF-8' }}
    // that: self
  }, options)
  console.log(options)
  axios.post(options.url, options.data, options.config)
    .then(function(respons) {
      processResponseData(options.that, respons, options.message, options.success)
    })
    .catch(function(error) {
      // showMsg('POST请求异常：' + error, 'error');
      options.error && options.error(error)
    })
}

const processResponseData = (that, respons, message, callback) => {
  // 后台数据返回成功 || 平台数据权限接口返回成功
  if (respons.data.result || respons.data.collection) {
    if (message) {
      showMsg(message, 'success')
    }
    callback && callback(respons)
  } else {
    // let info = respons.data.msg ? respons.data.msg : '请求错误';
    // showMsg(info, 'error')
    callback && callback(respons)
  }
}

/**
 * 页面消息提示展示弹窗
 * @param content  展现的信息内容 string
 * @param type     展现的方式  success/warning/info/error
 * @param that     vue的实例
 */

export const showMsg = function(content = '没有可显示的信息！', type) {
  if (type !== 'success' && type !== 'warning' && type !== 'info' && type !== 'error') {
    type = 'warning'
  }
  console.log(content)
  Message.error('数据库已经存在')
}

/*  判断正整数  */
export const judgeInteger = function(str) {
  const Z = /^\+?[1-9][0-9]*$/
  if (str === '' || !str) {
    return true
  } else {
    return Z.test(str)
  }
}
