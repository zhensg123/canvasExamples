const obj = {}
obj.install = function (Vue) {
  Vue.prototype.$$ = function (id) {
    return document.querySelector(id)
  }

  Vue.prototype.$getMouse = function (element) {
    var mouse = {}
    element.addEventListener('mousemove', function (e) {
      var x, y
      var e = e || window.event

      x= e.pageX
      y=e.pageY

      x = x - element.offsetLeft
      y = y - element.offsetTop
      mouse = {
        x,
        y
      }
    })
    console.log(mouse, 'dddd')

    return mouse
  }
}

export default obj
