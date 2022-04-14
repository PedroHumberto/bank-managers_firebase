import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/managers',
      name: 'managers',
      component: () => import('../views/Managers.vue'),
      meta:{
        requiresAuth: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/addmanager',
      name: 'addmanager',
      component: () => import('../views/AddManager.vue'),
      meta:{
        requiresAuth: true
      }
    },
  ]
})

//metodo para conferir se o usuario está logado e permanece logado
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(getAuth(), 
    (user) =>{
      removeListener();
      resolve(user)
    },

    reject)
  })
}

//metodo que impede de entrar na pagina sem estar logado
router.beforeEach( async (to, from, next) =>{
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(await getCurrentUser()){
      next()
    }else{
      alert("Faça Login")
      next("/")
    }
  }else{
    next()
  }
})

export default router
