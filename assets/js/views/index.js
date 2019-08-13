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

var _chartExpenseTrend = function () {
  let ctx = document.getElementById('chartExpenseTrend').getContext('2d');

  let gradientFill = ctx.createLinearGradient(0, 0, 0, 200);
  gradientFill.addColorStop(0, "rgba(211,170,249, .6)");
  gradientFill.addColorStop(1, "rgba(211,170,249, 0)");

  window.chartExpenseTrend = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Expense',
        backgroundColor: gradientFill,
        borderColor: "rgb(185,132,244)",
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
          radius: 2
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            display: true
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
            zeroLineColor: 'rgba(150, 150, 150, 0.5)'
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

var _chartSubscriberTrend = function () {
  let ctx = document.getElementById('chartSubscriberTrend').getContext('2d');

  let gradientFill = ctx.createLinearGradient(0, 0, 0, 200);
  gradientFill.addColorStop(0, "rgba(132,223,187, .6)");
  gradientFill.addColorStop(1, "rgba(132,223,187, 0)");

  window.chartSubscriberTrend = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [{
        label: 'Subscribers',
        backgroundColor: gradientFill,
        borderColor: "rgb(90,205,156)",
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
      },
      {
        label: 'Additionals',
        backgroundColor: "rgba(226,206,85,.25)",
        borderColor: "rgb(226,206,85)",
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
          radius: 2
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            display: true
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
        display: true,
        position: "top"
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
  _chartExpenseTrend();
  _chartSubscriberTrend();
})