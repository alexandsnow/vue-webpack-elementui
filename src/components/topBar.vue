<template>
	<div id="topBar">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
          <el-menu-item index="1"><router-link to="/appState">App State</router-link></el-menu-item>
          <el-submenu index="2">
            <template slot="title">TestCase</template>
            <el-menu-item index="2-1"><router-link to="/createTC">Create</router-link></el-menu-item>
            <el-menu-item index="2-2">Edit</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">Run</template>
            <el-menu-item index="3-1">Run One</el-menu-item>
            <el-menu-item index="3-2">Run Batch</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">Report</template>
            <el-menu-item index="4-1">Report Record</el-menu-item>
            <el-menu-item index="4-2"><router-link to="/test">Export</router-link></el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">API</template>
            <el-menu-item index="5-1"><router-link to="/apiInfo">Query</router-link></el-menu-item>
            <el-menu-item index="5-2">Export</el-menu-item>
          </el-submenu>
        </el-menu>
	</div>
</template>

<script>
export default {
  name: 'topBar',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods:{
	    handleEdit(index, row) {
	        console.log(index, row);
	    },
	    handleDelete(index, row) {
	        console.log(index, row);
	    }
	}
}
</script>