import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/scss/custom.scss'; 
import router from './router' ;
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass , faUser,faHouse ,faChartLine , faChessKnight, faChessRook, faChess, faGlobe, faBrain, faChessBoard , faList , faMessage ,faUsers , faCircleUp , faCircleDown , faTrashCan , faEdit , faEye , faChartColumn , faLocationDot ,faCakeCandles , faClock , faPencil , faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass , faUser , faHouse, faChessKnight, faChessRook, faChess, faGlobe, faBrain, faChessBoard,faChartLine , faList , faMessage ,faUsers ,faCircleUp ,faCircleDown , faTrashCan , faEdit , faEye ,faChartColumn , faLocationDot , faCakeCandles , faClock, faPencil , faEllipsisVertical );

createApp(App).use(router).use(createPinia()).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
