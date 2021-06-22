const obj = {}
obj.install = function (Vue) {
  Vue.prototype.$$ = function (id) {
    return document.querySelector(id)
  }
}

export default obj
