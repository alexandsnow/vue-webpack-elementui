<template>
    <div>
       <h2>{{msg}}</h2>
        <div class="gbox">
            <el-row>
                <el-col :span="12" :offset="6">
                    <el-steps :space="100" :active="active" finish-status="success">
                        <el-step title="步骤 1"></el-step>
                        <el-step title="步骤 2"></el-step>
                        <el-step title="步骤 3"></el-step>
                    </el-steps>
                </el-col>
            </el-row>
        </div>
        <div class="gbox">
            <el-row>
                <el-col :span="12" :offset="6">
                    <g-switch></g-switch>
                </el-col>
            </el-row>
        </div>
        <div class="gbox">
            <el-row>
                <el-col :span="12" :offset="6">
                    <g-button></g-button>
                </el-col>
            </el-row>
        </div>
        <g-alert></g-alert>
    </div>
</template>
<script>
    import GSwitch from "./component/gswitch.vue";
    import GButton from "./component/gbutton.vue"
    import GAlert from "./component/galert.vue"
    export default {
        data(){
            return {
                msg: "msg in main.vue",
                active:0
            }
        },
        components: {GSwitch, GButton,GAlert}
    }
</script>

<style>
    .gbox {
        margin:20px 20px;
        padding:10px 10px;
        background-color: aliceblue;
        border-radius: 5px;
    }
</style>