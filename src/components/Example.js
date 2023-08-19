import React from 'react';
import Data from '../data/data.json'
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 


const Example = ({payCode}) => {
  // const testData = Data['test-rates'].filter(e => e.payment_code === 'USD')

  const testData = Data['test-rates'].filter(e => e.payment_code === payCode)

  const arrFloating = (arr) => {
    const tmp = []
    arr.forEach(e => {
      tmp.push(parseFloat(e))
    });
    return tmp
  }

  const testDateTime = testData[0].rate_dates.split(',')
  const testRates = arrFloating(testData[0].rate_val.split(','))


  // console.log(testDateTime)
  // console.log(testRates)

  // {x: testRates, y: testDateTime}

  const returnData = (arrX, arrY) => {
    const tmp = []
    for(let i = 0, j = arrX.length; i < arrX.length; i++, j--) {
      tmp.push({x: j, y: arrY[i], label: arrX[i]})
    }
    return tmp
  }

  // returnData(testDateTime, testRates)

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title:{
      text: "Bounce Rate by Week of Year"
    },
    axisY: {
      title: "Bounce Rate",
      suffix: ""
    },
    axisX: {
      title: "Week of Year",
      // prefix: "W",
      interval: 20
    },
    data: [{
      type: "line",
      toolTipContent: "Week {x}: {y}%",
      dataPoints: returnData(testDateTime, testRates)
      // dataPoints: [
      //   { x: 1, y: 64 },
      //   { x: 2, y: 61 },
      //   { x: 3, y: 64 },
      //   { x: 4, y: 62 },
      //   { x: 5, y: 64 },
      //   { x: 6, y: 60 },
      //   { x: 7, y: 58 },
      //   { x: 8, y: 59 },
      //   { x: 9, y: 53 },
      //   { x: 10, y: 54 },
      //   { x: 11, y: 61 },
      //   { x: 12, y: 60 },
      //   { x: 13, y: 55 },
      //   { x: 14, y: 60 },
      //   { x: 15, y: 56 },
      //   { x: 16, y: 60 },
      //   { x: 17, y: 59.5 },
      //   { x: 18, y: 63 },
      //   { x: 19, y: 58 },
      //   { x: 20, y: 54 },
      //   { x: 21, y: 59 },
      //   { x: 22, y: 64 },
      //   { x: 23, y: 59 }
      // ]
    }]
  }

  return (
    <div>
      <CanvasJSChart options = {options} />
    </div>
  )
}

export default Example