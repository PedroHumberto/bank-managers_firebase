<template>
  <div class="container">
    <h1>This is yours Bank Managers</h1>
    <input @input="filter = $event.target.value" />
    <div class="managers">
      <div
        class="manager-card"
        v-for="manager in filterManager"
        :key="manager.id"
      >
        <p v-if="!manager.edit">Name: {{ manager.name }}</p>
        <div v-else class="edit">
          <input v-model="manager.name" />
          <button @click.prevent="save">Save</button>
        </div>
        <p>Bank: {{ manager.bank }}</p>
        <button @click.prevent="remove(manager.id)">Delete</button>
        <button @click.prevent="editManager(manager)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";
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
    async setManagers() {
      const querySnapshot = await getDocs(collection(db, "managers"));
      const loadManager = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.$store.commit("GET_MANAGERS", loadManager);
      this.managers = this.$store.state.manager;
    },
    editManager(manager) {
      manager.edit = true;
    },
  },
  computed: {
    filterManager(filter) {
      this.$store.commit("FILTER", filter.filter);
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
  margin: 5px 5px;
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
}
.manager-card {
  display: flex;
  flex-direction: column;
  margin: 10px 10px;

  border: 1px solid plum;
  box-shadow: 5px 2px 5px 2px rgba(36, 2, 36, 0.432);
  border-radius: 15px;
}
.edit {
  margin: 5px 10px;
}
</style>