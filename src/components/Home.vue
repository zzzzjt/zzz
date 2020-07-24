<template>
<div>
    <div id="home">
        <router-link :to="{name:'discover'}">推荐</router-link>
        <router-link :to="{name:'toplist'}">排行榜</router-link>
        <router-link :to="{name:'playlist'}">歌单</router-link>
    </div>
    <router-view></router-view>
</div>
</template>
<script>
export default {
    name:'Home'
}
</script>
<style>
    #home{
        
        width: 100%;
        padding: 10px;
        background-color: rgb(179, 150, 97);
    }
    a{
        margin-left: 20px;
    }
</style>