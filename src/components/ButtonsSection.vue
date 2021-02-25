<template>
  <div class="buttons-container">
    <button
      class="button"
      @click="clicked(data)"
      :key="data.id"
      v-for="data in buttons"
    >
      {{ data.id }}
    </button>
  </div>
</template>

<script>
  export default {
    name: "buttons-section",
    props: ["buttons"],
    methods: {
      clicked(value) {
        this.$emit("clicked", value);
      },
    },
  };
</script>

<style scoped>
  .buttons-container {
    text-align: center;
    margin-bottom: 0.7rem;
  }

  button.button {
    margin-right: 1rem;
    border-style: solid;
    border-width: 1px;
    background-color: #fff;
    border-color: rgba(0, 0, 0, 0.56);
    color: #111;
    padding: calc(0.4rem - 1px) 1rem;
    cursor: pointer;
  }

  button.button:hover {
    text-decoration: none;
    background-color: #f2f2f2;
    border-color: rgba(0, 0, 0, 0.56);
  }
</style>
