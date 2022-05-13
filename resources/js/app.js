import Vue from "vue";
import Index from  './components/Index'
import router from "./route";
require('./bootstrap');

new Vue({
    el:'#app',

    components: {
        Index
    },
    router
})

