<template>
  <div>
    <canvas
      id="canvas"
      width="400"
      height="400"
      style="border: 1px solid red"
    ></canvas>
    <el-button @click="font">字体渐变</el-button>
        <el-button @click="radia">径向渐变</el-button>

  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    getCanvas2d () {
      return this.$$('#canvas').getContext('2d')
    },
    drawLine () {
      const cxt = this.getCanvas2d()
      const gnt = cxt.createLinearGradient(0, 150, 200, 150)
      gnt.addColorStop(0, 'HotPink')
      gnt.addColorStop(1, 'white')
      cxt.fillStyle = gnt
      cxt.fillRect(0, 0, 200, 150)
    },
    font () {
      const cxt = this.getCanvas2d()

      var text = '路也学习网'
      cxt.font = 'bold 60px 微软雅黑'
      const gnt = cxt.createLinearGradient(0, 300, 200, 300)
      gnt.addColorStop(0, 'HotPink')
      gnt.addColorStop(1, 'blue')
      cxt.fillStyle = gnt
      cxt.fillText(text, 40, 200)
    },
    radia () {
      const cxt = this.getCanvas2d()
     
      // 画圆
      cxt.beginPath()
      cxt.arc(80, 80, 50, 0, Math.PI * 2, true)
      cxt.closePath();

      var gnt = cxt.createRadialGradient(100, 60, 10, 80, 80, 50)
      gnt.addColorStop(0, 'white');
      gnt.addColorStop(0.9, 'orange');
      gnt.addColorStop(1, 'rgba(0 ,0 , 0, 0)')

      cxt.fillStyle = gnt
      cxt.fill()
    }
  },
  mounted () {
    // this.drawLine()
  }
}
</script>
