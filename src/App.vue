<template>
  <div id="app">
    <div class="navbar">
      <h2>Cement Analysis</h2>
    </div>
    <data-analysis />
  </div>
</template>

<script>
  import DataAnalysis from "@/views/DataAnalysis.vue";

  export default {
    components: {
      DataAnalysis,
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

  .data-analysis {
    margin-top: 6rem;
    padding: 0 2rem 4rem;
  }
</style>
