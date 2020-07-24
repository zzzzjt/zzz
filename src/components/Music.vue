<template>
    <div id="music">
        <div id="text">
        <audio :src='getCurrentSongSrc' autoplay controls ></audio>
        <ul>
            <li v-for='(item,index) in musicData' :key="item.id" :class='{active:currentIndex==index}' @click='clickHandle(index)'>
                <h2>{{item.id}}-{{item.name}}</h2>
            </li>
        </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'Music',
    data(){
        return{
        musicData:musicDate,
        currentIndex:0
        }  
    },
    methods:{
        clickHandle(index){
            return this.currentIndex=index
        }
    },
    computed:{
        getCurrentSongSrc:function(){
            console.log(this.musicData[this.currentIndex].songSrc);
            return this.musicData[this.currentIndex].songSrc;
            
        }

    },
    mounted(){
        
    }
};

var musicDate=[
    {id:1,name:'处处吻-杨千嬅',author:'杨千嬅',songSrc:require('../assets/处处吻-杨千嬅.mp3')},
    {id:2,name:'恋爱ing-五月天',author:'五月天',songSrc:require('../assets/恋爱ing live in the sky-五月天.mp3')},
    {id:3,name:'迷迭香-周杰伦',author:'周杰伦',songSrc:require('../assets/迷迭香-周杰伦.mp3')},
    {id:4,name:'知足-五月天',author:'五月天',songSrc:require('../assets/知足 live in the sky-五月天.mp3')}
];
</script>
<style>
    *{
        padding: 0;
        margin: 0;
       
    }
    #music{
        background: url(../assets/bd.jpg) no-repeat;
        background-size: cover;
        height: 700px;
        position: relative;
        
    }
    #text{
        position:absolute;
        padding-top: 20px;
        height: 100%;
        width: 100%;
        background: rgba(225,225,225,0.3); 
    }
    ul{
        list-style: none;
    }
    ul li{
        margin: 20px 20px;
        padding: 10px;
        border-radius: 5px;
    }
    ul li.active{
        opacity: 0.7;
        background-color:rgb(90, 172, 70);
    }
</style>