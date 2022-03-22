const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Januar 2021', 'Februar', 'Marts', 'Januar 2022', 'Marts 2022'],
    datasets: [
      {
        label: "4.2.0-p5-13831",
        borderColor: "rgb(30,144,255)",
        data: ['ON', 'OFF'],
        stepped: true,
      },
      {
        label: "5.0.0-EA2-2661",
        borderColor: "rgb(0,0,0)",
        data: ['OFF', 'ON', 'ON', 'OFF', 'OFF'],
        stepped: true,
      },
      {
          label: "7.0.0-p1-14932",
          borderColor: "rgb(0,222,0)",
          data: ['OFF', 'OFF', 'OFF', 'ON', 'ON'],
          stepped: true,
      }
    ],
  },
  options: {
    //indexAxis: 'y',
    scales: {
      y: {
        type: 'category',
        labels: ['ON', 'OFF'],
        beginAtZero: true,
        //stacked: true,
      },
      x: {
        //stacked: true,
      },
    },
  },
});
