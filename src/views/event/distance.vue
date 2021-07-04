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
      const cnv = this.$$('#canvas')
      const cxt = this.getCanvas2d()
      const txt = this.$$('#txt')
      var x = cnv.width / 2
      var y = cnv.height / 2
      var mouse = {}
      cnv.addEventListener('mousemove', function (e) {
        var ix, iy
        var e = e || window.event

        ix = e.pageX
        iy = e.pageY

        ix = ix - cnv.offsetLeft
        iy = iy - cnv.offsetTop
        mouse = {
          x: ix,
          y: iy
        };
        (function frame () {
          window.requestAnimationFrame(frame)
          cxt.clearRect(0, 0, cnv.width, cnv.height)

          cxt.save()
          cxt.beginPath()
          cxt.moveTo(x, y)
          cxt.lineTo(mouse.x, mouse.y)
          cxt.closePath()
          cxt.strokeStyle = 'red'
          cxt.stroke()
          cxt.restore()

          var dx = mouse.x - y
          var dy = mouse.y - y

          var distance = Math.sqrt(dx * dx + dy * dy)
          txt.innerText = '距离是：' + distance
        })()
      })
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
