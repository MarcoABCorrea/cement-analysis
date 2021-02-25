<template>
  <div class="card">
    <h2 class="title">{{ title }}</h2>
    <slot />
  </div>
</template>

<script>
  export default {
    name: "card",
    props: ["title"],
  };
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    margin: auto;
    min-height: 45%;
    min-width: 30%;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 0 1rem 1rem;
    font-family: Arial, Helvetica, sans-serif;
    transition-duration: 0.5s;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
</style>
