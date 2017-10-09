<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card class="box-card">
                    <el-form :inline="true" :model="queryApiInfoParam" class="demo-form-inline">
                        <el-form-item label="AppId" style="margin-bottom: 0">
                            <el-input v-model="queryApiInfoParam.appId" placeholder="appId"></el-input>
                        </el-form-item>
                        <el-form-item label="Service Name" style="margin-bottom: 0">
                            <el-input v-model="queryApiInfoParam.serviceName" placeholder="Service Name"></el-input>
                        </el-form-item>
                        <el-form-item style="margin-bottom: 0">
                            <el-button type="primary" @click="queryApiList">Query</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>

            </el-col>
        </el-row>

        <el-row style="margin-top: 10px" v-if="apiInfoList.length!=0 && queryApiInfoParam.appId!=''">
            <el-col :span="24">
                <el-card class="box-card">
                    <div slot="header">
                        <span style="line-height: 30px; font-size: 25px;">
                            <strong>{{queryApiInfoParam.appId}}</strong>&nbsp&nbsp
                        </span>
                        <el-tooltip class="item" effect="dark" content="Server is Running" placement="left-start">
                            <span style="line-height: 30px; font-size: 20px;">
                               <i class="el-icon-circle-check" style="color: #13CE66;"></i>
                            </span>
                        </el-tooltip>

                    </div>
                    <el-collapse :accordion="isAccordion" value="apiInfoList">
                        <el-collapse-item :title="item.methodName" :name="item.methodName" v-for="item in apiInfoList"
                                          :key="item.methodName">
                            <div><strong>Method:</strong>{{item.method}}</div>
                            <div><strong>ApiName:</strong>{{item.methodName}}</div>
                            <div><strong>Desc:</strong>{{item.desc}}</div>
                            <div><strong>MappingURL:</strong>NULL</div>
                            <div><strong>Request:</strong>{{item.request}}</div>
                            <div><strong>Response:</strong>{{item.response}}</div>
                        </el-collapse-item>
                    </el-collapse>
                </el-card>
            </el-col>
        </el-row>

    </div>

</template>

<script>
    export default{
        data(){
            return {
                queryApiInfoParam: {
                    appId: "",
                    serviceName: ""
                },
                activeName: "1",
                isAccordion: true,
                apiInfoList: []
            }
        },
        methods: {
            queryApiList(){
                this.$http.get('http://localhost:9999/getAPIs').then((response) => {
                    console.log("begin load Api info");
                    this.apiInfoList = [];
                    var res = response.data.responseBody;

                    for (var i = 0; i < res.length; i++) {
                        this.apiInfoList.push(res[i]);
                    }
                    console.log("end load Api info");
                    console.log(this.apiInfoList);
                }).catch(function (response) {
                    console.log(response)
                });
            },
            handleChange(){

            }
        }
    }
</script>

<style></style>