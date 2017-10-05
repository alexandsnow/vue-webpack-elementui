<template>
    <div id='appState'>
        <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="lastRunTime"
                    label="LastRunTime"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="appId"
                    label="AppId"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="appName"
                    label="appName"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="ip"
                    label="Address">
            </el-table-column>
            <el-table-column
                    prop="owner"
                    label="Owner">
            </el-table-column>
            <el-table-column
                    prop="state"
                    label="State">
            </el-table-column>
            <el-table-column label="Operation">
                <template scope="scope">
                    <el-button
                            size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'appState',
        data () {
            return {
                tableData: [{
                    lastRunTime: '2016-05-02',
                    appId: '12054',
                    appName: 'auto-test-backend',
                    state: 'UP',
                    owner: "admin@yg.com",
                    ip: "47.95.123.48:7808",
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    lastRunTime: '2016-05-04',
                    appId: '165942',
                    appName: 'auto-test-portal',
                    state: 'DOWN',
                    owner: "admin@yg.com",
                    ip: "47.95.123.48:9856",
                    address: '上海市普陀区金沙江路 1517 弄'
                }]
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }
</script>