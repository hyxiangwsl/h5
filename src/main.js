import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as api from "@/util/api";
Vue.use(ElementUI);
//全局引入api
Vue.prototype.$api = api;
Vue.config.productionTip = false;
//全局过滤器
Vue.filter('filterTime', val => {
    let date = new Date(val);
    let m = date.getMonth() + 1;
    let d = date.getDate();
    return `${m}-${d}`;
})
new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
// new Vue({
//     render: h => h(App),
// }).$mount('#app')