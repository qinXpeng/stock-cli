import Vue from 'vue'
import VueRouter from 'vue-router'

const LongHu = () =>
    import ( /* webpackChunkName: "group-index" */ '../components/LongHu.vue')

const NotFound = () =>
    import ( /* webpackChunkName: "group-not=found" */ '../views/NotFound.vue')
const MainStock = () =>
    import ( /* webpackChunkName: "group-ArticleDetails" */ '../components/MainStock.vue')
const StStock = () =>
import ( /* webpackChunkName: "group-ArticleDetails" */ '../components/StStock.vue')
Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
    //修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    { 
        path: '/', 
        component: MainStock,
        props: true
    },
    {
        path: '*',
        component: NotFound
    },
    {
        path: '/STStock',
        component: StStock,
        props: true
    },
    {
        path: '/LongHu',
        component: LongHu,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title ? to.meta.title : '加载中'
    }
    next()
})

export default router