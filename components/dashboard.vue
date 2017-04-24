<template>
    <div>
        <el-row class = "title">
            <el-col :span="12" :offset="6">
                <h2>dashboard</h2>
            </el-col>
        </el-row>
    </div>

</template>
<script>
    export default{
        data(){
            return {
                msg: ''
            }
        }
    }
</script>

<style scope>
    .title{
        text-align: center;
        margin-top: 60px;
        margin-bottom: 30px;
        font-weight: bolder;
    }
</style>