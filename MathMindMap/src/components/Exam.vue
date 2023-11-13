<template>
    <div class="content" style="text-align:center">
      <!-- v-if="minute!=20"  -->
        <div class="title" style="text-align:center">
            下面线性代数行列式章节测试
            限时20min    
            <p style="text-align:center">剩余时间:{{minute}}分{{second}}秒 你的分数为{{score}}</p>
            <el-button type="primary" id="start" @click="start" round>开始考试</el-button>
            <el-button type="danger" id="pause" @click="pause" round>暂停考试</el-button>
            <el-button type="primary" id="submit" @click="submit" round>提交试卷</el-button>
            <div style="text-align:left;font-size:xx-large">一、选择题60分(共10题,每题6分)</div>
            <div class="choice" style="text-align:left" v-for="(item,index) in choiceQuestionList" :key="index" v-bind:data-index="index">              
              <p><span>{{(index+1)}}、</span><img v-bind:src="item.imgUrl" style="vertical-align:middle"> <span v-if="item.flag">正确答案:{{item.answer}}</span> </p> 
              <div  style="text-align:center">
                <input type="radio" v-bind:name="index"> A 
                <input type="radio" v-bind:name="index"> B
                <input type="radio" v-bind:name="index"> C
                <input type="radio" v-bind:name="index"> D
              </div>
            </div>
            <div style="text-align:left;position:relative">二、填空题40分(共10题,每题4分)</div>
              <div  v-for="(item,index) in blankQuestionList" :key="index">
                <div style="text-align: left;"><p>{{(index+1)}}、<img style="vertical-align:middle" v-bind:src="item.imgUrl"></p></div>
            
                <span style="position:absolute;right:30px;bottom:40px;font-size:large">你的答案:<input style="height:30px;width:100px;" 
                type="text" v-model="item.userAnswer" name="" id=""> <span v-if="item.flag">正确答案:{{item.answer}}</span></span> 
              </div>
            <option value=""></option>


           
        </div>
   
    </div>
</template>

<script>
import { vModelCheckbox } from 'vue'
import TheLatex2Math from './gs.vue'
var time;
    export default{
        name:"Login",
        props:{
           msg:String
        },
        data(){
            return{
               minute:20,
               second:0,
               score:'',
               choiceQuestionList:[],
              blankQuestionList:[]        
            }
        },
        watch:{
          
        },
        methods:{
          start(){
            var startBtn=document.getElementById('start');
            var submitBtn=document.getElementById('submit');
            submitBtn.disabled=false;
            startBtn.disabled=true;
            var length=10;           
            var choiceQuestionList = [
               {imgUrl:'../src/static/image/choice1.jpg',answer:'C',userAnswer:'',flag:false},
               {imgUrl:'../src/static/image/choice2.jpg',answer:'C',userAnswer:'',flag:false},
               {imgUrl:'../src/static/image/choice3.jpg',answer:'A',userAnswer:'',flag:false},
               {imgUrl:'../src/static/image/choice4.jpg',answer:'A',userAnswer:'',flag:false},
               {imgUrl:'../src/static/image/choice5.jpg',answer:'C',userAnswer:'',flag:false},
               {imgUrl:'../src/static/image/choice6.jpg',answer:'B',userAnswer:'',flag:false},
               {imgUrl:'../src/static/image/choice7.jpg',answer:'C',userAnswer:'',flag:false},
               {imgUrl:'../src/static/image/choice8.jpg',answer:'D',userAnswer:'',flag:false},
               {imgUrl:'../src/static/image/choice9.jpg',answer:'C',userAnswer:'',flag:false},
               {imgUrl:'../src/static/image/choice10.jpg',answer:'D',userAnswer:'',flag:false}];
          var blankQuestionList=[
               {imgUrl:'../src/static/image/blank1.jpg',userAnswer:'',answer:'(a-d)(c-b)'},
               {imgUrl:'../src/static/image/blank2.jpg',userAnswer:'',answer:'0'},
               {imgUrl:'../src/static/image/blank3.jpg',userAnswer:'',answer:'-125/54'},
               {imgUrl:'../src/static/image/blank4.jpg',userAnswer:'',answer:'+'},
               {imgUrl:'../src/static/image/blank5.jpg',userAnswer:'',answer:'-1'},
               {imgUrl:'../src/static/image/blank6.jpg',userAnswer:'',answer:'5'},
               {imgUrl:'../src/static/image/blank7.jpg',userAnswer:'',answer:'8'},
               {imgUrl:'../src/static/image/blank8.jpg',userAnswer:'',answer:'18'},
               {imgUrl:'../src/static/image/blank9.jpg',userAnswer:'',answer:'6'},
               {imgUrl:'../src/static/image/blank10.jpg',userAnswer:'',answer:'6,3'},
               {imgUrl:'../src/static/image/blank11.jpg',userAnswer:'',answer:'(n-1)(n+1)'},
               {imgUrl:'../src/static/image/blank12.jpg',userAnswer:'',answer:'E'},
               {imgUrl:'../src/static/image/blank13.jpg',userAnswer:'',answer:'-2'},
               {imgUrl:'../src/static/image/blank14.jpg',userAnswer:'',answer:'-1/60'},
              ]  


            function getRandomArrayElements(arr, count) {
              var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
              while (i-- > min) {
                  index = Math.floor((i + 1) * Math.random());
                  temp = shuffled[index];
                  shuffled[index] = shuffled[i];
                  shuffled[i] = temp;
              }
              return shuffled.slice(min);
            }
            this.choiceQuestionList=getRandomArrayElements(choiceQuestionList, 10);
            this.blankQuestionList=getRandomArrayElements(blankQuestionList,10);



            let that=this;
            time=setInterval(function(){
                if (that.$data.minute==0&&that.$data.second==0){
                  alert("考试结束!");
                  submit();
                }
                else if (that.$data.second==0){
                  that.$data.minute--;
                  that.$data.second=60;
                }
                that.$data.second--;
            },1000)
          },
          pause(){
            var startBtn=document.getElementById('start');
            var pauseBtn=document.getElementById('pause');
            startBtn.disabled=false;
            pauseBtn.disabled=true;
            clearInterval(time);
          },
          submit(){
              let ele=document.getElementsByClassName('choice');
              var choiceList=["A","B","C","D"];
              let obj=[];
              for (let i=0;i<5;i++){
                let select=ele[i].children[1];
                for (let j=0;j<4;j++){
                  if (select.children[j].checked==true){
                    var userAnswer=choiceList[j];
                    obj.push(userAnswer);
                  }
                 
                }
                this.choiceQuestionList[i].flag=true
                // console.log(ele[i].dataset.index);
              }
              var score=0;
              for (let i=0;i<5;i++){
                if (obj[i]==this.choiceQuestionList[i].answer){
                  score+=6;
                }
              }
              for (let i=0;i<4;i++){
                console.log(this.blankQuestionList[i].userAnswer,this.blankQuestionList[i].answer);
                if (this.blankQuestionList[i].userAnswer==this.blankQuestionList[i].answer){
                  score+=5;
                }
              }
              this.score=score;
              if (score>=60){
                alert("恭喜你通过考试");
              }
              else {
                alert("你的分数是"+this.score+",没有及格,请重新学习");
                this.$router.push({
                  path:'./KnowledgeExplain'
                })
              }
          }
        },
        // created(){
        //   var submitBtn=document.getElementById('start');
        //   submitBtn.disabled=true;
        // },
        components:{
          Mybutton  ,
          TheLatex2Math
        }
    }
    import Mybutton from './Mybutton.vue'
</script>

<style scoped>
  input{
    width:20px;
    height:20px;
    margin-left: 20px;
  }
  .title{
    font-size: xx-large;
  }
  .content{
    background-color: rgb(231, 250, 255);
  }
</style>