import Vue from 'vue';
import Router from 'vue-router';
//解决路由点击报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


const Index = () =>
    import ('@/pages/index/index.vue');
const Index2 = () =>
    import ('@/pages/index2/index.vue');
const Index3 = () =>
    import ('@/pages/index3/index.vue');
const Index4 = () =>
    import ('@/pages/index4/index.vue');
Vue.use(Router);

const router = new Router({
    routes: [{
            path: "/index",
            name: "index",
            component: Index,
        }, {
            path: "",
            redirect: '/index',
        },
        {
            path: "/index2",
            name: "index2",
            component: Index2,
        },
        {
            path: "/index3",
            name: "index3",
            component: Index3,
        },
        {
            path: "/index4",
            name: "index4",
            component: Index4,
        },
    ]
})

//全局路由守卫
export default router;