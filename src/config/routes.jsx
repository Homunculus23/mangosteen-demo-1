// import { RouteRecordRaw } from "vue-router";//routes类型在vue-router.d.ts中是RouteRecordRaw
import { First } from "../components/welcome/First";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Forth } from "../components/welcome/Forth";
import { Welcome } from "../views/Welcome";
import { StartPage } from "../views/StartPage";

export const routes = [//jsx后缀时，RouteRecordRaw[]报错，因此改为tsx。若页面不能正常运行，删去该句并改后缀为jsx
    { path:'/', redirect: '/welcome', },//默认指向welcome
    { 
        path:'/welcome', 
        component: Welcome, 
        children: [
            {path:'', redirect:'/welcome/1',},//welcome默认为空，直接跳转到1。
            {path:'1', component: First },
            //{path:'1', component: {main:First,footer:FirstAction},},
            //vue-router的功能，让一个路径对应两个部分，main为页面footer为动画，分别对应 Welcome.jsx 里 RouterView 的两个 name。
            {path:'2', component: Second,},
            {path:'3', component: Third,},
            {path:'4', component: Forth,},
    ]},
    {
        path:'/start',
        component: StartPage
    }
]