import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqirCtXpW6ybrJMwyrO54uPQ4ltcl3AR8",
  authDomain: "managers-fb82a.firebaseapp.com",
  projectId: "managers-fb82a",
  storageBucket: "managers-fb82a.appspot.com",
  messagingSenderId: "612998196753",
  appId: "1:612998196753:web:06fd3b07cf7bb48bdf4bb0"
};


const firebase = initializeApp(firebaseConfig);

//pegando o banco de dados
const db = getFirestore(firebase);


// estou exportando o banco de dados e a inicialização do firebase para poder puxar o banco dedados e poder usar o metodo de autenticação
export { firebase, db }

