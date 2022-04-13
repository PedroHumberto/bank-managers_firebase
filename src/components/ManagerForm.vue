<template>
  <div class="container">
    <form>
      <label for="text">Name</label>
      <input type="text" v-model="manager.name" />
      <label for="number">Bank</label>
      <input type="number" v-model="manager.bank" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
export default {
    props:{
        manager:{
            required: true
        }
    }
}
</script>

<style scoped>

p {
  text-align: center;
  font-weight: bolder;
}
h1 {
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px auto;
}
.container {
  text-align: center;
  display: flex;
  width: 400px;
  margin: 10px auto;
  border: 1px solid plum;
  box-shadow: 12px 5px 10px 5px rgba(36, 2, 36, 0.432);
  border-radius: 15px;
}
button {
  width: 328px;
  height: 38px;
  background: #480048;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  margin-left: 36px;
  margin-top: 15px;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;

}

input {
  display: block;
  border-radius: 10px;
  margin: 4px 55px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
}
</style>