import axios from 'axios'
import { Message } from 'element-ui'

const qs = require('qs')
// let Base64 = require('js-base64').Base64
// let bauth = 'Basic ' + Base64.encode('auto_cloud:qaz@#$<>?075')

const myAjax = axios.create()
const dealWarn = (responseData) => {
  Message({
    message: responseData.error || responseData.message || responseData.err,
    type: 'warning'
  })
  return Promise.reject(responseData)
}

const dealCode = (response) => {
  const code = response.data.code
  if (code !== undefined && code !== 200) {
    const responseData = response.data
    if (code === 401) {
      localStorage.removeItem('LoginUserInfo')
      Message({
        message: responseData.error || responseData.message,
        type: 'warning'
      })
      return false
    }
    return dealWarn(responseData)
  }
  return response
}

export const ajaxGetData = dataParams => {
  return myAjax.get(dataParams.url, { params: dataParams.params })
}
export const ajaxDeleteData = dataParams => {
  return myAjax.delete(dataParams.url, { params: dataParams.params })
}
export const ajaxPostFormData = dataParams => {
  return myAjax({
    method: 'post',
    url: dataParams.url,
    data: dataParams.params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export const ajaxDeleteJson = (dataParams) => {
  return myAjax({
    url: dataParams.url,
    method: 'delete',
    data: dataParams.params
  })
}
export const ajaxPostData = dataParams => {
  return myAjax.post(dataParams.url, qs.stringify(dataParams.params))
}
export const ajaxPutData = dataParams => {
  return myAjax.put(dataParams.url, qs.stringify(dataParams.params))
}
export const ajaxPutJson = dataParams => {
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
  return myAjax.put(dataParams.url, dataParams.params, axiosConfig)
}
export const ajaxPostJson = dataParams => {
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
  return myAjax.post(dataParams.url, dataParams.params, axiosConfig)
}
/**
 * ???????????????????????????
 */
const pendingRequests = new Map()

myAjax.interceptors.request.use(function (config) {
  const requestKey = `${config.url}/${JSON.stringify(config.params)}&request_type=${config.method}`
  console.log(requestKey, pendingRequests.has(requestKey))
  if (pendingRequests.has(requestKey)) {
    config.cancelToken = new axios.CancelToken((cancel) => {
      // cancel ???????????????????????? promise ??? error ?????????
      cancel(`??????????????????????????????: ${requestKey}`)
    })
  } else {
    pendingRequests.set(requestKey, config)
    config.requestKey = requestKey
  }
  // config.headers['Authorization'] = bauth
  return config
},
function (error) {
  pendingRequests.clear()
  return Promise.reject(error)
}
)

/**
 * ???????????????
 */
myAjax.interceptors.response.use(response => {
  const requestKey = response.config.requestKey
  pendingRequests.delete(requestKey)
  return dealCode(response)
}, error => {
  if (axios.isCancel(error)) {
    console.warn(error)
    const message = (error && error.response && error.response.data && (error.response.data.message || error.response.data.Message))
    // Message({
    //   message: message || '?????????????????????',
    //   type: 'error'
    // })
    return Promise.reject(error)
  }
  pendingRequests.clear()
  return Promise.reject(error)
})
