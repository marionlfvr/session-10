Vue.component('multibar-chart', {
  extends: VueChartJs.HorizontalBar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["Crise des migrants en Méditerrannée","Manifestations du mouvement anti-islam PEGIDA à Dresde","Crise financière grecque","Conflit en Ukraine entre la Russie et les pays occidentaux"],
      datasets: [
        {
          label: "Confiance très forte",
          display: true,
          backgroundColor: '#4d9916',
          data: [0.03,0.03,0.04,0.02],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        },
          {
          label: "Confiance forte",
          display: true,
          backgroundColor: '#64e00b',
          data: [0.45,0.37,0.31,0.3],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        },
              {
          label: "Sans réponse",
          display: true,
          backgroundColor: '#bababa',
          data: [0.03,0.03,0.04,0.02],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        },
                    {
          label: "Confiance faible",
          display: true,
          backgroundColor: '#dd4b4b',
          data: [0.03,0.03,0.04,0.02],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        },
                    {
          label: "Confiance très faible",
          display: true,
          backgroundColor: '#aa2525',
          data: [0.03,0.03,0.04,0.02],
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        }
      ]
    };

    var options = this.options || {
      tooltips: {
        enabled: false
      },
      legend: {
        display: true
      },
			plugins: {
				datalabels: {
          display: false,
					color: '#c46060',
					font: {
						weight: 'bold'
					},
					formatter: Math.round
				}
			},
      scales: {
        yAxes:  [
          {
            display: true,
            stacked: true,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            stacked: true,
            categoryPercentage: 1,
            barPercentage: 2/3
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
