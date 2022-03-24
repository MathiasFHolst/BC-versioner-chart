/* CHART 1 */
/* DATA */
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
  89.35, 89.35, 89.35, 89.35, 81.23, 81.23, 81.23, 81.23, 81.23, 73.85, 73.85,
  73.85, 73.85, 73.85, 73.15, 73.15, 66.5, 66.5, 66.5, 66.5, 66.5, 60.46, 60.46,
  60.46, 60.46, 54.96, 54.96, 54.96, 78.45, 72.82, 49.74, 68.43, 65.88, 45.0,
  40.91, 40.91, 40.91, 54.23, 36.52, 34.81, 31.64, 31.64, 28.77, 26.15, 23.77,
  23.77, 33.31, 20.69, 20.69, 17.1, 17.1, 16.24, 15.61, 14.19, 12.9, 11.85,
  10.77, 16.09, 9.29, 8.18, 6.76, 8.49, 9.95, 4.7, 6.8, 6.18, 5.62, 4.26, 4.26,
  6.03, 6.03, 7.08, 5.85, 3.27, 3.27, 3.03, 3.03, 3.03, 1.92, 1.75, 1.75, 1.59,
  1.59, 1.44, 1.44, 0.29,
];

/* Reverses both recieved arrays so we get the oldest data first */
datesMatchingSizeArray.reverse();
sizeArray.reverse();

/* Taking dates from data recieved and adding name of the month + 4 digit year number instead of full dateString */
var sizeDateArray = [];
for (let dateIndex = 0; dateIndex < datesMatchingSizeArray.length; dateIndex++) {
  const date = new Date(`${datesMatchingSizeArray[dateIndex]}`);
  const month = date.toLocaleDateString("default", { month: "long" });
  const year = date.toLocaleDateString("default", { year: "numeric" });
  sizeDateArray.push([`${month + " - " + year}`]);
}

/* Initialize chart */
const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: sizeDateArray,
    datasets: [
      {
        label: "",
        borderColor: "rgb(0,0,100)",
        data: sizeArray,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      }
    }
  },
});

/* CHART 2 */
/* DATA */
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
] 
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


/* Adds a copy of the Last version so the length matches dateArray when adding the string Today at the end */
versionsArray.push(versionsArray[versionsArray.length-1])


/* Removes all duplicates of recieved versions in versionsArray */

var lengthOfArrayRecieved = dateArray.length;
var removedDuplicates = [(testSet = new Set(versionsArray))];
let arrayIndex = 0;
let satisfied = false;
while (satisfied == false) {
  if (versionsArray[arrayIndex] == versionsArray[arrayIndex + 1]) {
    versionsArray.splice(arrayIndex + 1, 1);
    dateArray.splice(arrayIndex + 1, 1);
  } else {
    arrayIndex++;
  }
  if (testSet.size == versionsArray.length) {
    satisfied = true;
  }
}
var mdArrayVersionDate = [];

 var currentDate = new Date();
 var currentDateStringFormat = currentDate.toISOString();
 var currentDateArray = currentDateStringFormat.split('T');
 var test = 0;
 for (let dateIndex = 0; dateIndex < dateArray.length; dateIndex++) {
  if(dateArray[dateIndex+1] == null){
    console.log("HEEYY")
    mdArrayVersionDate.push([
      `${dateArray[dateIndex]}`,
      `${currentDateArray[0]}`,
    ]);
  } else {
    mdArrayVersionDate.push([
      `${dateArray[dateIndex]}`,
      `${dateArray[dateIndex+1]}`,
    ]);
  }
}
console.table(mdArrayVersionDate);
/* Initialize chart */
const ctx2 = document.getElementById("myChart2");
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
  labels: versionsArray,
    datasets: [
      {
        label: "",
        borderColor: "rgb(30,144,255)",
        backgroundColor: ["red", "green", "blue"],
        data: mdArrayVersionDate, 
        /*[
          https://www.youtube.com/watch?v=ti0-q5bjuhE
          ['2017-12-27', '2019-10-01'],
          ['2019-10-01', '2020-03-01'],
          ['2020-03-01', '2020-10-01'],
          ['2020-10-01', '2021-12-01'],
          ['2021-12-01', '2022-03-01'],
        ],*/
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
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        //type: "category",
        type: "time",
        time: {
          unit: 'month',
        },
        labels: [],
        },
      y: {

      },
    },
  },
});
