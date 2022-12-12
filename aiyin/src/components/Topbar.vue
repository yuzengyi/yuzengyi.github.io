<template>
    <div class="banner">
        <div style="text-align:center;position:relative;line-height: 80px;font-size:large">
            <router-link to="/Home" class="topbar">首页</router-link>
            <router-link to="/Intro" class="topbar">网站简介</router-link>
            <router-link to="/Guide" class="topbar">操作指南</router-link>
            <router-link to="/Setting" class="topbar">个性化设置</router-link>
            <span class="user" >
                用户名
            </span>
            <router-link to="/Login" class="login">登录</router-link>
            <router-link to="/Register" class="register">注册</router-link>
        </div>
        
    </div>
</template>
<script>
    import KnowledgeGraph from '../pages/KnowledgeGraph.vue';
    import Home from '../pages/Home.vue';
    import Login from '../components/Login.vue';
    export default{
        name:"Topbar",
        data(){
            return{
                topbar:['首页','知识图谱','知识讲解','基础设置']
            }
        },
        toNavigate(){
            return;
        }
    }
</script>

<style scoped>
    .banner{
        height:80px;
        width: 1200px;
        background-color: rgb(247, 247, 247);
    }
    .topbar{
        margin-left: 60px;
        font-size:xx-large ;
        color:black;
    }
    .topbar:first-child{
        margin-left: 0;
    }

    *{
        margin:0;
    }
    .user{
        position:absolute;
        right:20px;
        top:10px;
        border-radius: 30px;
        width: 60px;
        height:60px;
        border: solid 1px black;
        cursor: pointer;
        line-height:60px;
        background-color: aliceblue;
    }
    .login{
        position:absolute;
        right:180px;
        line-height: 80px;
        cursor: pointer;
        color: black;       
        font-weight:400; 
    }
   .register{
        position:absolute;
        right:130px;
        line-height: 80px;
        cursor: pointer;
        color: black;
        font-weight: 400;
    }
    .login:hover{
        background-color: rgb(247, 247, 247);
        color:blue; 
        
    }
    .register:hover{
        background-color: rgb(247, 247, 247);
        color:blue; 
        
    }
</style>