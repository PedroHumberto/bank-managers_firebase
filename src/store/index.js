import { createStore } from 'vuex'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import router from '../router'



export default createStore({
  state: {
    user: '',
    manager: [],
    filter: ''
  },
  getters: {
    //filtro por cada letra digitada retornando apenas os intens inclusos no array de managers.
    filterManager(state) {
      return state.manager.filter((manager) => manager.name.toLowerCase().includes(state.filter.toLowerCase()))
    }
  },
  mutations: {
    //metodo usado para criar usuario no firebase conforme documentação de autenticação de usuario.
    NEW_USER_REGISTER(state, user) {
      createUserWithEmailAndPassword(getAuth(), user.email, user.password)
        .then(() => {
          router.push({ name: 'managers' })
          state.user = user.email
        })
        .catch((error) => {
          const erro = error.code
          console.log(erro)
          if (erro === 'auth/email-already-in-use') {
            alert("EMAIL ALREADY IN USE")
          }
        })
    },
    //quando executa o metodo para preencher o banco de dados eu puxo para dentro do store, fazendo com que as mutações sejam capturadas.
    GET_MANAGERS(state, manager) {
      manager.map(item => item)
      state.manager = manager
    },
    FILTER(state, filter) {
      state.filter = filter
    }

  },
  actions: {
    /* quando tento usar a função asincrona para passar os dados dos managers pra state.manager
       os dados não são carregados a tempo e renderizados em tela. Eu entendi o problema de sincronia
       mas não entendi como posso solucionar esse problema. Então coloquei direto no componente.
       Gostaria de uma dica para eu poder refatorar depois.
       O metodo usado foi o passado pela documentação do firebase https://firebase.google.com/docs/firestore/quickstart?hl=pt&authuser=0
    */

  },
  modules: {
  }
})
