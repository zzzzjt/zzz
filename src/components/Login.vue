<template>
    <div>
        用户名：<input type="text" v-model="name"><br>
        密码：<input type="password" v-model="pwd"><br>
        <input type="button" value="登录" @click='loginHandle'>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            name:'',
            pwd:''
        }
    },
    methods:{
        loginHandle(){
            localStorage.setItem('user',{id:1,name:this.name,pwd:this.pwd});
            this.$router.push({
                name:'music'
            });
            this.$ajax({
                method:'get',
                url:'/music?id=1',

            }).then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            });
        }
    }
}
</script>