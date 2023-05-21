import {createRouter, createWebHashHistory} from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import DirectorsList from '../components/DirectorsList.vue';

const  routes = [
    {path:'/login',component:LoginPage},
    {path:'/directors',component:DirectorsList}
];

const router = createRouter({
    history:createWebHashHistory(),
    routes:routes
});

export default router;
