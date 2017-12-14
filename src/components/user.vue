<template>
  <div class="hello" :style="{backgroundColor: '#' + colorBar}">
    <h1>{{ msg }}</h1>
    <h2>{{textEn}}</h2>
    <div>請輸入地址搜尋 <input type="text" v-model="filter_name"></div>
    <nav aria-label="Page navigation"> 
        <ul class="pagination">
                <li :class="{'disabled': (currPage === 1)}" 
                    @click.prevent="setPage(currPage-1)"><a href="#">Prev</a></li>
                <li v-for="n in totalPage" :key="n" :class="{'active': (currPage === (n))}" @click.prevent="setPage(n)"><a href="#">{{n}}</a></li>
                <li :class="{'disabled': (currPage === totalPage)}" 
                    @click.prevent="setPage(currPage+1)"><a href="#">Next</a></li>
        </ul>
    </nav>
       <ul class="userList">
           <li class="userCard" v-for="(item, index) in filteredcontent.slice(pageStart, pageStart + countPerPage)" :key="item.index">
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
      msg: '人要吃飽,車要充飽',
      textEn : ' To rest is to prepare for a longer journey ahead ',
      content:[],
      countPerPage: 9,//一頁顯示的數量
      currPage: 1, //現在在的頁數
      filter_name: ''//搜尋名稱
    }
  },computed: {
        filteredcontent: function(){
            // 因為 JavaScript 的 filter 有分大小寫，
            // 所以這裡將 filter_name 與 content[n].name 通通轉小寫方便比對。
            var filter_name = this.filter_name.toLowerCase();

            // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 content 回傳。
            return ( this.filter_name.trim() !== '' ) ? 
            this.content.filter(function(item){ return item.Address.toLowerCase().indexOf(filter_name) > -1; }) : 
            this.content;
        },
        pageStart: function(){ //起始顯示項目
            return (this.currPage - 1) * this.countPerPage;
        },
        totalPage: function(){ //計算總頁數
            return Math.ceil(this.filteredcontent.length / this.countPerPage);
        }
  },methods: {
        setPage: function(index){
        if( index <= 0 || index > this.totalPage ){
            return;
        } //如果不介於頁面範圍之內不作任何動作
            this.currPage = index;
        },
  },created(){
        axios.get('https://kevin.kitty-rock.com/joe/json.php').then((response)=>{
        //  const res = JSON.parse(response);
        //自動幫你parse了 @___@
            this.content = response.data;
            console.log(response);
            console.log(this.content);
        },(error)=>{
            console.log(error);
        })
  },
  mounted(){
    //   this.fetchInfo();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
    padding:50px;    
    min-height: 85vh;
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
