<template>
    <div class="content">

        <template v-for="(item,index) in content[0]">
            <h1>{{index+1}}{{item.title}}</h1>       
            <p style="font-size:x-large" v-for="(it,inn) in item.intro">{{it[0]}}</p>
            <img v-bind:src=" item.imgUrl" alt="" style="width: 100px;height: 100px; ">
        </template>
       <!-- <h1>一、行列式的意义</h1>
       <p>行列式在数学中，是一个函数，其定义域为det的矩阵A，取值为一个标量，写作det(A)或 |A|。 </p>
       <h1>二、行列式的计算方法</h1>
       <h2>1.直接展开法</h2>
       <h2>2.余子式法</h2>
       <p>可按行或列展开，如图所示</p>
       <div style="text-align:center">
       <img src="../static/image/chapter1.jpg" style="height: 500px; width: 500px;" alt="">
       </div>
       <h1>三、行列式的性质</h1>


       
       <h1>四、范德蒙德行列式</h1> -->
       <div class="foot">
        <span @click="toBefore">
                上一章
        </span>
        <span @click="toNext">
                下一章
        </span>
    </div>
    </div>
    <router-link to="/Exam"><button class="isLearned">学会了</button></router-link> 
</template>

<script>
    import TheLatex2Math from './gs.vue'
    // import require from 'require'
    export default{
        name:"Login",
        props:{
           msg:String
        },
        data(){
            return{
                chapterNum:1,
                content:[
                    [
                        {title:"行列式的意义",
                        intro:[["行列式在数学中，是一个函数，其定义域为det的矩阵A，取值为一个标量，写作det(A)或 |A|。"],
                        ["行列式在数学中有许多应用，比如高数中我们可以利用雅克比行列式求解，行列式可以表示两个向量的混合积"]],
                        imgUrl:"src\\static\\image\\chapter1.jpg"},
                        //src\static\image\chapter1.jpg
                        {title:"行列式的计算",
                        intro:[["行列式的常用计算方法分为两种:"],["交叉相乘法和余子式展开法。"]] ,                       
                        imgUrl:"src\\static\\image\\chapter1.jpg"},

                        {title:"行列式的性质",
                        intro:[["1.行列式与其转置行列式相等"],["2.交换行列式两行或两列，行列式变号"]
                        ,["3.若两行对应元素成比例，该行列式为零"]] ,                       
                        imgUrl:"src\\static\\image\\chapter1.jpg"},
                        {title:"范德蒙德行列式",
                        intro:[["范德蒙德行列式是一个n阶行列式，如图"],["计算方法是"]] ,                       
                        imgUrl:"src\\static\\image\\chapter1.jpg"},
                        {title:"cramer法则",
                        intro:[["cramer克莱姆法则:"],["这是一种计算齐次方程组的方法"]] ,                       
                        imgUrl:"src\\static\\image\\chapter1.jpg"},
                    ],
                    [
                        {title:"行列式的意义",intro:[]},
                        {title:"行列式的计算",imgUrl:""},
                        {title:"行列式的性质"},
                        {title:"范德蒙德行列式"}
                    ]
                ]
                // require ('../static/image/chapter1.jpg')
                
            }},
        methods:{
            toNext(){
                
            },
            toBefore(){

            }
        },
        components:{
          Mybutton  ,
          TheLatex2Math
        }
    }
    import Mybutton from './Mybutton.vue'
</script>

<style scoped>
.content{
    width: 1000px;
    height: 1230px;
    background-color: rgb(219, 255, 243);
    margin-left: 50%;
    transform: translate(-50%);
}
.loginbar{
        margin:30px auto;
        text-align: center;
        z-index: 10;
        height:500px;
        width:500px;
        border-radius: 20px;
        background-color: rgb(214, 255, 255);
        font-size: large;
        font-weight: 700;
    }
    .logintext{
        width: 300px;
        height: 40px;
        margin-top: 40px;
        border:solid 2px rgb(164, 255, 255);

        border-radius: 7px;
        opacity: 0.8;
        outline: none;
    }
    .logintext:first-child{
         margin-top: 0;
    }
    .textbox{
        position: absolute;
        top:100px;
        left:50%;
        transform: translate(-50%);
    }
    .btn{
        position: absolute;
        bottom:60px;
        text-align: center;
        left:50%;
        transform: translate(-50%);
    }

    .isLearned{
        position: fixed;
        bottom: 300px;
        right: 5%;
        background-color: rgb(188, 224, 255);
        border:none;
        width: 100px;
        height: 50px;
        border-radius: 10px;
        font-size: large;
    }
    .foot{
        display: absolute;
        /* text-align: center; */
        left:45%;
    
        font-size: large;
        cursor: pointer;
        bottom:0px;
    }
    .foot span{
        margin-left: 30px;
        background-color: rgb(188, 224, 255);
    }
</style>