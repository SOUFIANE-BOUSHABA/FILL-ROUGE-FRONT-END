

import auttemplate from './views/AppAuth.vue';
import LoginComponent from './components/authcomponents/AppLogin.vue';
import RegisterComponent from './components/authcomponents/AppRegister.vue';
import ForgotComponent from './components/authcomponents/AppForgotten.vue';


import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/userauth', 
    component: auttemplate,
    children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'forgot', component: ForgotComponent },
        ],
 },
 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
