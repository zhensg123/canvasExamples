<template>
    <div>

        <canvas id="canvas" width="200" height="200" style="border:1px solid red"></canvas>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    getCanvas2d () {
      return this.$$('#canvas').getContext('2d')
    },
    drawcurveto () {
      const cxt = this.getCanvas2d()
      cxt.moveTo(30, 120)
      cxt.quadraticCurveTo(100, 20, 160, 120)

      cxt.stroke()
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
