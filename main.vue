<template>
    <div>
        <g-layout></g-layout>
    </div>
</template>
<script>
    import GLayout from './common/glayout.vue'
    export default {
        data(){
            return {
                msg: "msg in main.vue",
                active: 0
            }
        },
        components: {GLayout}
    }
</script>

<style>
</style>