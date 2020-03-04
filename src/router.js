import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login.vue';
import Post from './components/Post.vue';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path:'/',
      name:'login',
      component: Login
    },{
      path:'/post',
      name:'post',
      component: Post
    }
  ]
})