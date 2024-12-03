import { patientClass } from "../classes/patient"
import heartRateImg from "../images/icon/HeartBPM@2x.png"

interface patient {
    singlePatient : patientClass
}

export default function HeartRate({singlePatient}: patient){
    return(
        <div className="heartContainer">
            <div className="containerPadding">
                <img width={96} height={96} src={heartRateImg} alt=""/>
                <p>Heart Rate</p>
                <h2>
                    {
                        singlePatient.diagnosis_history 
                        ? `${singlePatient.diagnosis_history[0].heart_rate?.value} bpm`
                        : "Undefined"
                    }
                </h2>
                <p>{
                        singlePatient.diagnosis_history 
                        ? singlePatient.diagnosis_history[0].heart_rate?.levels 
                        : "Undefined"
                    }
                </p>
            </div>
        </div>
    )
}