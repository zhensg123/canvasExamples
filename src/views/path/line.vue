<template>
  <div>
    <canvas
      id="canvas"
      width="200"
      height="200"
      style="border: 1px solid red"
    ></canvas>
    <el-button @click="judge">是否在cxt作用域内</el-button>
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
      cxt.rect(50,50,80,80);
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
      cxt.strokeStyle = 'red'

      cxt.lineWidth = 5

      cxt.beginPath()
      cxt.moveTo(50, 40)
      cxt.lineTo(150, 40)
      cxt.strokeStyle = 'red'
      cxt.stroke()

      cxt.beginPath()
      cxt.moveTo(50, 80)
      cxt.lineTo(150, 80)
      cxt.strokeStyle = 'red'
      cxt.stroke()

      cxt.beginPath()
      cxt.moveTo(50, 120)
      cxt.lineTo(150, 120)
      cxt.strokeStyle = 'red'
      cxt.stroke()
    }
  },
  mounted () {
    // this.drawcurveto()
  }
}
</script>
