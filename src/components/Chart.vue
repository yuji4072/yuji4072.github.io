<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  name: 'chart',
  data () {
    return {
      data: {
        datasets: [{
            lineTension: 0,
            label: 'Atcoder Late',
            backgroundColor: '#f0821e',
            borderColor: '#f0821e',
            fill: false,
            data: [{
                x: '2021-01-02T22:40:00',
                y: 10
            }, {
                x: '2021-01-23T22:40:00',
                y: 131
            }, {
                x: '2021-01-30T22:40:00',
                y: 183
            }, {
                x: '2021-02-06T22:40:00',
                y: 341
            }, {
                x: '2021-02-20T22:40:00',
                y: 383
            }]
        }]
      },
      options: {
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'day'
                }
            }]
        }
    }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>