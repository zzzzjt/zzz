import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Music from './components/Music.vue'
import Discover from './components/Discover.vue'
import Toplist from './components/Toplist.vue'
import Playlist from './components/Playlist.vue'
import Login from './components/Login.vue'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$http=axios

const router =new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/home',
      name:'home',
      redirect:'/home/discover',
      component:Home,
      children:[
        {
          path:'discover',
          name:'discover',
          component:Discover
        },
        {
          path:'toplist',
          name:'toplist',
          component:Toplist
        },
        {
          path:'playlist',
          name:'playlist',
          component:Playlist
        }
      ]
    },
    {
      path:'/music',
      name:'music',
      component:Music,
      meta:{
        auto:true
      }
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
});
router.beforeEach((to,from,next)=>{
  if(to.meta.auto){
    if(localStorage.getItem('user')){
      next();
    }else{
      next({
        path:'/login'
      });
    }    
  }else{
    next();
  }
})
new Vue({
  router,
  axios,
  render: h => h(App),
}).$mount('#app')
