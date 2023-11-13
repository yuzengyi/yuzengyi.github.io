<template>
    <div>
        <!-- <button class="btn">{{msg}}</button> -->
        <p>{{msg}}</p>
        <div v-for="(item,i) in name"  style="text-align:center">
            <SelectBox   v-bind:msg=item>{{i}}</SelectBox>
        </div>
    </div>
</template>

<script>
    export default{
        name:"Mybutton",
        props:{
           msg:String
        }
    }
</script>

<style scoped>
    .btn{
        width: 300px;
        height:50px;
        font-size: large;
        border-radius: 10px;
        border:none;
        background-color: rgb(161, 202, 255);
    }
    .btn:hover{
        background-color: rgb(176, 208, 255);
    }
</style>