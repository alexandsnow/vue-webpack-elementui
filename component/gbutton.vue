<template>
    <div>
        <el-row>
            <el-col :span="24">
                <span class="demonstration">默认显示颜色</span>
                <span class="wrapper">
                <el-button type="success">成功按钮</el-button>
                <el-button type="warning">警告按钮</el-button>
                <el-button type="danger">危险按钮</el-button>
                <el-button type="info">信息按钮</el-button>
            </span>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24">
                <span class="demonstration">hover 显示颜色</span>
                <span class="wrapper">
                <el-button :plain="true" type="success">成功按钮</el-button>
                <el-button :plain="true" type="warning">警告按钮</el-button>
                <el-button :plain="true" type="danger">危险按钮</el-button>
                <el-button :plain="true" type="info">信息按钮</el-button>
            </span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                sectionName:"BUTTON"
            }
        }
    }
</script>

<style scope>
    .el-row{
        margin-bottom: 20px;
    }
    .el-row:last-child{
        margin-bottom: 0px;
    }
</style>