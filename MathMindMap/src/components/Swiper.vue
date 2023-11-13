<script setup></script>
<template>
    <div class="content">
        <img id="img" src="../static/image/swiper1.JPG" style="height:400px" alt="">
    </div>
</template>
<script>
import { enableTracking } from '@vue/reactivity';

    export default{
        data(){
            return{

            }
        },
        methods:{

        },
        mounted(){

        },
        created(){
            var i=1;
            var timer=setInterval(function(){
                let ele=document.getElementById('img');
                ele.src="src//static//image//swiper"+i+".JPG";
                i++;
                if (i>3) i=i%3;
            },3000)
        }
    }
</script>
<style scoped>
    .content{
        margin:0 auto;
        width:1200px;
        height:400px;
        border-radius: 40px;
        background-color: rgba(212, 212, 212, 0.495);
    }
</style>



