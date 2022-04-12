<template>
  <form @submit.prevent="addManager">
    <label for="text"> Name</label>
    <input type="text" v-model="manager.name" />
    <label for="text">Bank</label>
    <input type="text" v-model="manager.bank" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
import { db } from "../firebase/firebase"
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      manager: {
        name: "",
        bank: "",
      },
    };
  },
  methods: {
    async addManager(){
      await addDoc(collection(db, "managers"), {
      name: this.manager.name,
      bank: this.manager.bank,
    });
    }
  },
};
</script>

<style>
</style>