<template>
  <div class="compressive-strength-container">
    <card :title="'Cements'">
      <buttons-section
        v-if="!loading && showButtons"
        :buttons="cements"
        @clicked="handleClick"
      ></buttons-section>

      <loader v-if="loading" />
      <div v-if="!loading && showChart" class="chart-container">
        <p class="label">Compressive Strength</p>
        <scatter-chart :chart-data="chartData"></scatter-chart>
      </div>
    </card>
  </div>
</template>

<script>
  import api from "@/utils/api";
  import ButtonsSection from "@/components/ButtonsSection.vue";
  import Card from "@/components/Card.vue";
  import ScatterChart from "@/components/ScatterChart.vue";
  import Loader from "@/components/Loader.vue";

  export default {
    name: "compressive-strength-panel",
    components: { ButtonsSection, Card, ScatterChart, Loader },
    data() {
      return {
        chartData: null,
        tableData: null,
        cements: [],
        loading: true,
        showChart: false,
        showButtons: false,
      };
    },
    mounted() {
      this.getAllCements();
    },
    methods: {
      handleClick(cement) {
        this.showChart = true;
        this.loading = true;
        this.getCementData(cement.id);
      },
      getCementData(cementId) {
        api.get(cementId).then((response) => {
          this.setChartData(response.data);
          this.loading = false;
          this.$emit("cementData", response.data);
        });
      },
      getAllCements() {
        api.get().then((response) => {
          this.cements = response.data;
          this.showButtons = true;
          this.loading = false;
        });
      },
      setChartData(chartData) {
        let compStr2d = [],
          compStr7d = [],
          compStr28d = [];
        chartData.map((v) => {
          if (v["comp. str. 2d"]) {
            compStr2d.push({ x: v["recorded-at"], y: v["comp. str. 2d"] });
          }
          if (v["comp. str. 7d"]) {
            compStr7d.push({ x: v["recorded-at"], y: v["comp. str. 7d"] });
          }
          if (v["comp. str. 28d"]) {
            compStr28d.push({ x: v["recorded-at"], y: v["comp. str. 28d"] });
          }
        });

        this.chartData = {
          datasets: [
            {
              label: "2 days",
              data: compStr2d,
              borderColor: "rgba(193, 57, 57, 0.8)",
              backgroundColor: ["rgba(193, 57, 57, 0.8)"],
            },
            {
              label: "7 days",
              data: compStr7d,
              borderColor: "rgba(47, 152, 208, 0.8)",
              backgroundColor: ["rgba(47, 152, 208, 0.8)"],
            },
            {
              label: "28 days",
              data: compStr28d,
              borderColor: "rgba(28, 103, 38, 0.8)",
              backgroundColor: ["rgba(28, 103, 38, 0.8)"],
            },
          ],
        };
      },
    },
  };
</script>

<style scoped>
  p.label {
    text-align: center;
    color: #6d6767;
    margin: 2rem 0 0;
  }
</style>
