import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firebase } from "../src/firebase/firebase";


/* 
   Escolhi usar o firebase por curiosidade do funcionamento do banco de dados.
   Alem dele pensei tambem no supabase, porem já tinha usado em um projeto feito em React.
   Por possuir ser uma ferramenta agil de desenvolvimento back-end achei que seria bom aprender o uso.
*/


const app = createApp(App).use(store)
//forma que achei de iniciar o firebase para o metodo de autenticação funcionar. 
//Como devo usar? Quando uso app.use(firebase) o console retornar um aviso de que deve ser uma função de instalação.
firebase

app.use(router)

app.mount('#app')
