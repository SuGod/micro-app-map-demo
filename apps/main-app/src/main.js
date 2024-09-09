
import {createApp} from 'vue'
import App from './App.vue'
// import { registerMicroApps, start } from 'qiankun';
import microApp from "@micro-zoe/micro-app";


microApp.start()




createApp(App).mount('#app')
