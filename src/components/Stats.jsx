import { useEffect, useState } from "react";


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
export default function Stats(){
    const [data, setData] = useState([])

    //  useFetch('http://localhost:3001/months', setData)

   useEffect(() => {
    setData(months)
    , []})

    const statMaxMilage = months.map(ent =>
        ent.monthlyMilage
        )
    const statTotalMilage = months.map(ent =>
        ent.actual
        )
    const maximum = Math.max(...statMaxMilage)
    const minimum = Math.min(...statMaxMilage)
    const total = Math.max(...statTotalMilage)
    const average = (total / statTotalMilage.length)
   
   
    return (
        <div className="stats-bar ">
            <div className="container">
                <div className="row align-items-centre">
                    <div className="col-md-12">
                        <ul>
                            <li>Highest Monthly Mileage - {maximum}</li>
                            <li>Lowest Monthly Mileage - {minimum}</li>
                            <li>Average Monthly Mileage - {average.toFixed()}</li>
                        </ul>
                </div>
                </div>
            </div>
      </div>  
    )
}
