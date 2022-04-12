<template>
  <h1>This is yours Bank Managers</h1>
  <input @input="filter = $event.target.value">
  <ul>
    <li v-for="manager in filterManager" :key="manager.id">
      {{ manager.name }}
      <button @click.prevent="remove(manager.id)">Delete</button>
    </li>
  </ul>
</template>

<script>
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default {
  data() {
    return {
      managers: [],
      filter: ''
    };
  },
  mounted() {
      this.setManagers()
  },
  methods: {
    remove(id) {
      deleteDoc(doc(db, "managers", id));
      return this.setManagers()
    },
    async setManagers() {
      const querySnapshot = await getDocs(collection(db, "managers"));
      const loadManager = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.$store.commit('GET_MANAGERS', loadManager)
      this.managers = this.$store.state.manager
    },
  },
  computed:{
      filterManager(){
          return this.managers.filter((manager) => manager.name.toLowerCase().includes(this.filter.toLowerCase()))
      }
  }
};
</script>

<style>
</style>