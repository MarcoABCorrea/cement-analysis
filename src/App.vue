<template>
  <div id="app">
    <div class="navbar">
      <h2>Cement Analysis</h2>
    </div>
    <home />
  </div>
</template>

<script>
  import Home from "@/views/Home.vue";

  export default {
    components: {
      Home,
    },
  };
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }

  .navbar {
    display: flex;
    overflow: hidden;
    color: #fff;
    background-color: #333;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .navbar h2 {
    margin-left: 1rem;
  }

  .home {
    margin-top: 6rem;
    padding: 0 2rem;
  }
</style>
