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

      const img = new Image()
      img.src = require('@/assets/logo.png')
      img.onload = function () {
        // cxt.drawImage(img, 90, 20, 20, 20) // img dx dy dw dh
        cxt.drawImage(img, 10, 10, 120, 120, 0, 0, 120, 120) // sx sy sw sh dx dy dw dh
      }
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
