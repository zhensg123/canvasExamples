<template>
  <div>
    <canvas
      id="canvas"
      width="200"
      height="200"
      style="border: 1px solid red"
    ></canvas>
    <el-button @click="move">移动</el-button>
    <el-button @click="clear">清除</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      cxt: null
    }
  },
  methods: {
    getCanvas2d () {
      return this.$$('#canvas').getContext('2d')
    },
    drawcurveto () {
      this.cxt = this.getCanvas2d()

      this.cxt.fillStyle = 'red'
      this.cxt.fillRect(30, 30, 50, 50)

      this.cxt.translate(50, 50)
      this.cxt.fillRect(30, 30, 50, 50)
    },
    move () {
      this.cxt.translate(10, 10)
      this.cxt.fillStyle = 'HotPink'
      // 填充矩形  x y w h 坐标和宽度和高度
      this.cxt.fillRect(30, 30, 50, 50)
    },
    clear () {
       // 清除矩形 坐标 矩形宽度高度
      this.cxt.clearRect(30, 30, 3, 50)
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
