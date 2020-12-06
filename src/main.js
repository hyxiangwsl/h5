import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import MuseUI from 'muse-ui';

Vue.use(MuseUI);

Vue.config.productionTip = false
new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
// new Vue({
//     render: h => h(App),
// }).$mount('#app')