<template>
    <div>
        <el-row>
            <h2>ToDO</h2>
            <el-col :span="24">
                <el-card>
                    <el-table :data="taskList" style="width:100%;" stripe>
                        <el-table-column prop="index" label="序号" min-width="60"></el-table-column>
                        <el-table-column prop="priority" label="Priority" min-width="80"></el-table-column>
                        <el-table-column prop="taskName" label="Task Name" min-width="140"></el-table-column>
                        <el-table-column prop="date" label="Finish Date" min-width="140"></el-table-column>
                        <el-table-column prop="time" label="Finish Time" min-width="120"></el-table-column>
                        <el-table-column prop="progress" label="进度" min-width="120">
                            <template scope = "scope">
                                <el-progress :percentage=scope.row.percentage status="success"></el-progress>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" min-width="180">
                            <template scope="scope">
                                <el-button
                                        size="small"
                                        @click="handleOpen(scope.$index, scope.row)">查看</el-button>
                                <el-button
                                        size="small"
                                        type="danger"
                                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>


                    </el-table>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <h2>Doing</h2>
            <el-col :span="24">
                <el-card>
                    <el-table :data="taskList" style="width:100%;" stripe>
                        <el-table-column prop="index" label="序号" min-width="60"></el-table-column>
                        <el-table-column prop="priority" label="Priority" min-width="80"></el-table-column>
                        <el-table-column prop="taskName" label="Task Name" min-width="140"></el-table-column>
                        <el-table-column prop="date" label="Finish Date" min-width="140"></el-table-column>
                        <el-table-column prop="time" label="Finish Time" min-width="120"></el-table-column>
                        <el-table-column prop="progress" label="进度" min-width="120">
                            <template scope = "scope">
                                <el-progress :percentage=scope.row.percentage status="success"></el-progress>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" min-width="180">
                            <template scope="scope">
                                <el-button
                                        size="small"
                                        @click="handleOpen(scope.$index, scope.row)">查看</el-button>
                                <el-button
                                        size="small"
                                        type="danger"
                                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                            </template>
                        </el-table-column>


                    </el-table>
                </el-card>
            </el-col>
        </el-row>
        <el-row>
            <h2>Done</h2>
            <el-col :span="24">
                <el-card>
                    <el-row>
                        <el-col :span="24">
                            <el-table :data="taskList" style="width:100%;" stripe>
                                <el-table-column prop="index" label="序号" min-width="60"></el-table-column>
                                <el-table-column prop="priority" label="Priority" min-width="80"></el-table-column>
                                <el-table-column prop="taskName" label="Task Name" min-width="140"></el-table-column>
                                <el-table-column prop="date" label="Finish Date" min-width="140"></el-table-column>
                                <el-table-column prop="time" label="Finish Time" min-width="120"></el-table-column>
                                <el-table-column prop="progress" label="进度" min-width="120">
                                    <template scope = "scope">
                                        <el-progress :percentage=scope.row.percentage status="success"></el-progress>
                                    </template>
                                </el-table-column>
                                <el-table-column label="操作" min-width="180">
                                    <template scope="scope">
                                        <el-button
                                                size="small"
                                                @click="handleOpen(scope.$index, scope.row)">查看</el-button>
                                        <el-button
                                                size="small"
                                                type="danger"
                                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12" :offset="8">
                            <el-pagination
                                    layout="prev, pager, next"
                                    :total="50">
                            </el-pagination>
                        </el-col>
                    </el-row>
                </el-card>

            </el-col>
        </el-row>
    </div>


</template>

<script>
    export default{
        data(){
            return {
                taskList:[
                    {
                        index:1,
                        taskName:"todo List",
                        priority:"p3",
                        date:"1231232",
                        percentage:100,
                        time:"123456"
                    },
                    {
                        index:1,
                        taskName:"todo List",
                        priority:"p3",
                        percentage:80,
                        date:"1231232",
                        time:"123456"
                    },
                    {
                        index:1,
                        taskName:"todo List",
                        priority:"p3",
                        percentage:10,
                        date:"1231232",
                        time:"123456"
                    }
                ]
            }
        },
        methods:{
            handleOpen(){

            },
            handleDelete(){

            }
        }
    }
</script>