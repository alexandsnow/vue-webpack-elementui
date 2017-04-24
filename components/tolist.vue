<template>
    <div>
        <el-row class = "title">
            <el-col :span="12" :offset="6">
                <h2>What do you want to do?</h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" :offset="6">
                <el-input placeholder="input what you want to do"></el-input>
            </el-col>
        </el-row>
        <el-row class="table">
            <el-col :span="10" :offset="7">
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="日期"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地址">
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>

</template>
<script>
    export default{
        data(){
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
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
    .table{
        margin-top: 50px;
    }
</style>