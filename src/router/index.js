import Vue from 'vue';
import Router from 'vue-router';
//解决路由点击报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const Index = () =>
    import ('@/pages/index/index.vue');


Vue.use(Router);

const router = new Router({
    routes: [{
        path: "/index",
        name: "index",
        component: Index,
    }, {
        path: "",
        redirect: '/index',
    }]
})

//全局路由守卫
export default router;