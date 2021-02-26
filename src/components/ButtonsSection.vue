<template>
  <div class="buttons-container">
    <v-button
      :text="data.id"
      :key="data.id"
      v-for="data in buttons"
      @click="clicked(data)"
    ></v-button>
  </div>
</template>

<script>
  import VButton from "@/components/VButton.vue";

  export default {
    name: "buttons-section",
    components: { VButton },
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
</style>
