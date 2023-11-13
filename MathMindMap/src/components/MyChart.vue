<template>
    <div>
    <div id='showorders' style='width:300px; height:500px'></div>
    
    </div>
  </template>
   
  <script>
  import { ref, onMounted } from "vue";
  import * as echarts from 'echarts';
  import $ from 'jquery';
  onMounted(
    () => {
      init()
    }
  )
  export default {
      data(){
      },
      methods:{
          showorders(){
            var ROOT_PATH = 'https://echarts.apache.org/examples';
              // 基于准备好的dom，初始化echarts实例
              var chartDom = document.getElementById('showorders');
              var myChart = echarts.init(chartDom);
              // 指定图表的配置项和数据
              var option;

              
option = {
  title: {
    text: 'Basic Graph'
  },
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'none',
      symbolSize: 50,
      roam: true,
      label: {
        show: true
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      edgeLabel: {
        fontSize: 20
      },
      data: [
        {
          name: 'Node 1',
          x: 300,
          y: 300
        },
        {
          name: 'Node 2',
          x: 500,
          y: 300
        },
        {
          name: 'Node 3',
          x: 550,
          y: 100
        },
        {
          name: 'Node 4',
          x: 550,
          y: 500
        }
      ],
      // links: [],
      links: [
        {
          source: 0,
          target: 1,
          symbolSize: [5, 20],
          label: {
            show: true
          },
          lineStyle: {
            width: 5,
            curveness: 0.2
          }
        },
        {
          source: 'Node 2',
          target: 'Node 1',
          label: {
            show: true
          },
          lineStyle: {
            curveness: 0.2
          }
        },
        {
          source: 'Node 1',
          target: 'Node 3'
        },
        {
          source: 'Node 2',
          target: 'Node 3'
        },
        {
          source: 'Node 2',
          target: 'Node 4'
        },
        {
          source: 'Node 1',
          target: 'Node 4'
        }
      ],
      lineStyle: {
        opacity: 0.9,
        width: 2,
        curveness: 0
      }
    }
  ]
};




















              option && myChart.setOption(option);
          },
         
      },
      mounted() {
          this.showorders()
      },
   
  }
  </script>
   
  <style>
   
  </style>