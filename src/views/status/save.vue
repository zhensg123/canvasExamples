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
      
      const text = '绿叶学习网'
      cxt.font = 'bold 20px 微软雅黑';
      cxt.fillStyle = 'red';
      cxt.save();
      cxt.fillText(text, 50, 40);

      cxt.fillStyle ='LightSkyBlue';
      cxt.fillText(text, 50, 80);

      cxt.restore();
      cxt.fillText(text, 50, 120)
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
