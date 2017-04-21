/**
 * Created by yang_gao on 2017/4/21.
 */
console.log("ops! , 看见啦");

import Vue from 'vue/dist/vue';
import Element from "element-ui";
import 'element-ui/lib/theme-default/index.css';
import App from "./main.vue";


Vue.use(Element);
var vm = new Vue({
    el: '#app',
    data: {
        value1: 20,
        msg: "hello vue,this is webpack!"
    },
    components:{App}
});