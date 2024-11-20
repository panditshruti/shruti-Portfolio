import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import Company from './components/Company.vue';
import Users from './components/Users.vue';
import Footer from './components/Footer.vue';
import Login from './components/Login.vue';
import Contect from './components/Contect.vue';
import Team from './components/Team.vue';

const routes = [
    {
        name: 'HelloWorld',
        component: HelloWorld,
        path: '/',
    },
    {
        name: 'Company',
        component: Company,
        path: '/Company',
    },
    {
        name: 'Users',
        component: Users,
        path: '/Users',
    },
    {
        name: 'Footer',
        component: Footer,
        path: '/Footer',
    },
    {
        name: 'Login',
        component: Login,
        path: '/Login',
    },
    {
        name: 'Contect',
        component: Contect,
        path: '/Contect',
    },
    {name: 'Team',
     component:Team,
     path: '/Team'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
