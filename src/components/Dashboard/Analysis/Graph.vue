<template>
  <apexchart type="bar" height="270" width="90%" :options="chartOptions" :series="series"></apexchart>
</template>

<script>
export default {
  name: "AnalysisGraph",
  data() {
    return {
      series: [
        {
          name: "Exam",
          data: [10, 30, 8, 30, 35, 30, 40, 25],
        },
        {
          name: "Materials",
          data: [18, 40, 20, 30, 40, 40, 45, 50],
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: true,
          },
        },
        colors: ["#EE66BB", "#ebeef4"],
        dataLabels: {
          enabled: false,
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "top",
                offsetX: -10,
                offsetY: 0,
                width: 200,
              },
            },
          }
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "60%",
          },
        },
        xaxis: {
          categories: ["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
          labels: {
            style: {
              colors: "#B2B5C8",
            },
          },
        },

        tooltip: {
          // fillSeriesColor: true,
        },

        yaxis: {
          labels: {
            style: {
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
              colors: ["#B2B5C8"],
            },
            formatter: function (val) {
              return val + " hr";
            },
          },
        },

        legend: {
          position: "top",
          offsetY: 1,
          fontWeight: 400,
          fontSize: "13px",

          labels: {
            colors: "#a2afc8",
          },
          markers: {
            width: 12,
            height: 12,
          },
        },
        fill: {
          opacity: 1,
        },
      },
    };
  },
};
</script>

<style>
.apexcharts-tooltip {
  background: #bebcbc;
  color: rgb(8, 8, 8);
}
</style>