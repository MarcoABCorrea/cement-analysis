<template>
  <div class="data-analysis">
    <compressive-strength-panel @cementData="setTableData" />
    <laboratory-data-panel
      class="laboratory-data-panel"
      v-if="tableData !== null"
      :table-data="tableData"
    />
  </div>
</template>

<script>
  import CompressiveStrengthPanel from "@/components/CompressiveStrengthPanel.vue";
  import LaboratoryDataPanel from "@/components/LaboratoryDataPanel.vue";

  export default {
    name: "data-analysis",
    components: {
      CompressiveStrengthPanel,
      LaboratoryDataPanel,
    },
    data() {
      return { tableData: null };
    },
    methods: {
      setTableData(data) {
        this.tableData = data;
      },
    },
  };
</script>

<style scoped>
  .laboratory-data-panel {
    margin-top: 5rem;
  }
</style>
