var mychart = echarts.init(document.getElementById('leftt'));
var option;
var mychart2 = echarts.init(document.getElementById('rightt'));
var option2;
option = {
  xAxis: {
    type: 'category',
    data: ['加法', '减法', '乘法', '除法', '进位']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [JSON.parse(localStorage.getItem("zhexian"))["jia"],JSON.parse(localStorage.getItem("zhexian"))["jian"] , 0,0, 0],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
};
option2 = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: '做题情况饼图展示',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: JSON.parse(localStorage.getItem("bing"))["right"], name: 'right' },
        { value: JSON.parse(localStorage.getItem("bing"))["wrong"], name: 'wrong'},
      ]
    }
  ]
};
mychart.setOption(option);
mychart2.setOption(option2);