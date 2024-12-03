import { Line } from 'react-chartjs-2'
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { patientClass } from '../classes/patient';

interface patient {
    singlePatient : patientClass
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export const LineGraph = ( {singlePatient} : patient) => {
    const lineChartData = {
        labels: [
            "Oct, 2023",
            "Nov, 2023",
            "Dec, 2023",
            "Jan, 2024",
            "Feb, 2024",
            "Mar, 2024",
        ],
        datasets: [
            {
                label: "Systolic",
                data: singlePatient.diagnosis_history?.map((item)=>{return(item.blood_pressure?.systolic?.value)}),
                borderColor: "#8C6FE6",
                pointRadius: 5,
                pointBackgroundColor: "#8C6FE6",
                tension: 0.5,
            },
            {
                label: "Diastolic",
                data: singlePatient.diagnosis_history?.map((item)=>{return(item.blood_pressure?.diastolic?.value)}),
                borderColor: "#C26EB4",
                pointRadius: 5,
                pointBackgroundColor: "#C26EB4",
                tension: 0.5,
            },
        ],
    };
    const options ={}
    
    return <Line options={options} data={lineChartData}/>
}