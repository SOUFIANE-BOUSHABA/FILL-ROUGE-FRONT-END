

import AppInterface from './views/AppPost.vue';
import Home from './components/postcomponents/AppHome.vue';
import ExploreTopics from './components/postcomponents/AppExploreTopics.vue';
import MyTopics from './components/postcomponents/AppMyTopics.vue';
import ErrorView from './components/postcomponents/AppError404.vue';


import auttemplate from './views/AppAuth.vue';
import LoginComponent from './components/authcomponents/AppLogin.vue';
import RegisterComponent from './components/authcomponents/AppRegister.vue';
import ForgotComponent from './components/authcomponents/AppForgotten.vue';


import personnel from './views/AppPersonnel.vue';
import MyAnswers from './components/personnelcomponents/AppMyAnsewrs.vue';


import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', 
  component: AppInterface ,
  children: [
    { path: '', component: Home },
    { path: 'explore', component: ExploreTopics },
    { path: 'MyTopics', component: MyTopics },
    { path: '/:pathMatch(.*)*', component: ErrorView  },
  ],

},
  { 
    path: '/userauth', 
    component: auttemplate,
    children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'forgot', component: ForgotComponent },
        ],
 },
 
  { 
    path: '/personel', 
    component: personnel,
    children: [
          { path: 'MyAnswers', component: MyAnswers },
         
        ],
 }

 

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
