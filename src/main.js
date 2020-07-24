import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
const App = () => import('./App.vue');
const Home = () => import('./components/Home.vue');
const Music = () => import('./components/Music.vue');
const Discover = () => import('./components/Discover.vue');
const Toplist = () => import( './components/Toplist.vue');
const Playlist = () => import('./components/Playlist.vue');
const Login = ()=> import('./components/Login.vue');


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
