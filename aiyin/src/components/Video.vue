<script setup>
</script>
<template>
    <div class="content">
        <div class="title">欢迎来到视频讲解部分</div>
        <video v-bind:src="videoUrl"></video>
        <div style="text-align:center"><button>上一个</button> <button>下一个</button><button @click="returnBack">返回</button></div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                videoUrl:"src/static/video/1.mp4"
            }
        },
        methods:{
            returnBack(){
                this.$router.push({
                    path:'KnowledgeExplain'
                })
            }
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
</style>