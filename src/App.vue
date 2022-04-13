<template>
    <div id="app">
      <NavBar />
      
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
export default {
  components:{
    NavBar
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
* {
  font-family: "Montserrat", sans-serif;
}

</style>
