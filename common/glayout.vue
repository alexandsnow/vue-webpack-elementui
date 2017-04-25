<template>
    <div>
        <gheader class="gheader"></gheader>

        <gsidebar class="gsidebar"></gsidebar>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import Gheader from './gheader.vue'
    import Gsidebar from './gsidebar.vue'
    // 布局文件中对于各个子布局，不需要全部import进来，只需要在定义路由的地方import进去即可
    export default{
        data(){
            return {
                msg: "hello content "
            }
        },
        components: {Gheader, Gsidebar}
    }
</script>
<style>
    * {
        padding: 0;
        margin: 0;
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif
    }
    .gheader{
        position: fixed;
        height: 50px;
        left:0;
        top:0;
        right:0;
        z-index: 9999;
    }

    .gsidebar {
        width: 300px;
        position: fixed;
        left: 0;
        bottom: 0;
        top: 60px;
        background-color: #eef1f6;
    }

    .content {
        margin: 75px 10px 0px 310px;
    }

</style>