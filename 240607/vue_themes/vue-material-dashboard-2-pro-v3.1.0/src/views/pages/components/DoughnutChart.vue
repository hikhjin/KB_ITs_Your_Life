<template>
  <div class="chart">
    <canvas :id="id" class="chart-canvas" :height="height"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  name: "DoughnutChart",
  props: {
    id: {
      type: String,
      default: "doughnut-chart",
    },
    height: {
      type: String,
      default: "300",
    },
    chart: {
      type: Object,
      required: true,
      labels: Array,
      datasets: {
        type: Object,
        required: true,
        label: String,
        data: Array,
      },
    },
  },
  mounted() {
    // Doughnut chart
    var ctx = document.getElementById(this.id).getContext("2d");

    let chartStatus = Chart.getChart(this.id);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: this.chart.labels,
        datasets: [
          {
            label: this.chart.datasets.label,
            weight: 9,
            cutout: 60,
            tension: 0.9,
            pointRadius: 2,
            borderWidth: 2,
            backgroundColor: [
              "#03A9F4",
              "#3A416F",
              "#fb8c00",
              "#a8b8d8",
              "#e91e63",
            ],

            data: this.chart.datasets.data,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
    });
  },
};
</script>
