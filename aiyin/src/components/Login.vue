<template>
    <div class="content">
        <div class="loginbar" style="padding-top:30px" >
            <div style="font-size:xx-large;cursor: pointer;">登录</div>
            <div class="textbox">
                <input type="text" name="" id="" class="logintext"  v-model="userName" placeholder="用户名" > 
                <input type="password" name="" id="" class="logintext" v-model="pwd" placeholder="密码">
            </div>
            <div @click="toRegister" class="tip">没有账号,去注册</div>
            <div class="btn" >  
                <Mybutton msg="登录" style="display:inline;" @click="login"></Mybutton>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:"Login",
        props:{
           msg:String
        },
        data(){
            return{
                userName:'',
                pwd:''
            }
        },
        created:function(){
            console.log(JSON.parse(localStorage.getItem("data")));
        },
        components:{
          Mybutton  
        },
        methods:{
            login(){
                let user=JSON.parse(localStorage.getItem("data"));
                let userName=this.$data.userName;
                let pwd=this.$data.pwd;
                if (userName==user.userName && pwd==user.password){
                    alert("登录成功");
                    localStorage.setItem('status','logined');
                    this.$router.push({
                        path:'Home'
                    })
                }
                else{
                    alert("用户名或密码错误,请重试!");
                    this.userName='';
                    this.pwd='';
                }
            },
            toRegister(){
                this.$router.push({
                        path:'Register'
                })
            }
        }
    }
    import Mybutton from './Mybutton.vue'
</script>

<style scoped>

.content{
    margin:0px auto;
    overflow:auto;
    background-image: linear-gradient(rgb(226, 226, 255),rgb(175, 251, 234));
    width: 1200px;
    height: 800px;
}
.tip{
    position: absolute;
    font-size: larger;
    bottom: 150px;
    left:50%;
    transform: translate(-50%);
    cursor: pointer;
}
.tip:hover{
    color:red;
}
.loginbar{
    z-index: 10;
    height:500px;
    width:500px; 
    margin: 100px auto;
    text-align: center;
    border-radius: 20px;
    background-color: rgb(240, 240, 240);
    font-size: large;
    font-weight: 700;
}
.logintext{
    width: 350px;
    height: 50px;
    font-size: larger;
    margin-top: 40px;
    border:solid 2px rgb(232, 232, 232);
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
</style>