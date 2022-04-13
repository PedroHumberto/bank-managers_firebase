<template>
  <div class="topnav">
    <router-link :class="homeStyle" to="/">Home</router-link>
    <router-link :class="managersStyle" to="/managers">Managers</router-link>
    <router-link :class="addStyle" to="/addmanager">Add Manager</router-link>
  </div>
</template>

<script>

export default {
  data() {
    return {
      homeStyle: "",
      addStyle: "",
      managersStyle: "",
      currentRoute: '',
    };
  },
};
</script>

<style scoped>

.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #480048;
  color: white;
}

</style>