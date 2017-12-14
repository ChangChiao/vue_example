<template>
  <div class="hello" :style="{backgroundColor: '#' + colorBar}">
    <h1 :class="{blackDay:isActive}">{{ msg }}</h1>
    <h2 :class="{blackDay:isActive}">{{textEn}}</h2>
    <span :class="{blackDay:isActive}" id="colorEnter">#</span>
    <input type="text" maxlength="6" id="colorBar" v-model="colorBar" >
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      colorBar:'',
      isActive:false,
      msg: '沒有你的世界,彩色亦是黑白',
      textEn : 'the world without you,colorful is same as black and white',
    }
  },
  watch:{
    colorBar(val ,oldVal){
       const regEx = /^[A-Fa-f0-9]+$/g;
        if(val !="" && regEx.test(val) == false ){
            alert("大大!您輸入了無效的字母");
            //即時監聽是否輸入不合規範的字元
        }else{
           const count = val.split("");
          //  console.log(count);
           let record=0;
           for(let i=0; i<count.length;i++){
             record += parseFloat(count[i]);
           }  
           if(record <= 30){
             this.isActive = true;
           }else{
             this.isActive = false;
           }
        }

    } 
  },
  methods:{
      // checkCode(){
      //   const val = document.getElementById("colorBar").value;
      //   const regEx = /^[A-Fa-f0-9]+$/g;
      //   if(val !="" &&　regEx.test(val) == false ){
      //       alert("大大!您輸入了無效的字母");
      //   }
      //   console.log(val);
      //   console.log(regEx.test(val));
      // }
      // 須搭配 @change="checkCode" 使用
  },computed:{

  },
  mounted(){

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
.hello{
   padding:50px;    
   height: 85vh;
    h1, h2 {
    font-weight: normal;
    margin: 18px;
  }
  .blackDay{
    color: #ccc;
  }
  input{
    margin-top: 20px;
  }
  #colorEnter{
    position: relative;
    height: 30px;
    width: 30px;
    left: 0px;
    top: 0;
  }
}

</style>
