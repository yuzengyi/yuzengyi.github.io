<template>
    <div  class="branch">{{msg}}</div>
</template>
<script>
    export default{
        name:'KnowledgeBanch',
        props:{ 
            msg:String
        },
        data(){
            return{ 
            }
        }
    }
</script>
<style scoped>
    .branch{
        height:50px;
        width: 200px;
        text-align: center;
        font-size:x-large;
        background-color:rgb(255, 246, 193);
        border-radius: 10px;
        border:solid rgb(218, 208, 22) 2px;
        margin-top: 30px;
        cursor: pointer;
    }
</style>