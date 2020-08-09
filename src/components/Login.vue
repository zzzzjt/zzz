<template>
  <div class="login">
    <h2>登录页面</h2>用户名：
    <input type="text" v-model="name" />
    <br />密码：
    <input type="password" v-model="pwd" />
    <br />
    <input type="button" value="登录" @click="loginHandle" />
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      name: "",
      pwd: "",
    };
  },
  methods: {
    loginHandle() {
      localStorage.setItem("user", { id: 1, name: this.name, pwd: this.pwd });
      this.$router.push({
        name: "music",
      });
      this.$ajax({
        method: "get",
        url: "/music?id=1",
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style>
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -100px -200px;
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto; */
  /* width: 400px;
  height: 200px;
  margin: 10px auto; */
  position: absolute;
  width: 400px;
  height: 200px;
  text-align: center;
  line-height: 30px;
  border: 1px solid rgb(219, 213, 204);
}
</style>