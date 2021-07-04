<template>
  <div>
    <canvas
      id="canvas"
      width="200"
      height="200"
      style="border: 1px solid red"
    ></canvas>
    <div id="txt"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    judge () {
      const cxt = this.getCanvas2d()
      cxt.strokeStyle = 'red'
      cxt.rect(50, 50, 80, 80)
      cxt.stroke()
      if (cxt.isPointInPath(100, 50)) {
        alert(1)
      }
    },
    getCanvas2d () {
      return this.$$('#canvas').getContext('2d')
    },
    drawcurveto () {
      const cxt = this.getCanvas2d()
      const cnv = this.$$('#canvas')
    //   const mouse = this.$getMouse(cnv)
      const txt = this.$$('#txt')
      cnv.addEventListener('mousemove', function (e) {
        var x, y
        var e = e || window.event

        x = e.pageX
        y = e.pageY

        x = x - cnv.offsetLeft
        y = y - cnv.offsetTop
        var mouse = {
          x,
          y
        }
        txt.innerHTML = '鼠标当前的坐标' + mouse.x + ',' + mouse.y
      }, false)
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
