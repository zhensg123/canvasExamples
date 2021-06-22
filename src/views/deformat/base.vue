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

      cxt.fillStyle = 'red'
      cxt.fillRect(30, 30, 50, 50)

      cxt.translate(50, 50);
      cxt.fillRect(30, 30, 50, 50)
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
