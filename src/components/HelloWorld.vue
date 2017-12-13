<template>
  <div id="hello" :class="{blackDay:isActive}">
    <div class="rainBox" v-if="prepare">
        <i class="rain" v-for="(item, index) in rainList" :key="item.index"></i>
    </div>
    <div v-if="!prepare">
      <h1>{{ msg }}</h1>
      <h2>{{textEn}}</h2>
    </div> 
    <div class="rainTxt" v-if="prepare"> 
      <h1>{{ msg2 }}</h1>
      <h2>{{textEn2}}</h2>
    </div>
    <div class="card">
      <img src="../assets/images/index.jpg" >
    </div>
    <h3 v-if="!prepare">你願意嗎?親愛的</h3>
    <h3 v-if="prepare">天意如此</h3>
    <input id="checkBox" type="checkbox" @click="checkBoxFun">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '帶你去看流星雨',
      msg2: '真不幸,今天下大雨',
      textEn :'Take you to see the meteor shower',
      textEn2 :'Unfortunately, heavy rain today',
      isActive: false,
      prepare:false,
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
        // console.log(this.rainList);
        // console.log(typeof(this.rainList));
      },
      checkBoxFun(){
        const myCheck = document.getElementById('checkBox').checked;
        if( myCheck == true){
          this.isActive = true;
          this.prepare = true;
        }else{
          this.isActive = false;
          this.prepare = false;
        }
      }
  },mounted(){
      // this.rainInit();
      this.rainInit2();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/css/rain.scss';
body{
  background: #111;
  #hello{
    height: 85vh;
    padding: 30px;
    line-height: 40px;
    box-sizing: border-box;
    text-align: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0);
    position: relative;
    h1, h2 {
      font-weight: normal;
      margin:15px ;
    }
    .rainTxt{
      color: #ccc;
    }
    h3{
      padding:10px 0;
    }
    .card{
      width: 20%;
      padding: 10px;
      box-shadow: 5px 5px 5px  rgba(0, 0, 0, .5);
      border: 1px solid rgba(0, 0, 0, .5);
      margin: 0 auto;
      position: relative;
      &:after{
        content:"2017-12-30";
        font-size:12px;
        position: absolute;
        bottom:-8px;
        right: 10px;
      }
      img{
        width: 100%;
      }
    }

  }
  .blackDay{
    background-color: #222222;
  }

}


 
</style>
