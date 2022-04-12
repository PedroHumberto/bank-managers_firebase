<template>
  <div class="container">
    <p v-show="msgErro" style="color: red">{{ msgErro }}</p>
    <form @submit.prevent="register">
        <h1>Register</h1>
      <div class="email-pass">
        <label for="email">Email</label>
        <input class="in-email-pass" type="email" v-model="user.email" />
        <label for="password">Senha</label>
        <input class="in-email-pass" type="password" v-model="user.password" />
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
      msgErro: "",
    };
  },
  methods: {
    register() {
      this.$store.dispatch("NEW_USER_REGISTER", this.user);
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
*{
  font-family: 'Montserrat', sans-serif;
}
h1{
    text-align: center;
}
.container{
  display: flex;
  width: 400px;
  margin: 10px auto;
  border: 1px solid plum
  
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
.in-nome {
  width: 155px;
  height: 36px;
  margin-right: 45px;
}
.in-sobrenome {
  width: 155px;
  height: 36px;
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
  color: #FFFFFF;
}
</style>