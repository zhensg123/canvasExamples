<template>
    <div>

        <canvas id="canvas" width="200" height="200" style="border:1px solid red"></canvas>
    </div>
</template>
<script>
export default {
    data(){
     return {
         
     }
    },
    methods:{
      getCanvas2d(){
          return this.$$('#canvas').getContext('2d')
      },
      drawArc(){
          var cnv = this.$$('#canvas')
          console.log(cnv, 'd')
          const cxt = cnv.getContext('2d')
          cxt.beginPath()
          cxt.arc(80,80,50,0,180*Math.PI/180,true);
          cxt.closePath();

          cxt.strokeStyle = 'red'
          cxt.stroke();

          cxt.beginPath();
          cxt.arc(120, 80, 50, 0, 360*Math.PI/180, true)
          cxt.closePath();

          cxt.strokeStyle = 'red'
          cxt.stroke()
      },
      drawArc2(){
        const cxt = this.getCanvas2d()
        cxt.beginPath();
        cxt.arc(70,70,50,0,-90*Math.PI/180, true)
        cxt.closePath()
        cxt.stroke()
      }
    },
    mounted(){
       this.drawArc()
       this.drawArc2()
    }
}
</script>