import { RouteRecordRaw } from "vue-router";
import { Foo } from "../views/Foo";
import { Bar } from "../views/Bar";

export const routes: RouteRecordRaw[] = [
    { path:'/', component: Foo},
    { path:'/about', component: Bar},
    { path:'/welcom', children}
]