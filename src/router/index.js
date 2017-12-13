import Vue from 'vue'
import Router from 'vue-router'
import Carousel3d from 'vue-carousel-3d'
import HelloWorld from '@/components/HelloWorld'
import goodtime from '@/components/goodtime'
import color from '@/components/color'
import photo from '@/components/photo'
import user from '@/components/user'

// 安裝了
// vue-carousel-3d
// axios
// sass 

Vue.use(Router)
Vue.use(Carousel3d)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodtime',
      name: 'goodtime',
      component: goodtime
    },
    {
      path: '/color',
      name: 'color',
      component: color
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})
