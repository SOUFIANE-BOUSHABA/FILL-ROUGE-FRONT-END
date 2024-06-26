

import AppInterface from './views/AppPost.vue';
import Home from './components/postcomponents/AppHome.vue';
import ExploreTopics from './components/postcomponents/AppExploreTopics.vue';
import MyTopics from './components/postcomponents/AppMyTopics.vue';
import commentes from './components/postcomponents/AppComments.vue';
import ErrorView from './components/postcomponents/AppError404.vue';


import auttemplate from './views/AppAuth.vue';
import LoginComponent from './components/authcomponents/AppLogin.vue';
import RegisterComponent from './components/authcomponents/AppRegister.vue';
import ForgotComponent from './components/authcomponents/AppForgotten.vue';


import personnel from './views/AppPersonnel.vue';
import MyAnswers from './components/personnelcomponents/AppMyAnsewrs.vue';
import allusers from './components/personnelcomponents/AppUsers.vue';
import profile from './components/personnelcomponents/AppProfile.vue';
import EditProfile from './components/personnelcomponents/AppEditProfile.vue';
import contact from './components/personnelcomponents/AppContact.vue';
import QandA from './components/personnelcomponents/AppQ&A.vue';


import aboutus from './views/AppAboutUs.vue';
import addtopics from './views/AppAddTopics.vue';
import updateTopic from './views/AppUpdateTopic.vue';
import whyForume from './views/WhyFormue.vue';


import admin from './views/AppAdmin.vue';
import statistique from './components/admincomponents/AppStatistique.vue';
import category from './components/admincomponents/AppCategory.vue';
import tags from './components/admincomponents/AppTags.vue';
import users from './components/admincomponents/AppUsers.vue';
import permission from './components/admincomponents/AppPermission.vue';
// import topic from './components/admincomponents/AppTopics.vue';



import { createRouter, createWebHistory } from 'vue-router';





const routes = [
  { path: '/', 
  component: AppInterface ,
  children: [
    { path: '', component: Home },
    { path: 'explore', component: ExploreTopics },
    { path: 'MyTopics', component: MyTopics },
    { path: 'commentes/:id', component: commentes },
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
  {  path: '/whyForume',  component: whyForume },

  { 
    path: '/personel', 
    component: personnel,
    children: [
          { path: 'MyAnswers', component: MyAnswers },
          { path: 'allusers', component: allusers },
          { path: 'profile/:id', component: profile },
          { path: 'EditProfile', component: EditProfile },
          { path: 'contact', component: contact },
          { path: 'q&a', component: QandA },
        ],
 },
 {  path: '/about',   component: aboutus },
 {  path: '/addtopics',   component: addtopics },
 {  path: '/updateTopic/:id',   component: updateTopic },
 
 { 
   path: '/admin', 
   component: admin,
   beforeEnter: (to, from, next) => {
    const userRole = localStorage.getItem('userRole');
    if (userRole !== 'admin') {
      next('/');
    } else {
      next();
    }
  },
   children: [
        { path: 'statistique', component: statistique },
        { path: 'category', component: category },
        { path: 'tag', component: tags },
        { path: 'users', component: users },
        { path: 'permission', component: permission },
       ],
     
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
