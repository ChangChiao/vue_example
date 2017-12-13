<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{textEn}}</h2>
    <div id="carousel">
      <carousel-3d :autoplay="true" :autoplay-timeout="2400">
        <slide v-for="(item ,index) in list" :key="item.id" :index="item.order"><img :src="item.imgSrc"/></slide>
      </carousel-3d>
</div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  name: 'HelloWorld',
  data () {
    return {
      slides: 7,
      msg: '看山是山,看海是海',
      textEn :'See sea is sea,see mountain is mountain',
      list:[
        {id:'0',order:0,imgSrc:'https://res.cloudinary.com/ameo/image/upload/v1498843587/kTcPaQR_x77hor.jpg'},
        {id:'1',order:1,imgSrc:'https://unsplash.it/400/300?image=456'},
        {id:'2',order:2,imgSrc:'https://unsplash.it/400/300?image=222'},
        {id:'3',order:3,imgSrc:'https://unsplash.it/400/300?image=1003'},
        {id:'4',order:4,imgSrc:'https://unsplash.it/400/300?image=940'},
        {id:'5',order:5,imgSrc:'https://unsplash.it/400/300?image=944'},
        {id:'6',order:6,imgSrc:'https://unsplash.it/400/300?image=219'},
        {id:'7',order:7,imgSrc:'https://unsplash.it/400/300?image=1041'}
      ]
    }
  },
  components: {
    Carousel3d,  // 'carousel-3d': Carousel3d,               
    Slide  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  padding: 50px;
  height: 85vh;
  box-sizing: border-box;
  h1, h2 {
    font-weight: normal;
    margin: 30px 0;
  }
  .carousel-3d-slide {
      height: auto !important;
      background-color: rgba(0, 0, 0, 0.25) !important;
  }
}


</style>
