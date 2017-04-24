<template>
    <div>
        <el-row class="title">
            <el-col :span="12" :offset="6">
                <h2>What do you want to do?</h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-input placeholder="input what you want to do" v-on:keyup.enter.native="addOneTask" v-model="taskContent"></el-input>
            </el-col>
        </el-row>
        <el-row class="table">
            <el-col :span="12" :offset="6">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="createTime"
                            label="创建日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="finishTime"
                            label="预计完成时间"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="taskContent"
                            label="内容">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card class="box-card">
                    <div class="text item">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="活动名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="活动区域">
                                <el-select v-model="form.region" placeholder="请选择活动区域">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="活动时间">
                                <el-col :span="11">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                                </el-col>
                                <el-col class="line" :span="2">-</el-col>
                                <el-col :span="11">
                                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                                </el-col>
                            </el-form-item>
                            <el-form-item label="即时配送">
                                <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                            </el-form-item>
                            <el-form-item label="活动性质">
                                <el-checkbox-group v-model="form.type">
                                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="特殊资源">
                                <el-radio-group v-model="form.resource">
                                    <el-radio label="线上品牌商赞助"></el-radio>
                                    <el-radio label="线下场地免费"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="活动形式">
                                <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                <el-button>取消</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
                    <div v-for="o in 4" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
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
            }
        }
    }
</script>

<style scope>
    .title {
        text-align: center;
        margin-top: 60px;
        margin-bottom: 30px;
        font-weight: bolder;
    }
    .table {
        margin-top: 50px;
    }
</style>