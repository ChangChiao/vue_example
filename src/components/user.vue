<template>
  <div class="hello" :style="{backgroundColor: '#' + colorBar}">
    <h1>{{ msg }}</h1>
    <h2>{{textEn}}</h2>
       <ul class="userList">
           <li class="userCard" v-for="(item, index) in content" :key="item.index">
               <h2>{{item.Charge}}</h2>
               <p class="location">{{item.Location}}</p>
               <p class="address">{{item.Address}}</p>
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
         axios.get('https://kevin.kitty-rock.com/joe/json.php').then((response)=>{
            //  const res = JSON.parse(response);
            //自動幫你轉好parse了 ㄜ
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
<style scoped lang="scss">
.hello{
    padding:50px;    
    min-height: 80vh;
    h1, h2 {
        font-weight: normal;
        margin: 18px;
    }    
    .userList{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        margin: 0 auto;
        flex-wrap :wrap;
        .userCard{
            width: 250px;
            height: 150px;
            border: 1px solid #ccc;
            display: inline-block;
            border-radius: 10px;
            color:#555;
            margin: 10px;
            &:hover{
                background-color: rgba(0, 0, 0, .8);
            }
            h2{
                margin: 20px;
                color: #666;
                font-weight: bold;
            
            }
            .address{
                padding: 5px 0;
                font-size: 14px;
                font-size: 12px;
                color: #999;
            }         
            .location{
                font-size: 14px;
                padding: 10px;
            }
        }
    }
}

</style>
