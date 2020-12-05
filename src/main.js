import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.use(VueMaterial)
Vue.config.productionTip = false
new Vue({
    router,
    el: '#app',
    render: h => h(App)
});
// new Vue({
//     render: h => h(App),
// }).$mount('#app')