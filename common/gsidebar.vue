<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo" theme = "light">
            <el-menu-item index="1"><i class="el-icon-menu"></i><router-link to="/"><strong>DashBoard</strong></router-link></el-menu-item>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-star-on"></i><strong>Application</strong></template>
                <el-menu-item-group>
                    <template slot="title"><strong>Todo List</strong></template>
                    <el-menu-item index="2-1"><router-link to="/todo"><strong>todo</strong></router-link></el-menu-item>
                    <el-menu-item index="2-2"><strong>done</strong></el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3"><i class="el-icon-setting"></i><strong>Auth Manager</strong></el-menu-item>
            <el-menu-item index="4"><i class="el-icon-time"></i><strong>导航三</strong></el-menu-item>
        </el-menu>
    </div>
</template>
<script>

</script>
<style>
    a{
        text-decoration: none;
    }
</style>