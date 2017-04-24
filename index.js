/**
 * Created by yang_gao on 2017/4/21.
 */
console.log("ops! , 看见啦");

import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
import Element from "element-ui";
import 'element-ui/lib/theme-default/index.css';
import App from "./main.vue";

import todoList from './components/tolist.vue'
import dashboard from './components/dashboard.vue'



Vue.use(Element);
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: dashboard
        },
        {
            path: "/todo",
            component: todoList
        },

    ]
});

var vm = new Vue({
    el: '#app',
    data: {
        value1: 20,
        msg: "hello vue,this is webpack!"
    },
    router: router,
    components: {App}
});