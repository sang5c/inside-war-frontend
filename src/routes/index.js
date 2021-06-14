import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "@/views/MainView";
import UserView from "@/views/UserView";

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: "history", // URL에서 해시 제거
    routes: [
        {
            path: "/", // url에 대한 정보
            component: MainView, // url 주소로 갔을 때 표시될 컴포넌트
        },
        {
            path: "/main",
            component: MainView,
        },
        {
            path: "/users", // url에 대한 정보
            component: UserView, // url 주소로 갔을 때 표시될 컴포넌트
        },
    ],
});