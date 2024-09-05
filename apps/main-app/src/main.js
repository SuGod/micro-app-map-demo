
import {createApp} from 'vue'
import App from './App.vue'
import microApp from "@micro-zoe/micro-app";


microApp.start()

createApp(App).mount('#app')
