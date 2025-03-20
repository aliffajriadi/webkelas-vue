import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Member from "../views/Member.vue";
import Testing from "../views/Testing.vue";

const routes = [
    {path: "/", component: Home},
    {path: "/about", component: About},
    {path: "/member", component: Member},
    {path: "/testing", component: Testing},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;