import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/scss/custom.scss'; 
import router from './router' ;

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass , faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass , faUser);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
