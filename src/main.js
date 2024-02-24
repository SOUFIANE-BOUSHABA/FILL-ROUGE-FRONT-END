import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/scss/custom.scss'; 
import router from './router' ;
import store from './store';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass , faUser,faHouse ,faChartLine , faList , faMessage ,faUsers , faCircleUp , faCircleDown , faTrashCan , faEdit , faEye , faChartColumn , faLocationDot ,faCakeCandles , faClock , } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass , faUser , faHouse,faChartLine , faList , faMessage ,faUsers ,faCircleUp ,faCircleDown , faTrashCan , faEdit , faEye ,faChartColumn , faLocationDot , faCakeCandles , faClock, );

createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
