import Vue from 'vue'
import VueRouter from 'vue-router'

const ArticleList = () =>
    import ( /* webpackChunkName: "group-index" */ '../components/ArticleList.vue')

const NotFound = () =>
    import ( /* webpackChunkName: "group-not=found" */ '../views/NotFound.vue')
const ArticleDetails = () =>
    import ( /* webpackChunkName: "group-ArticleDetails" */ '../components/ArticleDetails.vue')
Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
    //修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    { path: '/', redirect: 'home' },
    { path: '/:cid', component: ArticleList, meta: { title: '欢迎来到beeBlog' } ,props: true},
    {
        path: '*',
        component: NotFound
    },
    {
        path: '/article/detail/:articleId',
        component: ArticleDetails,
        props: true
    },
    {
        path: '/category/:cid',
        component: ArticleList,
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