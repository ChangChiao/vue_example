<template>
  <div class="hello" :style="{backgroundColor: '#' + colorBar}">
    <h1>{{ msg }}</h1>
    <h2>{{textEn}}</h2>
       <ul class="userList">
           <li class="userCard" v-for="(item, index) in content" :key="item.index">
               <h2>{{item.name}}</h2>
               <p>{{item.email}}</p>
               <p class="call">{{item.phone}}</p>
               <p class="company">{{item.company.name}}</p> 
           </li>
       </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'user',
  data () {
    return {
      colorBar:'',
      msg: '你是哈密,我是瓜',
      textEn : 'Great minds think alike',
      content:[]
    }
  },methods:{
     fetchInfo(){
         axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            this.content = response.data;
             console.log(response);
             console.log(this.content);
         },(error)=>{
             console.log(error);
         })

     }
  },
  mounted(){
      this.fetchInfo();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
   padding:50px;    
   height: 80vh;
   background: #999;
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
.userList{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: 0 auto;
    flex-wrap :wrap;
}

.userCard{
    width: 250px;
    height: 150px;
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 10px;
    color:#555;
}

.userCard:hover{
    background-color: rgba(255, 255, 255, .8);
}

.userCard h2{
    margin: 20px;
    color: #fff;
}
.call{
    padding: 5px 0;
    font-size: 14px;
}

.company{
    font-size: 12px;
    color: #ccc;
}
</style>
