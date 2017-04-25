<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card class="box-card gblue">
                    <strong>hello</strong>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card gsuccess">
                    <strong>hello</strong>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card gwarning">
                    <strong>hello</strong>
                </el-card>
            </el-col>
            <el-col :span="6">
                <el-card class="box-card gdanger">
                    <strong>hello</strong>
                </el-card>
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

<style>
    .gblue {
        background-color: #20A0FF;
    }

    .gsuccess {
        background-color: #13CE66;
    }

    .gwarning {
        background-color: #F7BA2A;
    }

    .gdanger {
        background-color: #FF4949;
    }

</style>