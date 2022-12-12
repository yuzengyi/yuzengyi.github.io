
<script setup>
    import '@/assets/css/knowledgegraph.css'
    import KnowledgeBranch from '../components/KnowledgeBranch.vue'
</script>
<template>
  <div class="content">
    <div class="text" >走进线性代数的神秘世界</div>
    <div class="selectbar" style="top:100px;left:400px" @click="show1">
        行列式
    </div>
    <div class="selectbar" style="top:400px;left:400px" @click="show2">
        线性方程组
    </div>
    <div class="graph1" v-if="isShow1">
      <template v-for="(item,index) in determinant" :key="index">
        <KnowledgeBranch @click="toLearn" v-bind:msg=item>{{item}}</KnowledgeBranch> 
      </template>
    </div>
    <div class="graph2" v-if="isShow2">
      <template v-for="(item,index) in linear" :key="index">
        <KnowledgeBranch @click="toLearn" v-bind:msg=item>{{item}}</KnowledgeBranch>
      </template>
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
        determinant:['n阶行列式','行列式的计算','行列式展开','cramer法则'],
        linear:['解的判定定理','解的结构'],
        isShow1:false,
        isShow2:false
      }
    },
    created(){
      window.onhashchange=()=>{
        console.log(location.hash);
      }
    },
    methods:{ 
      show1(){
        if (this.$data.isShow1===true){
          this.$data.isShow1=false;
        }
        
        else {console.log(this.$data.isShow1);
          this.$data.isShow1=true;
        } 
      },
      show2(){
        if (this.$data.isShow2===true){
          this.$data.isShow2=false;
        }
        else{
          this.$data.isShow2=true;
        } 
      },
      toLearn(){
        this.$router.push({
          path:'KnowledgeExplain'
        })
      }
    }
    }
</script>
<style scoped>
  .graph1{
    position: absolute;
    right:200px;
    top:50px;
  }
  .graph2{
    position: absolute;
    right:200px;
    bottom:250px;
  }
  .selectbar{
    position:absolute;
  }
  .text{
    font-size:xx-large;
  }
  .content{
    width:1200px;
    height:800px;
    background-image: linear-gradient(rgb(243, 221, 255),rgb(28, 209, 200)) ;
    text-align: center;
  }
  .selectbar{
    cursor: pointer;
  }
</style>