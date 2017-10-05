<template>
	<div class='dashboard'>
		<el-steps :space="200" :active="1">
		  <el-step title="步骤 1" description="浏览应用详情"></el-step>
		  <el-step title="步骤 2" description="创建TestCase"></el-step>
		  <el-step title="步骤 3" description="选择TestCase集合"></el-step>
		  <el-step title="步骤 4" description="运行TestCase"></el-step>
		  <el-step title="步骤 5" description="生成TestCase报告"></el-step>
		</el-steps>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		}
	}
</script>

<style>
	.dashboard{
		margin-top: 50px;
	}
</style>