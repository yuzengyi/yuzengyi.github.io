<script setup>
import Home from './pages/Home.vue';
import KnowledgeGraph from './pages/KnowledgeGraph.vue';
import KnowledgeExpain from './pages/KnowledgeExplain.vue';
import Topbar from './components/Topbar.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
</script>
<template>
  <div id="app">
      <!-- <Login></Login> -->
      <Topbar></Topbar>
      <router-view></router-view>
  </div>
</template>
<script>
  
</script>
<style scoped>
  #app{
    width: 100%;
  }
</style>