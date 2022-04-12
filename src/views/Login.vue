<template>
<h1>Login</h1>
  <form @submit.prevent="login">
      <div class="email">
        <label for="email"></label>
        <input type="email" v-model="email" />
      </div>
      <div class="password">
        <label for="password"></label>
        <input type="password" v-model="password" />
      </div>
    <p v-if="errMsg">{{ errMsg }}</p>
    
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      errMsg: "",
    };
  },

  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((data) => {
          console.log(auth.currentUser);
          this.$router.push({ name: "managers" });
        })
        .catch((error) => {
          console.log(error);
          switch (error.code) {
            case "auth/invalid-email":
              this.errMsg = "Invalid Email";
              break;
            case "auth/user-not-found":
              this.errMsg = "User Not-Found";
              break;
            case "auth/wrong-password":
              this.errMsg = "Wrong Password";
              break;
            default:
              this.errMsg = "Wrong Email or Password";
              break;
          }
        });
    },
  },
};
</script>

<style>

</style>