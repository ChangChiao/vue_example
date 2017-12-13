<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{textEn}}</h2>
    <input type="text" v-model="keyIn" @keyup.enter="getData" maxlength="9">
    <ul>
      <li v-for="(item, index) in todoList" :key="item.index">
        {{item}}
        <span class="delete_btn" @click="removeFun(index)">delete</span>
      </li> 
    </ul>
    <div class="btn" @click="getData">送 出</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      time:'12:30',
      msg: '請輸入你的待辦事項',
      textEn : 'Every minute in the world, the clock is about 60 seconds away',
      keyIn:'',
      todoList:[
        '打東東',
        '看Twice MV',
        '吃芭樂',
      ]
    }
  },components:{ 
   
  },methods:{
     removeFun(index){
        this.todoList.splice(index, 1);
     },
     getData(){
        if(this.keyIn == ''){
            alert("還沒輸入東西呢!夥計")
            return;
        }
        this.todoList.push(this.keyIn);
        this.keyIn = '';
     }
  },mounted(){
    // this.initFun();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  padding: 50px;
  min-height: 75vh;
  h1, h2 {
    font-weight: normal;
    margin: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    border: 2px solid steelblue;
    border-radius: 10px;
    width: 200px;
    margin: 0 auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
    text-align: left;
    li {
      display: block;
      margin: 20px 10px;
      position: relative;
      .delete_btn{
        width: 60px;
        height: 25px;
        line-height: 25px;
        border-radius: 5px;
        color: #fff;
        background: steelblue;
        position: absolute;
        top: -5px;right: 0;
        text-align: center;
        font-size: 14px;
      }
    }
  }
  input{
    margin: 30px 0;
  }
  .btn{
    width: 200px;
    height: 50px;
    line-height: 50px;
    margin: 50px auto;
    background: #ccc;
    border-radius: 8px;
    /* transition-duration: .5s; */
    &:hover{
      box-shadow: 0px 0px 5px rgba(0, 0, 0, .3)
    }
  }
}

</style>
