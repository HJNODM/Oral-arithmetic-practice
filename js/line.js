var mychart = echarts.init(document.getElementById('left'));
var option;
var mychart2 = echarts.init(document.getElementById('right'));
var option2;
option = {
  color: ['#37A2FF', '#00DDFF', '#80FFA5', '#FF0087', '#FFBF00'],
  title: {
    text: '每日题目统计'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
  },
  
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: [ '6.1', '6.2', '6.3', '6.4', '6.5']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
                      offset: 0,
                      color: 'rgba(58,77,233,0.8)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(58,77,233,0.3)'
                    }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [20,30, 20, 30, 50]
    },
    
  ]
};
option2 = {
  color: ['#37A2FF', '#00DDFF', '#80FFA5', '#FF0087', '#FFBF00'],
  title: {
    text: '错题类型分析'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
  },
  
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['加法', '减法', '乘法', '除法', '混合']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          
          {
                      offset: 0,
                      color: 'rgba(58,77,233,0.8)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(58,77,233,0.3)'
                    }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 0, 0, 0]
    },
    
  ]
};

mychart.setOption(option);
mychart2.setOption(option2);