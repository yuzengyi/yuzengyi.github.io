<script setup>
import Mybutton from '../components/Mybutton.vue'
import SelectBox from '../components/SelectBox.vue'
import KnowledgeGraph from '../pages/KnowledgeGraph.vue';
</script>
<template>
  <div class="content" >
    <div class="title" style="font-size: xx-large;">个人信息设置</div>
    <div style="font-size:x-large;">用户名: <input type="text"
       style="border:none;width:100px;height:30px;border-radius:5px;text-decoration:none;outline: none" class="text" name="" id="" v-model="userName" placeholder=""></div>
    <div style="font-size:x-large;">学习目的: 
        <select name="" id="" v-model="purpose" style="border:none;width:100px;height:30px;border-radius:5px;text-decoration:none;outline: none">
            <option value="复习期中/期末考">复习期中/期末考</option>
            <option value="考研">考研</option>
            <option value="兴趣爱好">兴趣爱好</option>
        </select>
    </div>
    <div style="font-size:larger;">已掌握的内容</div>
    <div v-for="(item,i) in name" :key="i"  style="text-align:center">
      <SelectBox v-model="content"  v-bind:msg=item>{{i}}</SelectBox>
    </div>
    <Mybutton msg="保存"  style="text-align:center" @click="save"></Mybutton> 
  </div>
</template>
<script>
  export default{
    name:'App',
    components:{
      Mybutton,
      SelectBox
    },
    data(){
      return{
        userName:'',
        purpose:'',
        content:'',
        name:["线性方程组","矩阵","二次型","线性空间","线性变换","欧几里得空间"],
      }
    },
    methods:{
        save(){
          console.log(this.content);
            let person={
              user:this.userName,
              purpose:this.purpose
            }
            localStorage.setItem("person",JSON.stringify(person));
            console.log(JSON.parse(localStorage.getItem("person")))
            alert("已保存");
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
    width: 1200px;
    height: 800px;
    background-image: linear-gradient(rgb(235, 248, 255),rgb(205, 222, 255)) ;
    text-align: center;
  }
</style>