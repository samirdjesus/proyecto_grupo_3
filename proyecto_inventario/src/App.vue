<template>
  <div id="app">
    <!-- <Home></Home>
    <Products></Products>
    <Sales></Sales>
    <Inventory></Inventory> -->
    <router-view></router-view>  </div>
</template>

<script>
// import Home from '@/views/Home.vue';
// import Products from '@/views/Products.vue';
// import Sales from '@/views/Sales.vue';
// import Inventory from '@/views/Inventory.vue';

export default {
  name: 'App',
  components: {
    // Home,
    // Products,
    // Sales,
    // Inventory,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
