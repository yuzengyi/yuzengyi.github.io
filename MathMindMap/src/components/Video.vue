<script setup>
</script>
<template>
    <div class="content">
        <div class="title">&nbsp; &nbsp;欢迎来到视频讲解部分</div>
        <video :src="videoUrl[index]" controls></video>
        <div style="text-align:center"><button v-if="index!=0" @click="prev">上一个</button> <button v-if="index!=4" @click="next">下一个</button><button @click="returnBack">返回</button></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                videoUrl:["src/static/video/1.mp4","src/static/video/2.mp4","src/static/video/3.mp4","src/static/video/4.mp4","src/static/video/5.mp4"],
                index: 0,
            }
        },
        methods:{
            returnBack(){
                this.$router.push({
                    path:'KnowledgeExplain'
                })
            },
            prev:function(){
                this.index--;
            },
            next:function(){
                this.index++;
            },
        },
        created(){

        }
    }
</script>
<style scoped>
    .title{
        text-align: center;
        font-size: xx-large;
    }
    button{
        width: 100px;
        height: 50px;
        margin-left:30px;
        border-radius: 10px;
        border:none;
        background-color:rgb(210, 255, 255);
    }
    button:hover{
        background-color:rgb(176, 255, 255);
    }
    .title{
        font-size:x-large;
        text-align: center;
        margin: 0 auto;
        height:50px;
        line-height: 50px;
        background-image: url(../static/image/tabbar.jpg);
        background-repeat:no-repeat;
        background-position: 50%;
        color:white;
    }
</style>