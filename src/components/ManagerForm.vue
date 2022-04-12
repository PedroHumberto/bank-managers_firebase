<template>
  <form>
    <label for="text"> Name</label>
    <input type="text" v-model="manager.name" />
    <label for="text">Bank</label>
    <input type="text" v-model="manager.bank" />
    <button type="submit">Add</button>
  </form>
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

<style>

</style>