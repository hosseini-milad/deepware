import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    registerables ,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import errortrans from '../../../translate/error';
function WeekStatistic(props){
    const labels = props.label
    const dataRaw = props.attack?props.attack:["","","","","","",""]
    const dataTotal = props.total?props.total:["","","","","","",""]
    
    const data = {
        labels,
        color:'rgb(255, 255, 2555)',
        datasets: [
          {
            label: errortrans.suspicious[props.lang] ,
            data: dataRaw,
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: ["#cf4141"],
            color:['rgb(255, 255, 2555)'],
          },
          {
            label: errortrans.total[props.lang]+' (x1000)',
            data: dataTotal,
            barPercentage: 0.5,
            rtl: true,
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            backgroundColor: [
              'rgba(255, 255, 255, 0.8)'
            ],
            color:['rgb(255, 255, 255)'],
          }
        ],
      };
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
      tooltips: {
        rtl: true 
      }
    };
    
    return(<>
        <Bar data={data} options={options}/>
        </>
    )
}
export default WeekStatistic