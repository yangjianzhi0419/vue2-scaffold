/**
 * 路由配置
 */
import VueRouter from "vue-router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import globalStore from '@/store/global'
import tool from "@/utils/tool";
import {notification} from "ant-design-vue";

// 路由配置
const routes = [
    {
        name: "layout",
        path: "/",
        component: () => import('@/views/index'),
        redirect: "",
        children: [

        ]
    },
    {
        path: "/login",
        component: () => import('@/views/login'),
        meta: {
            title: '登录'
        }
    },
    {
        path: "/403",
        component: () => import('@/views/other/403')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/other/404.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

// 进度条配置
NProgress.configure({ showSpinner: false, speed: 500 })

router.beforeEach((to, from, next) => {
    NProgress.start();

    // 动态标题
    const {sysBaseConfig} = globalStore.state;
    document.title = to.meta?.title
        ? `${to.meta.title} - ${sysBaseConfig.NAME}`
        : `${sysBaseConfig.NAME}`;

    const token = tool.data.get("TOKEN");
    if (to.path === '/login') {
        if (token) {
            next({path: '/'})
            return false;
        }
        next();
        return false;
    } else {
        tool.data.set("LAST_VIEWS_PATH", to.fullPath)
    }
    if(!token) {
        next({ path: "login" })
        return false;
    }

    next();
})

router.afterEach(() => {
    NProgress.done()
})

router.onError((error) => {
    NProgress.done()
    notification.error({
        message: '路由错误',
        description: error.message
    })
})

export default router;
