<template>
  <div id="hello" :class="{blackDay:isActive}">
    <div class="rainBox">
        <i class="rain" v-for="(item, index) in rainList" :key="item.index"></i>
    </div>
    <h1>{{ msg }}</h1>
    <h2>{{textEn}}</h2>
    <div class="card">
      <img src="../assets/images/index.jpg" >
    </div>
    <input id="checkBox" type="checkbox">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '帶你去看流星雨',
      textEn :'Unfortunately, heavy rain today',
      isActive: true,
      rainList:[]
    }
  },methods:{
      rainInit(){
        let rainAll ="";
        for(let i=0;i<150;i++){
          rainAll +=  '<i class="rain"></i>';
        }
        document.querySelector('.rainBox').innerHTML= rainAll ;
      }, 
      rainInit2(){
        for(let i=0;i<150;i++){
           this.rainList[i] = i;
        }
        console.log(this.rainList);
        console.log(typeof(this.rainList));
      }
  },mounted(){
      // this.rainInit();
      this.rainInit2();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/rain.css';
body{
  background: #111;
}
h1, h2 {
  font-weight: normal;
  margin: 20px ;
}
.card{
  width: 20%;
  padding: 10px;
  box-shadow: 5px 5px 5px  rgba(0, 0, 0, .5);
  border: 1px solid rgba(0, 0, 0, .5);
  margin: 0 auto;
  position: relative;
}

.card:after{
  content:"2017-12-30";
  font-size:12px;
  position: absolute;
  bottom:-8px;
  right: 10px;

}

img{
  width: 100%;
}


#hello{
  margin: 50px auto;
  /* width: 500px; */
  height: 75vh;
  padding: 30px;
  line-height: 40px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0);
  position: relative;
}
.blackDay{
  background-color: #222222;
}
.rainBox{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;left: 0;
}

 
</style>
