<template>
  <div>
    <div id="app">
      <!-- 命名路由 -->
      <router-link :to="{name:'home'}">发现音乐</router-link>
      <router-link :to="{name:'music'}">我的音乐</router-link>
      <router-link :to="{name:'login'}" v-if="showname">登录</router-link>
      <a href="/home" @click="exit">退出</a>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showname: true,
    };
  },
  methods: {
    exit() {
      console.log("清除啦");
      localStorage.clear();
    },
  },
  updated() {
    if (localStorage.getItem("user")) {
      this.showname = false;
    } else {
      this.showname = true;
    }
  },
};
</script>
<style>
#app {
  width: 100%;
  height: 30px;
  padding: 10px;
  background-color: rgb(240, 193, 124);
}
a {
  padding: 10px;
}
</style>