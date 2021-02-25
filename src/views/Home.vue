<template>
  <div class="home">
    <card>
      <cements-section :cements="cements"></cements-section>
      <scatter-chart :chart-data="datacollection"></scatter-chart>
    </card>
  </div>
</template>

<script>
  import ScatterChart from "@/components/ScatterChart.vue";
  import Card from "@/components/Card.vue";
  import CementsSection from "@/components/CementsSection.vue";
  import api from "@/utils/api";

  export default {
    name: "home",
    components: {
      CementsSection,
      Card,
      ScatterChart,
    },
    data() {
      return {
        datacollection: null,
        cements: [],
      };
    },
    mounted() {
      this.fillData();
      this.getAllCements();
    },
    methods: {
      getAllCements() {
        api.get().then((response) => {
          this.cements = response.data;
        });
      },
      fillData() {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: "Data One",
              backgroundColor: "#f87979",
              data: [this.getRandomInt(), this.getRandomInt()],
            },
            {
              label: "Data One",
              backgroundColor: "#f87979",
              data: [this.getRandomInt(), this.getRandomInt()],
            },
          ],
        };
      },
      getRandomInt() {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
      },
    },
  };
</script>
