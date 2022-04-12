<template>
  <h1>TestBank Managers - Welcome</h1>
  <div class="container">
    <form @submit.prevent="login">
      <h1>Login</h1>
      <div class="email-pass">
        <label for="email"> Email</label>
        <input class="in-email-pass" type="email" v-model="email" />
        <label for="password">Password</label>
        <input class="in-email-pass" type="password" v-model="password" />
      </div>
      <p v-if="errMsg" style="color: red">{{ errMsg }}</p>
      <button type="submit">Login</button>

      <p>
        You don't have an account?
        <router-link to="/register">Register Now!</router-link>
      </p>
    </form>
  </div>
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
        .then(() => {
          
          console.log(auth.currentUser.metadata.lastSignInTime);//ultimo horario que fez login
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}
h1 {
  text-align: center;
}
p {
  text-align: center;
  font-weight: bolder;
}
form {
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 50px auto;
}
input {
  display: block;
  border-radius: 10px;
  margin: 4px auto;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
}
label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;
}
.container {
  display: flex;
  width: 400px;
  margin: 10px auto;
  border: 1px solid plum;
  box-shadow: 12px 5px 10px 5px rgba(36, 2, 36, 0.432);
  border-radius: 15px;
}
.email-pass {
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-top: 15px;
}
.in-email-pass {
  width: 100%;
  height: 36px;
}
button {
  width: 323px;
  height: 38px;
  background: #480048;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin-left: 31px;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
}
</style>