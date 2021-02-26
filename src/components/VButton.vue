<template>
  <button class="button" @click="clicked">
    {{ text }}
  </button>
</template>

<script>
  export default {
    name: "v-button",
    props: ["text"],
    methods: {
      clicked() {
        this.$emit("click");
      },
    },
  };
</script>

<style scoped>
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

  button.button:focus {
    outline: none;
  }
</style>
