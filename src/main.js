import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firebase } from "../src/firebase/firebase";

const app = createApp(App).use(store)

firebase

app.use(router)

app.mount('#app')
