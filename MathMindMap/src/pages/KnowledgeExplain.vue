
<script setup>
import '@/assets/css/knowledgegraph.css'
import KnowledgeBranch from '../components/KnowledgeBranch.vue'
</script>
<template>
  <div class="content">
    <div class="title">&nbsp; &nbsp;欢迎来到知识讲解部分</div>
    <div class="select">
      <div class="video" @click="toVideo">&nbsp;&nbsp;&nbsp;视频讲解</div>
      <div class="graph" @click="toGraph">图文讲解</div>
      <div class="visualization" @click="toVisualized">&nbsp;可视化</div>
      <div class="bottom"></div>
    </div>
  </div>
</template>
<script>
export default{
    name:'App',
    components:{
        KnowledgeBranch 
    },
data(){
  return{

  }
},
methods:{
toVideo(){
  this.$router.push({
      path:'Video'
  })
},
toGraph(){
  this.$router.push({
      path:'GraphExplain'
  })
},
toVisualized(){
  this.$router.push({
      path:'Visualized'
  })
}
},
created(){
  window.onhashchange=()=>{
    console.log(location.hash);
  }
}
}
</script>
<style scoped>
.content{
  height:1000px;
  background-color:rgb(238, 255, 252) ;
}
.video{
  background-image: url(../static/image/video.png);
  background-size: cover;
  left:450px;
  top:50px;
}
.graph{
  background-image: url(../static/image/graph.png);
  background-size: cover;
  left:303px;
  top:200px;
}
.visualization{
  background-image: url(../static/image/game.png);
  background-size: cover;
  left:600px;
  top:200px;
}
.bottom{
  background-image: url(../static/image/bottom.png);
  background-size: cover;
  left:450px;
  top:345px;
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
.select div{
  height:300px;
  width: 300px;
  position:absolute;
  font-size:xx-large;
  line-height: 300px;
  color:white;
  font-weight: 700;
}
.select{
  text-align: center;
  position:relative;
}
</style>