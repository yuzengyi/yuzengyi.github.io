<script setup>
</script>
<template>
  <div class="content" >
      <p style="text-align:center;font-size:xxx-large;color:blueviolet">网站简介</p>
      <p style="font-size:x-large;text-indent: 2em;"> 本网站是一个集知识图谱呈现、个性化学习选择（包括视频讲解、图文讲解、数学可视化）、自动批改、考试检查等功能于一体的，实现全过程体系化新颖化高等院校数学知识学习的平台。在网站的开发过程中，我们主要着眼于知识体系梳理、学习闭环构建，以原有可视化平台为基础，深入拓展，以便拥有更好的用户体验和更佳的学习效果。如果你对线性代数的学习存在疑惑，本网站将会提供一种极佳的学习路径，帮助你快速掌握知识、巩固知识。</p>
      <p style="font-size:x-large;text-indent: 2em;">下面是我们网站的主体思路和流程:</p>
      <div><img src="../static/image/intro.jpg.png" alt=""></div>
  </div>
</template>
<script>
  export default{
    name:'App',
    components:{
    },
    data(){
      return{
        
      }
    },
    methods:{
      gotoLearn(){
        let status=localStorage.getItem('status');
        if (status=='logined'){
          this.$router.push({
            path:'KnowledgeGraph'
          })
          let userName=JSON.parse(localStorage.getItem("data")).userName;
        }
        else{   
          alert("请先登录!");
          this.$router.push({
            path:'Login'
          })
        }

      }
    },
    created(){
      var ele1=document.getElementsByClassName('learningitem');
      
    }
  }
</script>
<style scoped>
  .content{
    width: 1200px;
    height: 1000px;

    /* background-image: linear-gradient(rgb(255, 243, 243),rgb(246, 249, 255)) ; */
    /* text-align: center; */
  }
  .learningitem{
    height: 200px;
    width: 200px;
    margin: 0 auto;
    border-radius: 100px;
    background-color: aquamarine;
    border:solid rgb(177, 243, 147);
    line-height: 200px;
    font-size: x-large;
  }
  .learningitem:hover{
    background-color: aqua;
  }

</style>