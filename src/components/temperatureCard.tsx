import { patientClass } from "../classes/patient"
import temperatureImg from "../images/icon/temperature@2x.png"

interface patient {
    singlePatient : patientClass
}

export default function Temperature({singlePatient} : patient){
    return(
        <div className="tempContainer">
            <div className="containerPadding">
                <img width={96} height={96} src={temperatureImg} alt=""/>
                <p>Temperature</p>
                <h2>
                    {
                    singlePatient.diagnosis_history 
                    ? singlePatient.diagnosis_history[0].temperature?.value
                    : "Undefined"
                    }
                </h2>
                <p>
                    {
                    singlePatient.diagnosis_history 
                    ? singlePatient.diagnosis_history[0].temperature?.levels
                    : "Undefined"
                    }
                </p>
            </div>
        </div>
    )
    
}