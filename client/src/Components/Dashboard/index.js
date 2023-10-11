
import {CChart} from '@coreui/react-chartjs';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Dashboard=()=>{
const [datalist , setDatalist] =useState([])
useEffect(()=>{
 axios.get('/get-all-tasks').then((res)=>{
            console.log(res.data)
            setDatalist(res.data)
        })
    

console.log(datalist)

},[])
const groups = datalist.reduce((groups, task) => {
  const date = task.time?.split('T')[0];
  if (!groups[date]) {
    groups[date] = [];
  }
  groups[date].push(task);
  return groups;
}, {});
// Edit: to add it in the array format instead
const groupArrays = Object.keys(groups).map((date) => {
  return {
    date,
    tasks: groups[date]
  };
});

const goupebystatus = datalist.reduce((groups, task) =>{

    const status =task.status;
    if(!groups[status]){
        groups[status]=[]
    }
    groups[status].push(task) ;
    return groups;
})
const groupStatusArrays =Object .entries(goupebystatus)
console.log(groupStatusArrays)
console.log(groupArrays[0]?.tasks.length);
return(<div>
<h4>welcome to skaalab dashboard task manager</h4>
<CChart
  type="bar"
  data={{
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'task  in a day',
        backgroundColor: '#f87979',
        data: [groupArrays[0]?.tasks.length],
      },
    ],
  }}
  labels="months"
  options={{
    plugins: {
      legend: {
        labels: {
          color: "grey",
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: "black",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          color: "bleu",
        },
        ticks: {
          color: "red",
        },
      },
    },
  }}
/>

<CChart
  type="bar"
  data={{
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'task completed in a day',
        backgroundColor: '#f87979',
        data: [groupArrays[0]?.tasks.length],
      },
    ],
  }}
  labels="months"
  options={{
    plugins: {
      legend: {
        labels: {
          color: "grey",
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: "black",
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          color: "bleu",
        },
        ticks: {
          color: "red",
        },
      },
    },
  }}
/>
</div>)
}
export default Dashboard; 