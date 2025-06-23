import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";

import BarChart from "./BarChart";
import { useState, useEffect } from "react";
const months = [
    {
      "currentMonth": "Aug-24",
      "max": 667,
      "actual": 557,
      "percentage": 83.5,
      "difference": 110,
      "monthlyMilage": 557,
      "maxAllowance": 666,
      "id": "1"
    },
    {
      "id": "66bb",
      "currentMonth": "Sep-24",
      "max": 1333,
      "actual": "1551",
      "percentage": "116.35",
      "difference": -218,
      "monthlyMilage": 994,
      "maxAllowance": 666
    },
    {
      "id": "70db",
      "currentMonth": "Oct-24",
      "max": 1999,
      "actual": "1786",
      "percentage": "89.34",
      "difference": 213,
      "monthlyMilage": 235,
      "maxAllowance": 666
    },
    {
      "id": "8001",
      "currentMonth": "Nov-24",
      "max": 2665,
      "actual": "2444",
      "percentage": "91.71",
      "difference": 221,
      "monthlyMilage": 658,
      "maxAllowance": 666
    },
    {
      "id": "9751",
      "currentMonth": "Dec-24",
      "max": 3331,
      "actual": "3238",
      "percentage": "97.21",
      "difference": 93,
      "monthlyMilage": 794,
      "maxAllowance": 666
    },
    {
      "id": "fcfe",
      "currentMonth": "Jan-25",
      "max": 3997,
      "actual": "3687",
      "percentage": "92.24",
      "difference": 310,
      "monthlyMilage": 449,
      "maxAllowance": 666
    },
    {
      "id": "67c2",
      "currentMonth": "Feb-25",
      "max": 4663,
      "actual": "4400",
      "percentage": "94.36",
      "difference": 263,
      "monthlyMilage": 713,
      "maxAllowance": 666
    },
    {
      "id": "e019",
      "currentMonth": "Mar-25",
      "max": 5329,
      "actual": "4876",
      "percentage": "91.50",
      "difference": 453,
      "monthlyMilage": 476,
      "maxAllowance": 666
    }
  ]

Chart.register(CategoryScale);

export default function ShowBarGraph(){
    const [chartData, setChartData] = useState(null); 

   
    
        const year1 = months.slice(0, 12);
 
        const monthOnly = year1.map((month) => month.currentMonth.split("-")[0]);

        const year2 = months.slice(12, 23);
        useEffect(() => {
            setChartData({
                labels: monthOnly,
                datasets: [{
                    type: 'bar',
                    label: "Year 1",
                    data: year1.map((month) => month.monthlyMilage),
                    backgroundColor: "#0D392E",
                    order: 2,
                    stack: 1
                },
                {
                    type: 'bar',
                    label: "Year 2",
                    data: year2.map((month) => month.monthlyMilage),
                    backgroundColor: "#CED7E5",
                    order: 2,
                    stack: 0
                },
                {
                    type: "line",
                    label: "Max Allowance",
                    data: months.map((month) => month.maxAllowance),
                    order: 1,
                    backgroundColor: "red",
                    borderColor: "red",
                    pointRadius: 0
                }]
            });
        }, []);
        
    ;
    

    
    return (
        <div className="App">
            {chartData && <BarChart chartData={chartData}/>}
        </div>
    );
}