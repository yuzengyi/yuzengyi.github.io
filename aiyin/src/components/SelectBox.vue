<template>
    <div class="selectbox" style="font-size:larger"><input  class="select" type="checkbox" name="" id="">{{msg}}</div>
</template>

<script>
    export default{
        name:"SelectBox",
        props:{
           msg:String
        }
    }
</script>
<style scoped>
    .select{
        height: 18px;
    }
    .selectbox{
        font-size: large;
        height:50px;
       
    }
    .select{
        width: 30px;
    }
</style>