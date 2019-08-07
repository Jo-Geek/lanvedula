window.randomScalingFactor = function () {
  return Math.round(Samples.utils.rand(1000, 2000));
};

var _chartBillperHead = function () {
  let ctx = document.getElementById('chartBillperHead').getContext('2d');

  let gradientFill = ctx.createLinearGradient(0, 0, 0, 75);
  gradientFill.addColorStop(0, "rgba(255, 255, 255, .6)");
  gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");

  window.chartBillperHead = new Chart(ctx, {
    type: 'line',
    labels: ["1", "2", "3", "4", "5", "6"],
    data: {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [{
        label: 'Bill / head',
        backgroundColor: gradientFill,
        borderColor: "#fff",
        borderWidth: 1,
        data: [

          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()

        ],
        fill: true
      }

      ]
    },
    options: {
      elements: {
        point: {
          radius: 0
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: 'rgba(0, 0, 0, 0)'
          }
        }],
        yAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: 'rgba(0, 0, 0, 0)'
          }
        }]
      },
      title: {
        display: false,
        text: ''
      },
      legend: {
        display: false,
        position: "bottom"
      },
      tooltips: {
        mode: 'index',
        intersect: true
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

var _chartExpenses = function () {
  let ctx = document.getElementById('chartExpenses').getContext('2d');

  let gradientFill = ctx.createLinearGradient(0, 0, 0, 75);
  gradientFill.addColorStop(0, "rgba(255, 255, 255, .6)");
  gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");

  window.chartExpenses = new Chart(ctx, {
    type: 'line',
    labels: ["1", "2", "3", "4", "5", "6"],
    data: {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [{
        label: 'Expense',
        backgroundColor: gradientFill,
        borderColor: "#fff",
        borderWidth: 1,
        data: [

          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()

        ],
        fill: true
      }

      ]
    },
    options: {
      elements: {
        point: {
          radius: 0
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: 'rgba(0, 0, 0, 0)'
          }
        }],
        yAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: 'rgba(0, 0, 0, 0)'
          }
        }]
      },
      title: {
        display: false,
        text: ''
      },
      legend: {
        display: false,
        position: "bottom"
      },
      tooltips: {
        mode: 'index',
        intersect: true
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

var _chartSubscribers = function () {
  let ctx = document.getElementById('chartSubscribers').getContext('2d');

  let gradientFill = ctx.createLinearGradient(0, 0, 0, 75);
  gradientFill.addColorStop(0, "rgba(255, 255, 255, .6)");
  gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");

  window.chartSubscribers = new Chart(ctx, {
    type: 'line',
    labels: ["1", "2", "3", "4", "5", "6"],
    data: {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [{
        label: 'Expense',
        backgroundColor: gradientFill,
        borderColor: "#fff",
        borderWidth: 1,
        data: [

          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()

        ],
        fill: true
      }

      ]
    },
    options: {
      elements: {
        point: {
          radius: 0
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: 'rgba(0, 0, 0, 0)'
          }
        }],
        yAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: 'rgba(0, 0, 0, 0)'
          }
        }]
      },
      title: {
        display: false,
        text: ''
      },
      legend: {
        display: false,
        position: "bottom"
      },
      tooltips: {
        mode: 'index',
        intersect: true
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

var _chartAdditionals = function () {
  let ctx = document.getElementById('chartAdditionals').getContext('2d');

  let gradientFill = ctx.createLinearGradient(0, 0, 0, 75);
  gradientFill.addColorStop(0, "rgba(255, 255, 255, .6)");
  gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");

  window.chartAdditionals = new Chart(ctx, {
    type: 'line',
    labels: ["1", "2", "3", "4", "5", "6"],
    data: {
      labels: ["1", "2", "3", "4", "5", "6"],
      datasets: [{
        label: 'Additional',
        backgroundColor: gradientFill,
        borderColor: "#fff",
        borderWidth: 1,
        data: [

          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor()

        ],
        fill: true
      }

      ]
    },
    options: {
      elements: {
        point: {
          radius: 0
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: 'rgba(0, 0, 0, 0)'
          }
        }],
        yAxes: [{
          ticks: {
            display: false
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: 'rgba(0, 0, 0, 0)'
          }
        }]
      },
      title: {
        display: false,
        text: ''
      },
      legend: {
        display: false,
        position: "bottom"
      },
      tooltips: {
        mode: 'index',
        intersect: true
      },
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

$(document).ready(function () {
  _chartBillperHead();
  _chartExpenses();
  _chartSubscribers();
  _chartAdditionals();

})