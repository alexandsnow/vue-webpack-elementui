<template>
    <div>
        <gheader></gheader>
        <gsidebar class="gsidebar"></gsidebar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Gheader from './gheader.vue'
    import Gsidebar from './gsidebar.vue'

    import todoList from "../components/tolist.vue"

    export default{
        data(){
            return {
                msg: "hello content "
            }
        },
        components: {Gheader, Gsidebar, todoList}
    }
</script>
<style>
    * {
        padding: 0;
        margin: 0;
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif
    }

    .gsidebar {
        width: 300px;
        position: absolute;
        left: 0;
        bottom: 0;
        top: 60px;
        background-color: #eef1f6;
    }

    .content {
        margin: 20px 10px 0px 310px;
    }

</style>