/* CHART 1 */
/* DATA */
/*
var datesMatchingSizeArray = [
  "2022-03-01",
  "2022-02-01",
  "2022-01-01",
  "2021-12-01",
  "2021-11-01",
  "2021-10-01",
  "2021-09-01",
  "2021-08-01",
  "2021-07-01",
  "2021-06-01",
  "2021-05-01",
  "2021-04-01",
  "2021-03-01",
  "2021-02-01",
  "2021-01-01",
  "2020-12-01",
  "2020-11-01",
  "2020-10-01",
  "2020-09-01",
  "2020-08-01",
  "2020-07-01",
  "2020-06-01",
  "2020-05-01",
  "2020-04-01",
  "2020-03-01",
  "2020-02-01",
  "2020-01-01",
  "2019-12-01",
  "2019-11-01",
  "2019-10-01",
  "2019-09-01",
  "2019-08-01",
  "2019-07-01",
  "2019-06-01",
  "2019-05-01",
  "2019-04-01",
  "2019-03-01",
  "2019-02-01",
  "2019-01-01",
  "2018-12-01",
  "2018-11-01",
  "2018-10-01",
  "2018-09-01",
  "2018-08-01",
  "2018-07-01",
  "2018-06-01",
  "2018-05-01",
  "2018-04-01",
  "2018-03-01",
  "2018-02-01",
  "2018-01-01",
  "2017-12-01",
  "2017-11-01",
  "2017-10-01",
  "2017-09-01",
  "2017-08-01",
  "2017-07-01",
  "2017-06-01",
  "2017-05-01",
  "2017-04-01",
  "2017-03-01",
  "2017-02-01",
  "2017-01-01",
  "2016-12-01",
  "2016-11-01",
  "2016-10-01",
  "2016-09-01",
  "2016-08-01",
  "2016-07-01",
  "2016-06-01",
  "2016-05-01",
  "2016-04-01",
  "2016-03-01",
  "2016-02-01",
  "2016-01-01",
  "2015-12-01",
  "2015-11-01",
  "2015-10-01",
  "2015-09-01",
  "2015-08-01",
  "2015-07-01",
  "2015-06-01",
  "2015-05-01",
  "2015-04-01",
  "2015-03-01",
  "2015-02-01",
];
var sizeArray = [
  "89.35", 
  "89.35", 
  "89.35", 
  "89.35", 
  "81.23", 
  "81.23", 
  "81.23", 
  "81.23", 
  "81.23", 
  "73.85", 
  "73.85",
  "73.85", 
  "73.85", 
  "73.85", 
  "73.15", 
  "66.5", 
  "73.15", 
  "66.5", 
  "66.5", 
  "66.5", 
  "66.5", 
  "60.46", 
  "60.46",
  "60.46", 
  "60.46", 
  "54.96", 
  "54.96", 
  "54.96", 
  "78.45", 
  "72.82", 
  "49.74", 
  "68.43", 
  "65.88", 
  "45.0",
  "40.91", 
  "40.91", 
  "40.91", 
  "54.23", 
  "36.52", 
  "34.81", 
  "31.64", 
  "31.64", 
  "28.77", 
  "26.15", 
  "23.77",
  "23.77", 
  "33.31", 
  "20.69", 
  "20.69", 
  "17.1", 
  "17.1", 
  "16.24", 
  "15.61", 
  "14.19", 
  "12.9", 
  "11.85",
  "10.77", 
  "16.09", 
  "9.29", 
  "8.18", 
  "6.76", 
  "8.49", 
  "9.95", 
  "4.7", 
  "6.8", 
  "6.18", 
  "5.62", 
  "4.26", 
  "4.26",
  "6.03", 
  "6.03", 
  "7.08", 
  "5.85", 
  "3.27", 
  "3.27", 
  "3.03", 
  "3.03", 
  "3.03", 
  "1.92", 
  "1.75", 
  "1.75", 
  "1.59",
  "1.59", 
  "1.44", 
  "1.44", 
  "0.29",
];
*/

//function createChart() {
  async function fetchJSONsize() {
    var response = await fetch("/size.json");
    var jsonData = await response.json();

    /*var jsonData = {
      "root": {
        "rec": [
          { "Size": "89.35", "Date": "2022-03-01T00:00:00+01:00" },
          { "Size": "89.35", "Date": "2022-02-01T00:00:00+01:00" },
          { "Size": "89.35", "Date": "2022-01-01T00:00:00+01:00" },
          { "Size": "89.35", "Date": "2021-12-01T00:00:00+01:00" },
          { "Size": "81.23", "Date": "2021-11-01T00:00:00+01:00" },
          { "Size": "81.23", "Date": "2021-10-01T00:00:00+02:00" },
          { "Size": "81.23", "Date": "2021-09-01T00:00:00+02:00" },
          { "Size": "81.23", "Date": "2021-08-01T00:00:00+02:00" },
          { "Size": "81.23", "Date": "2021-07-01T00:00:00+02:00" },
          { "Size": "73.85", "Date": "2021-06-01T00:00:00+02:00" },
          { "Size": "73.85", "Date": "2021-05-01T00:00:00+02:00" },
          { "Size": "73.85", "Date": "2021-04-01T00:00:00+02:00" },
          { "Size": "73.85", "Date": "2021-03-01T00:00:00+01:00" },
          { "Size": "73.85", "Date": "2021-02-01T00:00:00+01:00" },
          { "Size": "73.15", "Date": "2021-01-01T00:00:00+01:00" },
          { "Size": "73.15", "Date": "2020-12-01T00:00:00+01:00" },
          { "Size": "66.50", "Date": "2020-11-01T00:00:00+01:00" },
          { "Size": "66.50", "Date": "2020-10-01T00:00:00+02:00" },
          { "Size": "66.50", "Date": "2020-09-01T00:00:00+02:00" },
          { "Size": "66.50", "Date": "2020-08-01T00:00:00+02:00" },
          { "Size": "66.50", "Date": "2020-07-01T00:00:00+02:00" },
          { "Size": "60.46", "Date": "2020-06-01T00:00:00+02:00" },
          { "Size": "60.46", "Date": "2020-05-01T00:00:00+02:00" },
          { "Size": "60.46", "Date": "2020-04-01T00:00:00+02:00" },
          { "Size": "60.46", "Date": "2020-03-01T00:00:00+01:00" },
          { "Size": "54.96", "Date": "2020-02-01T00:00:00+01:00" },
          { "Size": "54.96", "Date": "2020-01-01T00:00:00+01:00" },
          { "Size": "54.96", "Date": "2019-12-01T00:00:00+01:00" },
          { "Size": "78.45", "Date": "2019-11-01T00:00:00+01:00" },
          { "Size": "72.82", "Date": "2019-10-01T00:00:00+02:00" },
          { "Size": "49.74", "Date": "2019-09-01T00:00:00+02:00" },
          { "Size": "68.43", "Date": "2019-08-01T00:00:00+02:00" },
          { "Size": "65.88", "Date": "2019-07-01T00:00:00+02:00" },
          { "Size": "45.00", "Date": "2019-06-01T00:00:00+02:00" },
          { "Size": "40.91", "Date": "2019-05-01T00:00:00+02:00" },
          { "Size": "40.91", "Date": "2019-04-01T00:00:00+02:00" },
          { "Size": "40.91", "Date": "2019-03-01T00:00:00+01:00" },
          { "Size": "54.23", "Date": "2019-02-01T00:00:00+01:00" },
          { "Size": "36.52", "Date": "2019-01-01T00:00:00+01:00" },
          { "Size": "34.81", "Date": "2018-12-01T00:00:00+01:00" },
          { "Size": "31.64", "Date": "2018-11-01T00:00:00+01:00" },
          { "Size": "31.64", "Date": "2018-10-01T00:00:00+02:00" },
          { "Size": "28.77", "Date": "2018-09-01T00:00:00+02:00" },
          { "Size": "26.15", "Date": "2018-08-01T00:00:00+02:00" },
          { "Size": "23.77", "Date": "2018-07-01T00:00:00+02:00" },
          { "Size": "23.77", "Date": "2018-06-01T00:00:00+02:00" },
          { "Size": "33.31", "Date": "2018-05-01T00:00:00+02:00" },
          { "Size": "20.69", "Date": "2018-04-01T00:00:00+02:00" },
          { "Size": "20.69", "Date": "2018-03-01T00:00:00+01:00" },
          { "Size": "17.10", "Date": "2018-02-01T00:00:00+01:00" },
          { "Size": "17.10", "Date": "2018-01-01T00:00:00+01:00" },
          { "Size": "16.24", "Date": "2017-12-01T00:00:00+01:00" },
          { "Size": "15.61", "Date": "2017-11-01T00:00:00+01:00" },
          { "Size": "14.19", "Date": "2017-10-01T00:00:00+02:00" },
          { "Size": "12.90", "Date": "2017-09-01T00:00:00+02:00" },
          { "Size": "11.85", "Date": "2017-08-01T00:00:00+02:00" },
          { "Size": "10.77", "Date": "2017-07-01T00:00:00+02:00" },
          { "Size": "16.09", "Date": "2017-06-01T00:00:00+02:00" },
          { "Size": "9.29", "Date": "2017-05-01T00:00:00+02:00" },
          { "Size": "8.18", "Date": "2017-04-01T00:00:00+02:00" },
          { "Size": "6.76", "Date": "2017-03-01T00:00:00+01:00" },
          { "Size": "8.49", "Date": "2017-02-01T00:00:00+01:00" },
          { "Size": "9.95", "Date": "2017-01-01T00:00:00+01:00" },
          { "Size": "4.70", "Date": "2016-12-01T00:00:00+01:00" },
          { "Size": "6.80", "Date": "2016-11-01T00:00:00+01:00" },
          { "Size": "6.18", "Date": "2016-10-01T00:00:00+02:00" },
          { "Size": "5.62", "Date": "2016-09-01T00:00:00+02:00" },
          { "Size": "4.26", "Date": "2016-08-01T00:00:00+02:00" },
          { "Size": "4.26", "Date": "2016-07-01T00:00:00+02:00" },
          { "Size": "6.03", "Date": "2016-06-01T00:00:00+02:00" },
          { "Size": "6.03", "Date": "2016-05-01T00:00:00+02:00" },
          { "Size": "7.08", "Date": "2016-04-01T00:00:00+02:00" },
          { "Size": "5.85", "Date": "2016-03-01T00:00:00+01:00" },
          { "Size": "3.27", "Date": "2016-02-01T00:00:00+01:00" },
          { "Size": "3.27", "Date": "2016-01-01T00:00:00+01:00" },
          { "Size": "3.03", "Date": "2015-12-01T00:00:00+01:00" },
          { "Size": "3.03", "Date": "2015-11-01T00:00:00+01:00" },
          { "Size": "3.03", "Date": "2015-10-01T00:00:00+02:00" },
          { "Size": "1.92", "Date": "2015-09-01T00:00:00+02:00" },
          { "Size": "1.75", "Date": "2015-08-01T00:00:00+02:00" },
          { "Size": "1.75", "Date": "2015-07-01T00:00:00+02:00" },
          { "Size": "1.59", "Date": "2015-06-01T00:00:00+02:00" },
          { "Size": "1.59", "Date": "2015-05-01T00:00:00+02:00" },
          { "Size": "1.44", "Date": "2015-04-01T00:00:00+02:00" },
          { "Size": "1.44", "Date": "2015-03-01T00:00:00+01:00" },
          { "Size": "0.29", "Date": "2015-02-01T00:00:00+01:00" }
        ]
      }
    }
    */

    jsonData.root.rec.reverse();

    var sizeDateArray = [];
    for (let dateIndex = 0; dateIndex < jsonData.root.rec.length; dateIndex++) {
      const date = new Date(jsonData.root.rec[dateIndex].Date);
      const month = date.toLocaleDateString(navigator.language, {
        month: "long",
      });
      const year = date.toLocaleDateString("default", { year: "numeric" });
      sizeDateArray.push([month + " - " + year]);
    }

    var sizeArray = [];
    for (let index = 0; index < jsonData.root.rec.length; index++) {
      sizeArray.push(jsonData.root.rec[index].Size);
    }

    var customerDBMax = 100;
    var alpha = 0;

    const ctx = document.getElementById("myChart").getContext('2d');
    const gradientBg = ctx.createLinearGradient(0,0,0,700);
    gradientBg.addColorStop(0, 'skyblue');
    gradientBg.addColorStop(1, 'lightgrey');
    

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: sizeDateArray,
        datasets: [
          {
            label: "",
            borderColor: "black",
            data: sizeArray,
            backgroundColor: gradientBg,
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
          },
          y: {
            max: customerDBMax,
          },
        },
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "(Custom Header)",
            font: {
              size: 28,
            },
          },
          legend: {
            display: false,
          },
          tooltip: {
            titleAlign: "center",
            yAlign: "bottom",
            displayColors: false,
            bodyAlign: "left",
            callbacks: {
              label: function (tooltipItem) {
                alpha = customerDBMax - sizeArray[tooltipItem.dataIndex];
                if(customerDBMax != 0){
                  return [sizeArray[tooltipItem.dataIndex] + " GB brugt", alpha.toFixed(2) + " GB tilbage"];
                }
                return sizeArray[tooltipItem.dataIndex] + " GB brugt";
              },
            },
          },
        },
      },
    });
  }

  fetchJSONsize();

//createChart();

/* CHART 2 */
/* DATA */
/*
var dateArray = [
  "2017-12-27",
  "2018-01-01",
  "2018-02-01",
  "2018-03-01",
  "2018-04-01",
  "2018-05-01",
  "2018-06-01",
  "2018-07-01",
  "2018-08-01",
  "2018-09-01",
  "2018-10-01",
  "2018-11-01",
  "2018-12-01",
  "2019-01-01",
  "2019-02-01",
  "2019-03-01",
  "2019-04-01",
  "2019-05-01",
  "2019-06-01",
  "2019-07-01",
  "2019-08-01",
  "2019-09-01",
  "2019-10-26",
  "2019-11-01",
  "2019-12-01",
  "2020-01-01",
  "2020-02-01",
  "2020-03-26",
  "2020-04-01",
  "2020-05-01",
  "2020-06-01",
  "2020-07-01",
  "2020-08-01",
  "2020-09-01",
  "2020-10-19",
  "2020-11-01",
  "2020-12-01",
  "2021-01-01",
  "2021-02-01",
  "2021-03-01",
  "2021-04-01",
  "2021-05-01",
  "2021-06-01",
  "2021-07-01",
  "2021-08-01",
  "2021-09-01",
  "2021-10-01",
  "2021-11-01",
  "2021-12-03",
  "2022-01-01",
  "2022-02-01",
  "2022-03-22",
];
var versionsArray = [
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "9",
  "14.0.35570.0",
  "14.0.35570.0",
  "14.0.35570.0",
  "14.0.35570.0",
  "14.0.35570.0",
  "14.0.37587.0",
  "14.0.37587.0",
  "14.0.37587.0",
  "14.0.37587.0",
  "14.0.37587.0",
  "14.0.37587.0",
  "14.0.37587.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "14.0.42627.0",
  "16.9.20537.0",
  "16.9.20537.0",
  "16.9.20537.0",
  "17.11.30469.0",
];
*/
async function fetchJSONversions(jsonData) {
  
  var response = await fetch("/version.json");
  var jsonData = await response.json();
  
  
  var getLatestVersion =
    jsonData.root.rec[jsonData.root.rec.length - 1].Version;
  var getCurrentDateString = new Date().toISOString();
  jsonData.root.rec.push({
    Version: getLatestVersion,
    Date: getCurrentDateString,
  });

  // Remove version duplicates
  var dates = [];
  var versions = [];
  for (let index = 0; index < jsonData.root.rec.length; index++) {
    versions.push(jsonData.root.rec[index].Version);
    dates.push(jsonData.root.rec[index].Date);
  }
  var trimmedSet = new Set(versions);
  let arrayIndex = 0;
  let satisfied = false;
  while (satisfied == false) {
    if (versions[arrayIndex] == versions[arrayIndex + 1]) {
      versions.splice(arrayIndex + 1, 1);
      dates.splice(arrayIndex + 1, 1);
    } else {
      arrayIndex++;
    }
    if (trimmedSet.size == versions.length) {
      satisfied = true;
    }
  }
  //

  // Get from and to date on Tooltipitem
  var currentDate = new Date();
  var currentDateStringFormat = currentDate.toISOString();
  var currentDateArray = currentDateStringFormat.split("T");
  // Insert dates and versions into two dimensional array
  var mdArrayVersionDate = [];
  for (let dateIndex = 0; dateIndex < dates.length; dateIndex++) {
    if (dates[dateIndex + 1] == null) {
      mdArrayVersionDate.push([
        dates[dateIndex].split("T")[0],
        currentDateArray[0],
      ]);
    } else {
      mdArrayVersionDate.push([
        dates[dateIndex].split("T")[0],
        dates[dateIndex + 1].split("T")[0],
      ]);
    }
  }
  //
  console.table(mdArrayVersionDate);
  //

  // Sets the language of the chart data to the browsers language
  moment.locale(navigator.language);
  // Initialize chart
  const ctx2 = document.getElementById("myChart2");
  const myChart2 = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: versions,
      datasets: [
        {
          label: "",
          backgroundColor: ["red", "forestgreen", "dodgerblue"],
          data: mdArrayVersionDate,
          datalabels: {
            color: "rgb(0,0,0)",
            formatter: function (value, context) {
              return context.chart.data.labels[context.dataIndex];
            },
          },
        },
      ],
    },
    plugins: [ChartDataLabels],
    options: {
      maintainAspectRatio: false,
      indexAxis: "y",
      scales: {
        x: {
          type: "time",
          time: {
            unit: "month",
          },
          labels: [],
        },
        y: {
        },
      },
      plugins: {
        title: {
          display: true,
          text: "(Custom Header)",
          font: {
            size: 28,
          },
        },
        legend: {
          display: false,
        },
        tooltip: {
          titleAlign: "center",
          xAlign: "bottom",
          displayColors: false,
          callbacks: {
            title: function (tooltipItem) {
              return "Version: " + versions[tooltipItem[0].dataIndex];
            },
            label: function (tooltipItem) {
              return (
                mdArrayVersionDate[tooltipItem.dataIndex][0] +
                " - " +
                mdArrayVersionDate[tooltipItem.dataIndex][1]
              );
            },
          },
        },
      },
    },
  });
}

fetchJSONversions();
