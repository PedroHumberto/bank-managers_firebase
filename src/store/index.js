import { createStore } from 'vuex'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import router from '../router'
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase"



export default createStore({
  state: {
    user: {},
    manager:[],
  },
  getters: {
  },
  mutations: {
    NEW_USER_REGISTER(state, user) {
      console.log(user)
      createUserWithEmailAndPassword(getAuth(), user.email, user.password)
        .then(() => {
          router.push({ name: 'managers' })
          state.user.email = user.email
          state.user.password = user.password
          //Pegar estes dados e registrar no FireBase
        })
        .catch((error) => {
          const erro = error.code
          console.log(erro)
          if (erro === 'auth/email-already-in-use') {
            alert("EMAIL ALREADY IN USE")
          }
        })
    },
    GET_MANAGERS(state, manager) {
          manager.map( item => item)
          state.manager = manager
      }
    
  },
  actions: {
    
  },
  modules: {
  }
})
