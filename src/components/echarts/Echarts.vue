<template lang="pug">
  .chart
    Row
      .col
        Col(:span="12")
          div(id="chartColumn" style="width:100%; height:400px;")
        Col(:span="12")
          div(id="chartPie" style="width:100%; height:400px;")
        Col(:span="12")
          div(id="chartLine" style="width:100%; height:400px;")
        Col(:span="12")
          div(id="chartBar" style="width:100%; height:400px;")
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      chartColumn: null,
      chartBar: null,
      chartLine: null,
      chartPie: null
    }
  },
  mounted: function () {
    this.chartBar = echarts.init(document.getElementById('chartBar'))
    this.chartColumn = echarts.init(document.getElementById('chartColumn'))
    this.chartLine = echarts.init(document.getElementById('chartLine'))
    this.chartPie = echarts.init(document.getElementById('chartPie'))

    this.chartColumn.setOption({
      title: { text: 'Column text' },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
    this.chartPie.setOption({
      title: {
        text: 'Pie Echarts',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件直销' },
            { value: 234, name: '联盟广告' },
            { value: 135, name: '视频广告' },
            { value: 1548, name: '搜索引擎' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })

    this.chartLine.setOption({
      title: {
        text: 'Line text'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '搜索引擎']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件销售',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    })
  }
}
</script>

<style lang="stylus" scoped>
@import './style/echarts'
</style>

