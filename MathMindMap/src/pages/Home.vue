<script setup>
import Mybutton from '../components/Mybutton.vue'
import SelectBox from '../components/SelectBox.vue'
import KnowledgeGraph from '../pages/KnowledgeGraph.vue';
import ChartLine from '../components/ChartLint.vue'
import MyChart from '../components/MyChart.vue'
import Swiper from '../components/Swiper.vue'
import KnowledgeGraph2 from '../components/KnowledgeGraphImplement.vue'
</script>
<template>
  <div class="container" >
    <div class="title" style="text-align:center;font-size: xx-large;">欢迎来到线性代数可视化教学平台</div>
    <img src="../static/image/Aiyin.jpg" style="height:120px;margin: 0 auto;border-radius: 60px;"  alt="">
    <Swiper></Swiper>
    <div style="text-align:center;font-size: x-large;">线性代数知识图谱</div>
  
    <!-- <div class="learningitem" v-for="(item,i) in list" :key="i" @click="gotoLearn" 
    data-index="i" style="text-align:center;display:inline-table;margin-left:30px">
      <div>{{item}}</div>
    </div> -->
    <KnowledgeGraph2 class="graph"></KnowledgeGraph2>
    <!-- <MyChart></MyChart> -->
  </div>
</template>
<script>
  import { VueEcharts } from 'vue3-echarts';
  export default{
    name:'App',
    components:{
      Mybutton,
      SelectBox,
      ChartLine,
      MyChart,
      Swiper,
      VueEcharts,
      KnowledgeGraph2
    },
    data(){
      return{
        list:["线性方程组","矩阵","二次型","线性空间","线性变换","欧几里得空间"],
        name:'张雪',
        xData: ['2020-02', '2020-03', '2020-04', '2020-05'],
        yData: [30, 132, 80, 134],
      }
    },
    mounted () {
      //  const {name,xData,yData} = this
      //  console.log(this.$refs)
      //  this.$refs.chart_line_one.initChart(name,xData,yData)
    },
    methods:{
      gotoLearn(){
        let status=localStorage.getItem('status');
        if (status=='logined'){
          this.$router.push({
            path:'KnowledgeGraph'
          })
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
      
    }
  }
</script>
<style scoped>
  .graph{
    background-color: rgb(241, 241, 241);
  }
  .container{
    width: 1200px;
    height: 500px;
    /* background-image: linear-gradient(rgb(247, 226, 255),rgb(173, 201, 255)) ; */
    text-align: center;
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