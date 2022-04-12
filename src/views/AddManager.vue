<template>
  <ManagerForm :manager="manager" @submit.prevent="addManager"/>
</template>

<script>
import { db } from "../firebase/firebase"
import { collection, addDoc } from "firebase/firestore";
import ManagerForm from '../components/ManagerForm.vue'
export default {
  components:{
    ManagerForm
  },
  data() {
    return {
      manager: {
        name: "",
        bank: "",
        edit: false
      },
    };
  },
  methods: {
    async addManager(){
      await addDoc(collection(db, "managers"), {
        name: this.manager.name,
        bank: this.manager.bank,
        edit: this.manager.edit
      });
      this.manager.name =''
      this.manager.bank =''
      
    }
  },
};
</script>

<style>
</style>