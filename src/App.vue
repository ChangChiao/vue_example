<template>
  <div id="app">
    <header>
    <img src="./assets/logo.png">
      <nav>
        <router-link to="/">首 頁</router-link>
        <router-link to="/goodtime">良辰吉時</router-link>
        <router-link to="/color">暗綠稀紅</router-link>
        <router-link to="/photo">浮光掠影</router-link>
        <router-link to="/user">電光石火</router-link>
      </nav>
    </header> 
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view/>
        </keep-alive>
      </transition>
    <footer>
      <p>{{copyright}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      copyright:'All rights reserved; those responsible for unauthorized reproduction will be prosecuted.',
    }
  }
}
</script>

<style>
@import './assets/css/reset.css';
#app {
  font-family: 'Microsoft JhengHei' ,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header{
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: steelblue;
}
header img{
  width: 40px;
}
header a{
   text-decoration: none;
   color: #fff;
   letter-spacing: 2px;
   margin: 0 15px;
}
header a:hover,header a:active,header a:focus{
  text-decoration: none;
  color: #ddd;
}

footer{
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #333;
  color: #fff;
}


.fade-enter-active, .fade-leave-active{
  transition: all .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
