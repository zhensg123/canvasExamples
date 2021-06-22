<template>
  <div>
    <canvas
      id="canvas"
      width="200"
      height="200"
      style="border: 1px solid red"
    ></canvas>
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
    drawcurveto () {
      const cxt = this.getCanvas2d()
      
      cxt.font = 'bold 30px 微软雅黑'
      cxt.fillText('测测测', 150, 150)
      cxt.textAlign = 'left'
      cxt.strokeStyle = 'purple'
    //   cxt.strokeText('测试数据', 1, 60)
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
