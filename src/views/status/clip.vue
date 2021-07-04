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
      
      cxt.beginPath()
      cxt.arc(50, 50, 40, 0, 360*Math.PI/180, true)
      cxt.closePath();

      cxt.strokeStyle = 'red';
      cxt.stroke()

      cxt.clip()

      cxt.beginPath();
      cxt.fillStyle = 'blue'
      cxt.fillRect(50,50,100,100)
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
