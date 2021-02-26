<template>
  <div class="laboratory-container">
    <card :title="'Strength and laboratory data'">
      <cement-table :data="tableData"></cement-table>
    </card>
  </div>
</template>

<script>
  import CementTable from "@/components/CementTable.vue";
  import Card from "@/components/Card.vue";

  export default {
    name: "laboratory-data-panel",
    props: ["tableData"],
    components: { Card, CementTable },
  };
</script>

<style scoped>
</style>
