
import {CChart} from '@coreui/react-chartjs';
const Dashboard=()=>{



return(<div>
<h4>welcome to skaalab dashboard task manager</h4>
<CChart
  type="bar"
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
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