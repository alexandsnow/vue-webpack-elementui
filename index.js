/**
 * Created by yang_gao on 2017/4/21.
 */
console.log("ops! , 看见啦");

import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
import Element from "element-ui";
import 'element-ui/lib/theme-default/index.css';
import App from "./main.vue";

import dashboard from './components/dashboard.vue'
import addTask from './components/addTask.vue'
import taskList from './components/taskList.vue'



Vue.use(Element);
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: dashboard
        },
        {
            path: "/addTask",
            component: addTask
        },
        {
            path: "/taskList",
            component: taskList
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