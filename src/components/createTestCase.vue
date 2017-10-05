<template>
    <div class='createTC'>

        <el-card class='box-card'>
            <div slot="header">
                <span style="line-height: 36px;"><strong>TestCase Manager</strong></span>
                <el-button style="float: right;" type="success" @click="newTCModalVisible = true" icon='plus'>新增</el-button>
                <el-button style="float: right;margin-right:10px;" type="primary" icon='search' :disabled="true">搜索
                </el-button>
            </div>

            <el-table :data='tcInfoList'>
                <el-table-column prop='id' label='Id' header-align="center" align="center" min-width="140px"></el-table-column>
                <el-table-column prop='tcName' label='TcName' header-align="center" min-width="120px" align="center"></el-table-column>
                <el-table-column prop='appId' label='AppId' header-align="center" align="center"></el-table-column>
                <el-table-column prop='appName' label='AppName' header-align="center" align="center"></el-table-column>
                <el-table-column prop="apiName" label="ApiName" header-align="center" align="center"></el-table-column>
                <el-table-column prop='createBy' label='CreateBy' header-align="center" align="center"></el-table-column>
                <el-table-column label='IsPassed' header-align="center" align="center">
                    <template scope ="scope">
                        <el-tag type="success">success</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop='testTime' label='TestTime' header-align="center" align="center" min-width="120px"></el-table-column>
                <el-table-column prop='createTime' label='CreateTime' header-align="center" align="center" min-width="120px"></el-table-column>
                <el-table-column label='Operation' min-width="250px" header-align="center" align="center">
                    <template scope="scope">
                        <el-button size="small" type="success" icon='edit' @click="onEdit(scope.$index, scope.row)">
                            编辑
                        </el-button>
                        <el-button size="small" type="warning" icon='arrow-right' :disabled="true">Test
                        </el-button>
                        <el-button size="small" type="danger" icon='delete' @click="onDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>

        <!--新增TestCase模态框-->
        <el-dialog title="Create A TestCase" :visible.sync="newTCModalVisible" size="tiny">
            <el-form label-width="80px" :model="newRequestInfo">
                <el-form-item label="AppId">
                    <el-input v-model="newRequestInfo.appId"></el-input>
                </el-form-item>
                <el-form-item label="AppName">
                    <el-input v-model="newRequestInfo.appName"></el-input>
                </el-form-item>

                <el-form-item label="TcName">
                    <el-input v-model="newRequestInfo.tcName"></el-input>
                </el-form-item>
                <el-form-item label="Interface">
                    <el-select v-model="newRequestInfo.interfaceName" clearable placeholder="请选择接口名称">
                        <el-option
                                v-for="item in interfaceNames"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label='URL'>
                    <el-input type='text' v-model='newRequestInfo.url'></el-input>
                </el-form-item>

                <el-form-item label="Method">
                    <el-radio-group v-model="newRequestInfo.method" icon="search">
                        <el-radio label="GET"></el-radio>
                        <el-radio label="POST"></el-radio>
                        <el-radio label="PUT"></el-radio>
                        <el-radio label="DELET"></el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="Param">
                    <el-input type='textarea' v-model="newRequestInfo.param" :rows='5'></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type='primary' @click='onCreateTC(newRequestInfo)' :disabled="isNeedSaveInSave">保存</el-button>
                    <el-button type='warning' @click='onResetTC()'>重置</el-button>
                    <el-button type='danger' @click='newTCModalVisible=false'>关闭</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <!--编辑TestCase模态框-->
        <el-dialog title="Edit TestCase" :visible.sync="editTCaseModalVisible" size="tiny">
            <el-form label-width="80px" :model="editRequestInfo">
                <el-form-item label="AppId">
                    <el-input v-model="editRequestInfo.appId"></el-input>
                </el-form-item>
                <el-form-item label="AppName">
                    <el-input v-model="editRequestInfo.appName"></el-input>
                </el-form-item>
                <el-form-item label="Interface">
                    <el-select v-model="editRequestInfo.apiName" clearable placeholder="请选择接口名称">
                        <el-option
                                v-for="item in interfaceNames"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label='URL'>
                    <el-input type='text' v-model='editRequestInfo.url'></el-input>
                </el-form-item>

                <el-form-item label="Method">
                    <el-radio-group v-model="editRequestInfo.method" icon="search">
                        <el-radio label="GET"></el-radio>
                        <el-radio label="POST"></el-radio>
                        <el-radio label="PUT"></el-radio>
                        <el-radio label="DELET"></el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="Param">
                    <el-input type='textarea' v-model="editRequestInfo.param" :rows='5'></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type='primary' @click='onUpdateTC(editRequestInfo)'>保存</el-button>
                    <el-button type='warning' @click='onReset()'>重置</el-button>
                    <el-button type='danger' @click='editTCaseModalVisible=false'>关闭</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                formLabelWidth: '120px',
                isNeedSaveInSave: false,
                newTCModalVisible: false,
                editTCaseModalVisible:false,

                tcInfoList: [
                ],
                newRequestInfo: {
                    id:'',
                    tcName:'',
                    appId: '',
                    appName: '',
                    apiName: '',
                    createBy:'',
                    isPassed:'',
                    testTime:'',
                    createTime:'',
                    url: '',
                    method: '',
                    param: ''
                },
                editRequestInfo: {
                    id:'',
                    tcName:'',
                    appId: '',
                    appName: '',
                    apiName: '',
                    createBy:'',
                    isPassed:'',
                    testTime:'',
                    createTime:'',
                    url: '',
                    method: '',
                    param: ''
                },
                interfaceNames: [
                    {
                        label:"query*",
                        value:"query*"
                    },
                    {
                        label:"update*",
                        value:"update*"
                    },
                    {
                        label:"create*",
                        value:"create*"
                    },
                    {
                        label:"delete*",
                        value:"delete*"
                    }
                ]
            };
        },
        created: function() {
            // 获取所有TC
            this.$http.get('http://localhost:9999/tc/').then((response) => {
                console.log("begin load TestCase info");
                var tcListInfo= response.data.responseBody;
                var i;
                for (i in tcListInfo){
                    this.tcInfoList.push(tcListInfo[i]);
                }
                console.log("end load TestCase info");
            }).catch(function(response) {
                console.log(response)
            });
            //根据APPId获取所有接口
        },
        methods: {
            onCreateTC(requestInfo){
                var tcDto = {
                    appId: requestInfo.appId,
                    appName: requestInfo.appName,
                    tcName: requestInfo.tcName,
                    apiName:requestInfo.interfaceName,
                    url:requestInfo.url,
                    method:requestInfo.method,
                    param:requestInfo.param,
                    state:0,
                    createdBy:"GaoYang"
                };
                console.log(tcDto);
                this.$http.post('http://localhost:9999/tc/',tcDto).then((response) => {
                    this.showToast("创建TestCase成功！","success");
                    this.isNeedSaveInSave = true;
                    console.log(response.data.responseBody);
                    this.tcInfoList.push(response.data.responseBody);
                }).catch(function(response) {
                    this.showToast("创建TestCase Fail！","warning");
                    console.log(response)
                });

            },
            onUpdateTC(editTCRequestInfo){
                this.showToast("编辑TestCase成功！","success");
            },
            onEdit(index,row){
                this.editTCaseModalVisible=true;
                this.editRequestInfo.appId = row.appId;
                this.editRequestInfo.appName = row.appName;
                this.editRequestInfo.apiName = row.apiName;
                this.editRequestInfo.method = row.method;
                this.editRequestInfo.url = row.url;
                this.editRequestInfo.param = row.param;
            },
            onDelete(index,row){
                console.log(index,row);
                this.$http.delete('http://localhost:9999/tc/'+row.id).then((response) => {
                    console.log(response);
                }).catch(function(response) {
                    console.log(response)
                });
                this.tcInfoList.splice(index,1);
            },
            onResetTC(){
                this.newRequestInfo.appId = '';
                this.newRequestInfo.appName = '';
                this.newRequestInfo.method = '';
                this.newRequestInfo.param = '';
            },
            showToast(msg,type) {
                this.$message({message: msg, type: type, showClose: true});
            }
        }
    }
</script>

<style>
</style>