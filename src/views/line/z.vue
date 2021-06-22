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
      cxt.moveTo(50, 50)
      cxt.lineTo(100, 50)
      cxt.lineTo(50, 100)
      cxt.lineTo(100, 100)
      cxt.lineWidth = 12;
      cxt.lineCap ='round'

      cxt.stroke()
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
