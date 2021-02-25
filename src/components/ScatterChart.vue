<script>
  import { Scatter, mixins } from "vue-chartjs";
  const { reactiveProp } = mixins;

  export default {
    extends: Scatter,
    mixins: [reactiveProp],
    props: ["chartData"],
    data: () => ({
      options: {
        scales: {
          xAxes: [
            {
              type: "time",
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 100,
                stepSize: 20,
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    }),
    mounted() {
      this.renderChart(this.chartData, this.options);
    },
    watch: {
      chartData: function () {
        this.renderChart(this.chartData, this.options);
      },
    },
  };
</script>
