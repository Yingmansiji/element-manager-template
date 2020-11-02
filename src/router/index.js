import Vue from 'vue';
import VueRouter from 'vue-router';

const NaviPage = () => import("@/views/NavigatorPage");
const CommonPage = () => import("@/views/CommonPage");

const Demo1 = () => import("@/views/Pages/demo1")
const Demo2 = () => import("@/views/Pages/demo2")
const Demo3 = () => import("@/views/Pages/demo3")
const Demo4 = () => import("@/views/Pages/demo4")

Vue.use(VueRouter);

const routes = [
    /*** 需导航场景 ***/
    {
        path: "/navigator",
        name: "NaviPage",
        component: NaviPage,
        redirect: "/navigator/demo1",
        children: [
            {
                path: "demo1",
                name: "demo1",
                component: Demo1
            },
            {
                path: "demo2",
                name: "demo2",
                component: Demo2,
                redirect: "demo2/demo3",
                children: [
                    {
                        path: "demo3",
                        name: "demo3",
                        component: Demo3
                    },
                    {
                        path: "demo4",
                        name: "demo4",
                        component: Demo4
                    }

                ]
            }
        ]
    },
    /*** 需导航场景 ***/


    /**----无需导航场景-----*/
    {
        path: "/",
        name: "",
        component: CommonPage,
    }
    /**----无需导航场景-----*/
];

const router = new VueRouter({
    // mode: "history",
    routes
});

export default router;