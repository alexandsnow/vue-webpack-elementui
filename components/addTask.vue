<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>Application</el-breadcrumb-item>
            <el-breadcrumb-item>AddTask</el-breadcrumb-item>
        </el-breadcrumb>

        <el-row class="todoCard">
            <el-col :span="18" :offset="3">
                <el-card class="box-card">
                    <el-row class="title">
                        <el-col :span="12" :offset="6">
                            <h2>Create A Task</h2>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="20" :offset="2">
                            <el-form ref="form" :model="form" label-width="120px">
                                <el-form-item label="Task Name">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                                <el-form-item label="Priority">
                                    <el-select v-model="form.region" placeholder="请选择task等级">
                                        <el-option label="P1" value="P1"></el-option>
                                        <el-option label="P2" value="P2"></el-option>
                                        <el-option label="P3" value="P3"></el-option>
                                        <el-option label="P4" value="P4"></el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="Finish Time">
                                    <el-col :span="11">
                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                    </el-col>
                                    <el-col :span="2" style="text-align: center">-</el-col>
                                    <el-col :span="11">
                                        <el-time-select type="date" placeholder="选择时间" v-model="form.date1" style="width: 100%;"></el-time-select>
                                    </el-col>

                                </el-form-item>
                                <el-form-item label="Append History">
                                    <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                                </el-form-item>

                                <el-form-item label="Content">
                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                </el-form-item>

                                <el-form-item>
                                    <el-col :span="12" :offset="8">
                                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                        <el-button>取消</el-button>
                                    </el-col>

                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>

</template>
<script>
    import util from '../common/util'
    export default{
        data(){
            return {
                tableData: [],
                taskContent: "123",
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            addOneTask() {
                console.log("enter key up");
                var task = {};
                task.createTime = (util.parseDate)(new Date(), util.defaultFormat);
                task.finishTime = (util.parseDate)(new Date(), util.defaultFormat);
                task.taskContent = this.taskContent;
                this.tableData.push(task);
            },
            onSubmit(){
                console.log("add one task");
            }
        }
    }
</script>

<style scope>
    .todoCard{
        margin-top: 50px;
    }
    .title {
        text-align: center;
        margin-top: 10px;
        margin-bottom: 20px;
        font-weight: bolder;
    }
</style>