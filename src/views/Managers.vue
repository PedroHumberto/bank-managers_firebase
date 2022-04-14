<template>
  <div class="container">
    <h1>This is yours Bank Managers</h1>
    <input @input="filter = $event.target.value" placeholder="type a name" />
    <div class="managers">
      <div
        class="manager-card"
        v-for="manager in filterManager"
        :key="manager.id"
      >
        <p v-if="!manager.edit">{{ manager.name }}</p>
        <div v-else class="edit">
          <input v-model="manager.name" />
          <input v-model="manager.bank" />
          <button @click.prevent="save(manager)">Save</button>
        </div>
        <p>Bank: {{ manager.bank }}</p>
        <button @click.prevent="remove(manager.id)">Delete</button>
        <button @click.prevent="editManager(manager)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  data() {
    return {
      managers: [],
      filter: "",
    };
  },
  mounted() {
    this.setManagers();
  },
  methods: {
    remove(id) {
      deleteDoc(doc(db, "managers", id));
      return this.setManagers();
    },
    //importando o banco de dados para ser renderizado. Aqui tenho o problema de quando executo apenas o commit ou action ele não preenche o array. Recebendo o banco de dados como objeto vazio {}
    //https://firebase.google.com/docs/firestore/quickstart?hl=pt&authuser=0
    async setManagers() {
      const querySnapshot = await getDocs(collection(db, "managers"));
      const loadManager = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //console.log(loadManager)
      this.$store.commit("GET_MANAGERS", loadManager);
      this.managers = this.$store.state.manager;
    },
    editManager(manager) {
      manager.edit = true;
    },

    //optei por fazer um update ao vivo, usando um metodo ensinado pela documentação. Devo usar ele em computed?
    async save(manager) {
      //console.log(manager.id);
      const managerList = doc(db, "managers", manager.id);
      //console.log(managerList);
      
      await updateDoc(managerList, {
        name: manager.name,
        bank: manager.bank
        
    });
    return manager.edit = false
      
    },
  },
  computed: {
    filterManager(data) {
      this.$store.commit("FILTER", data.filter);
      return this.$store.getters.filterManager;
    },
  },
};
</script>


<style scoped>
input {
  margin: 10px 10px;
}
p {
  margin: 10px 10px;
  text-align: center;
}
button {
  margin: 5px 42px;

  
  background: #480048;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin-left: 31px;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
}
.container {
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  align-items: center;
}
.managers {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.manager-card {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 255px;
  margin: 10px 10px;
  border: 1px solid plum;
  box-shadow: 5px 2px 5px 2px rgba(36, 2, 36, 0.432);
  border-radius: 15px;
}
.edit {
  margin: 5px 10px;
  display: flex;
  flex-direction: column;
}
</style>