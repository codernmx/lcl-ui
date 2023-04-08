import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import lUi from '../packages/index';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import lUi from 'lcl-test-ui'

// import 'lcl-test-ui/dist/style.css'




createApp(App).use(lUi).use(ElementPlus).mount('#app')
