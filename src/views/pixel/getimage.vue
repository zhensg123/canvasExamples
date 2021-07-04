<template>
  <div>
    <canvas
      id="canvas"
      width="400"
      height="400"
      style="border: 1px solid red"
    ></canvas>
    <el-button @click="oppsite">反转</el-button>
    <el-button @click="blackw">黑白</el-button>
    <el-button @click="blackw1">黑白1</el-button>
    <el-button @click="light1">亮度</el-button>
    <el-button @click="red1">红色蒙版</el-button>
        <el-button @click="transparent">透明</el-button>

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
    transparent () {
      const cxt = this.getCanvas2d()

      const img = new Image()
      img.src = require('@/assets/logo.png')
      img.onload = function () {
        // cxt.drawImage(img, 90, 20, 20, 20) // img dx dy dw dh
        cxt.drawImage(img, 10, 10) // sx sy sw sh dx dy dw dh
        var imgData = cxt.getImageData(10, 10, 200, 200)
        var data = imgData.data
        for (let i = 0; i < data.length; i += 4) {
          data[i + 3] = data[i + 3] * 0.3
        }
        cxt.putImageData(imgData, 200, 200)
      }
    },
    red1 () {
      const cxt = this.getCanvas2d()

      const img = new Image()
      img.src = require('@/assets/logo.png')
      img.onload = function () {
        // cxt.drawImage(img, 90, 20, 20, 20) // img dx dy dw dh
        cxt.drawImage(img, 10, 10) // sx sy sw sh dx dy dw dh
        var imgData = cxt.getImageData(10, 10, 200, 200)
        var data = imgData.data
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i + 0]
          const g = data[i + 1]
          const b = data[i + 2]
          const average = (r + g + b) / 3
          data[i + 0] = average
          data[i + 1] = 0
          data[i + 2] = 0
        }
        cxt.putImageData(imgData, 200, 200)
      }
    },
    oppsite () {
      this.drawcurveto()
    },
    light1 () {
      const cxt = this.getCanvas2d()

      const img = new Image()
      img.src = require('@/assets/logo.png')
      img.onload = function () {
        // cxt.drawImage(img, 90, 20, 20, 20) // img dx dy dw dh
        cxt.drawImage(img, 10, 10) // sx sy sw sh dx dy dw dh
        var imgData = cxt.getImageData(10, 10, 200, 200)
        var data = imgData.data
        for (let i = 0; i < data.length; i += 4) {
          const a = 50
          data[i + 0] += a
          data[i + 1] += a
          data[i + 2] += a
        }
        cxt.putImageData(imgData, 200, 200)
      }
    },
    blackw1 () {
      const cxt = this.getCanvas2d()

      const img = new Image()
      img.src = require('@/assets/logo.png')
      img.onload = function () {
        // cxt.drawImage(img, 90, 20, 20, 20) // img dx dy dw dh
        cxt.drawImage(img, 10, 10) // sx sy sw sh dx dy dw dh
        var imgData = cxt.getImageData(10, 10, 120, 120)
        var data = imgData.data
        for (let i = 0; i < data.length; i += 4) {
          const average =
            data[i + 0] * 0.3 + data[i + 1] * 0.6 + data[i + 2] * 0.1
          data[i + 0] = average
          data[i + 1] = average
          data[i + 2] = average
        }
        cxt.putImageData(imgData, 140, 10)
      }
    },
    blackw () {
      const cxt = this.getCanvas2d()

      const img = new Image()
      img.src = require('@/assets/logo.png')
      img.onload = function () {
        // cxt.drawImage(img, 90, 20, 20, 20) // img dx dy dw dh
        cxt.drawImage(img, 10, 10) // sx sy sw sh dx dy dw dh
        var imgData = cxt.getImageData(10, 10, 120, 120)
        var data = imgData.data
        for (let i = 0; i < data.length; i += 4) {
          const average = (data[i + 0] + data[i + 1] + data[i + 2]) / 3
          data[i + 0] = average
          data[i + 1] = average
          data[i + 2] = average
        }
        cxt.putImageData(imgData, 140, 10)
      }
    },
    drawcurveto () {
      const cxt = this.getCanvas2d()

      const img = new Image()
      img.src = require('@/assets/logo.png')
      img.onload = function () {
        // cxt.drawImage(img, 90, 20, 20, 20) // img dx dy dw dh
        cxt.drawImage(img, 10, 10) // sx sy sw sh dx dy dw dh
        var imgData = cxt.getImageData(10, 10, 120, 120)
        var data = imgData.data
        for (let i = 0; i < data.length; i += 4) {
          data[i + 0] = 255 - data[i + 0]
          data[i + 1] = 255 - data[i + 1]
          data[i + 2] = 255 - data[i + 2]
        }
        cxt.putImageData(imgData, 140, 10)
      }
    }
  },
  mounted () {}
}
</script>
