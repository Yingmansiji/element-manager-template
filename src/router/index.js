import Vue from 'vue';
import VueRouter from 'vue-router';

// const  = () => import("../views/");
const HomePage= () => import("../views/HomePage");

Vue.use(VueRouter);

const routes = [
    // 本地调试时展开导航
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
        redirect:"",
        children:[
            {
                path: "/",
                name: "",
                // component: ,
                // redirect:"",
                // children:[]
            }
        ]
    },
    /**----打包用于单点登录系统-----*/
    // {
    //     path: "/",
    //     name: "",
    //     // component: ,
    // }
];

const router = new VueRouter({
  // mode: "history",
  routes
});

export default router;