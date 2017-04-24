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
<style scope>
    * {
        padding: 0;
        margin: 0;
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
        margin: 20px 20px 0px 320px;
    }

    .gbox {
        margin: 20px 20px;
        padding: 10px 10px;
        background-color: aliceblue;
        border-radius: 5px;
    }
</style>