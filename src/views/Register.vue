<template>
  <div class="container">
    <form @submit.prevent="register">
        <h1>Register</h1>
      <div class="email-pass">
    <p v-show="msgError" style="color: red">{{ msgError }}</p>
        <label for="email">Email</label>
        <input class="input-email-pass" type="email" v-model="user.email" />
        <label for="password">Senha</label>
        <input class="input-email-pass" type="password" v-model="user.password" minlength="6" />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {

  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      msgError: "",
    };
  },
  methods: {
    register() {
      if (this.user.email && this.user.password) {
        return  this.$store.commit("NEW_USER_REGISTER", this.user);
      }
      if (!this.user.email) {
        return this.msgError='Email required.';
      }
      if (!this.user.password) {
        return this.msgError='Password required.';
      }
     
    },
  },
};
</script>
<style scoped>
h1{
    text-align: center;
}
.container {
  display: flex;
  width: 400px;
  margin: 10px auto;
  border: 1px solid plum;
  box-shadow: 12px 5px 10px 5px rgba(36, 2, 36, 0.432);
  border-radius: 15px;
}
form {
  display: flex;
  flex-direction: column;
  
  width: 100%;
  margin: 50px auto;
}
.email-pass {
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-top: 15px;
}
label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000;
}
input {
  display: block;
  border-radius: 10px;
  margin: 4px auto;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
}
.input-email-pass {
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
  color: #FFFFFF;
  font-weight: bold;
  cursor: pointer;
}
</style>