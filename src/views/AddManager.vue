<template>
  <p v-show="msgError" style="color: red">{{ msgError }}</p>
  <ManagerForm :manager="manager" @submit.prevent="addManager" />
</template>

<script>
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import ManagerForm from "../components/ManagerForm.vue";
export default {
  components: {
    ManagerForm,
  },
  data() {
    return {
      manager: {
        name: "",
        bank: "",
        edit: false,
      },
      msgError: "",
    };
  },
  methods: {
    async addManager() {
      if (this.manager.name && this.manager.bank) {
        await addDoc(collection(db, "managers"), {
          name: this.manager.name,
          bank: this.manager.bank,
          edit: this.manager.edit,
        });
      }
      if (!this.manager.name) {
        return (this.msgError = "Name required.");
      }
      if (!this.manager.bank) {
        return (this.msgError = "Bank required.");
      }

      this.manager.name = "";
      this.manager.bank = "";
    },
  },
};
</script>

<style>
</style>