<template>
    <div class="gbox">
        <el-alert
                class="galert"
                title="成功提示的文案"
                type="success">
        </el-alert>
        <el-alert
                class="galert"
                title="消息提示的文案"
                type="info">
        </el-alert>
        <el-alert
                class="galert"
                title="警告提示的文案"
                type="warning">
        </el-alert>
        <el-alert
                class="galert"
                title="错误提示的文案"
                type="error">
        </el-alert>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                title:"Alert"
            }
        }
    }
</script>

<style>
    .galert{
        margin-bottom: 20px;
    }
    .galert:last-child{
        margin-bottom: 0;
    }
</style>