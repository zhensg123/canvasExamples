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
      cxt.strokeStyle = 'red'
      cxt.setLineDash([10, 5])
      cxt.strokeRect(50,50,80,80)
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
