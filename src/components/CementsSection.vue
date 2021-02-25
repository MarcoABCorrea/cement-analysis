<template>
  <div id="cements">
    <button
      class="button"
      @click="getCementData(cement.id)"
      :key="cement.id"
      v-for="cement in cements"
    >
      {{ cement.id }}
    </button>
  </div>
</template>

<script>
  import api from "@/utils/api";

  export default {
    name: "cements-section",
    props: ["cements"],
    methods: {
      getCementData(cementId) {
        api.get(cementId).then((response) => {
          console.log("hehe", response.data);
        });
      },
    },
  };
</script>

<style scoped>
  #cements {
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
