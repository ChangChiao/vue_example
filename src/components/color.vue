<template>
  <div class="hello" :style="{backgroundColor: '#' + colorBar}">
    <h1>{{ msg }}</h1>
    <h2>{{textEn}}</h2>
    <span class="colorEnter">#</span>
    <input type="text" maxlength="6" v-model="colorBar">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      colorBar:'',
      msg: '沒有你的世界,彩色亦是黑白',
      textEn : 'the world without you,colorful is same as black and white',
    }
  },methods:{

  },
  mounted(){

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
   padding:50px;    
   height: 70vh;
}
h1, h2 {
  font-weight: normal;
  margin: 18px;
}

input{
    margin-top: 20px;
}
.colorEnter{
  position: relative;
  height: 30px;
  width: 30px;
  left: 0px;
  top: 0;
}
a {
  color: #42b983;
}
</style>
