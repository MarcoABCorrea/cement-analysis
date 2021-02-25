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
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 100,
                min: 0,
                stepSize: 20,
                callback: (value) => {
                  return value.toString() + "%";
                },
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                max: 1000,
                min: 0,
              },
            },
          ],
        },
        elements: {
          line: {
            fill: false,
          },
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 1500,
        },
      },
    }),

    mounted() {
      this.renderChart(this.chartdata, this.options);
    },
  };
</script>
