import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import lclUi from '../packages/index';


createApp(App).use(lclUi).mount('#app')
