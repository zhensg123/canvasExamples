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
    drawArcto () {
      const cxt = this.getCanvas2d()
      cxt.moveTo(20, 20)
      cxt.lineTo(70, 20)

      cxt.arcTo(120, 20, 120, 70, 50)
      cxt.lineTo(120, 120)

      cxt.stroke()
    }
  },
  mounted () {
    this.drawArcto()
  }
}
</script>
