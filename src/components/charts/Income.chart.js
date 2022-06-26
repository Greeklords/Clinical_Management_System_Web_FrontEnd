import "../../Styles/chart.css";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(...registerables);

const income = [5000, 8000, 7000, 6000, 9000, 10000,5000, 8000, 7000, 6000, 9000, 10000]

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      labels: "income",
      data: income,
      fill: true,
      backgroundColor: "#2e4355",
      pointBorderColor: "#8884d8",
      pointBorderWidth: 5,
      pointRadius: 8,
      tension: 0.4,
    },
  ],
};

const options = {
  plugins:{legend:{display:false}},
  layout: {padding:{bottom:10}},
  scales: {
    y: {
     ticks: {       
       color: "white",
       font: {
         size:10
       },          
     },
   },  
   x: {
    ticks: {
      color: "white",
      font: {
        size:15
      },          
    },
  },    
  },
};

function IncomeChart() {
  return (
    <div className="chart">
      <h2>Income values</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default IncomeChart;


// import React from "react";
// var CanvasJSReact = require("canvasjs-react-charts");
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// export default function Admindashboard() {
//   const options = {
//     animationEnabled: true,
//     exportEnabled: true,
//     theme: "light2", // "light1", "dark1", "dark2"
//     title: {
//       text: "Income Value"
//     },
//     axisY: {
//       title: "Income",
//       suffix: "%"
//     },
//     axisX: {
//       title: "Month",      
//       interval: 2
//     },
//     data: [
//       {
//         type: "line",
//         toolTipContent: "Month {x}: {y}%",
        
//         dataPoints: [
//           { x: 1, y: 64 },
//           { x: 2, y: 61 },
//           { x: 3, y: 64 },
//           { x: 4, y: 62 },
//           { x: 5, y: 64 },
//           { x: 6, y: 60 },
//           { x: 7, y: 58 },
//           { x: 8, y: 59 },
//           { x: 9, y: 53 },
//           { x: 10, y: 54 },
//           { x: 11, y: 61 },
//           { x: 12, y: 60 },
//           { x: 13, y: 55 },
//           { x: 14, y: 60 },
//           { x: 15, y: 56 },
//           { x: 16, y: 60 },
//           { x: 17, y: 59.5 },
//           { x: 18, y: 63 },
//           { x: 19, y: 58 },
//           { x: 20, y: 54 },
//           { x: 21, y: 59 },
//           { x: 22, y: 64 },
//           { x: 23, y: 59 }
//         ]
//       }
//     ]
//   };
//   return (
//     <div>
//       <CanvasJSChart options={options} />
//     </div>
//   );
// }
