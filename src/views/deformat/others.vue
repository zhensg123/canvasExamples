<template>
  <div>
    <canvas
      id="canvas"
      width="200"
      height="200"
      style="border: 1px solid red"
    ></canvas>
    <el-button @click="scale">放大</el-button>
    <el-button @click="rotate">旋转</el-button>
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

      //   this.cxt.translate(50, 50)  // 移动时候旋转中心也变化了
      this.cxt.fillRect(30, 30, 50, 50)
    },
    scale () {
      // this.cxt 是整个对象放大
      this.cxt.scale(1.5, 1.5)
      this.cxt.fillStyle = 'HotPink'
      // 填充矩形  x y w h 坐标和宽度和高度
      this.cxt.fillRect(30, 30, 50, 50)
    },
    rotate () {
      // 清除矩形 坐标 矩形宽度高度
      this.cxt.rotate(Math.PI / 180 * 2)
      this.cxt.fillStyle = 'HotPink'
      // 填充矩形  x y w h 坐标和宽度和高度
      this.cxt.fillRect(30, 30, 50, 50)
    }
  },
  mounted () {
    this.drawcurveto()
  }
}
</script>
