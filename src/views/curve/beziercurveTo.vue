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
      cxt.moveTo(75, 40)

      cxt.bezierCurveTo(75, 37, 70, 25, 50, 25)
      cxt.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
      cxt.bezierCurveTo(20, 80, 40, 102, 75, 120)
      cxt.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
      cxt.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
      cxt.bezierCurveTo(85, 25, 75, 37, 75, 40)

      cxt.stroke()
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
