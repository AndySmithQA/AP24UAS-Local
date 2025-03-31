import { useState, useEffect} from 'react'

import { Table } from 'react-bootstrap';
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
export default function BuildTable(){
    const [rows, setRows] = useState([])
    useEffect(() => {
        setRows(months);
    }, []);

    
    return (
       <Table striped hover>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Maximum</th>
                    <th>Actual</th>
                    <th>Percentage</th>
                    <th>Difference</th>
                    <th>Milage</th>
                </tr>
                </thead>
                <tbody>
                    {rows?.map(row =>
                        <tr key={row.id}>
                            <td>{row.currentMonth}</td>
                            <td>{row.max}</td>
                            <td>{row.actual}</td>
                            <td>{row.percentage}</td>
                            <td>{row.difference}</td>
                            <td style={{color: row.monthlyMilage > 666 ? "red" : "inherit"}}>
                                {row.monthlyMilage}
                            </td>
                        </tr>
                    )}
                </tbody>
       </Table>
        
    )
}