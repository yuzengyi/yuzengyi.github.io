<template>
    <div class="content">
        <div class="loginbar" style="padding-top:30px">
            <div style="font-size:xx-large;cursor:pointer">注册</div> 
            <div class="textbox" >
                <input type="text" name="" id="" class="logintext" v-model="userName" placeholder="用户名:"> <span style="color:red;height: 30px;">{{tip.userName}}</span>
                <input type="password" name="" id="" class="logintext" v-model="pwd" placeholder="密码:">   <span style="color:red;height: 30px;">{{tip.pwd}}</span>
                <input type="password" name="" id="" class="logintext" v-model="repwd" placeholder="重复密码:"> <span style="color:red;height:30px;">{{tip.repwd}}</span>
            </div>
            <div class="tip" @click="toLogin">已有账号,去登录</div>
            
            <div class="btn" >  
                <Mybutton msg="注册" style="display:inline;" @click="register"></Mybutton>
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
            return {
                userName:'',
                pwd:'',
                repwd:'',
                tip:{
                    userName:'',
                    pwd:' ',
                    repwd:''
                }
            }
        },
        watch:{
            'userName':function(newVal){
                if (String(newVal).length<3||String(newVal).length>10){
                    this.tip.userName="用户名长度3~10位";
                }
                else{
                    this.tip.userName="";
                }
            },
            'repwd':function(newVal){
                if (newVal!=this.pwd){
                    this.tip.repwd="确认密码与原密码不相同!";
                }
                else
                this.tip.repwd="";
            },
            'pwd':function(newVal){
                if (newval==[a-zA-Z]){
                    this.tip.pwd="密码只包含字母";
                }
            }
        },
        methods:{
            toLogin(){
                this.$router.push({
                    path:'Login'
                })
            },
            register(){
                var data={};
                data.userName=this.userName;
                data.password=this.pwd;
                localStorage.setItem("data",JSON.stringify(data));
                console.log(JSON.parse(localStorage.getItem("data")));
                alert("注册成功!");
                this.$router.push({
                    path:'Login'
                })   
            }
        },
        components:{
          Mybutton  
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
    bottom: 150px;
    left:50%;
    transform: translate(-50%);
    font-size: larger;
    cursor: pointer;
}
.tip:hover{
    color: red;
}
.loginbar{
    margin:100px auto;
    text-align: center;
    z-index: 10;
    height:500px;
    width:500px;
    border-radius: 20px;
    background-color: rgb(240, 240, 240);
    font-size: large;
    font-weight: 700;
}
.logintext{
    width: 300px;
    height: 40px;
    margin-top: 30px;
    font-size: larger;
    border:none;
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