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
      var x = 0;
      (function frame () {
        window.requestAnimationFrame(frame)
        cxt.clearRect(0, 0, cnv.width, cnv.height)
        cxt.beginPath()
        cxt.arc(x, 70, 20, 0, 360 * Math.PI / 180, true)
        cxt.closePath()
        cxt.fillStyle = 'red'
        cxt.fill()
        x += 2
      })()
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
