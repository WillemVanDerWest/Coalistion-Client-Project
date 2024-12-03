import respitoryImg from "../images/icon/respiratory rate@2x.png"
import { patientClass} from "../classes/patient";

interface patient {
singlePatient : patientClass
}

export default function RespitoryRate( {singlePatient} : patient){

    let currentPatient: patientClass;
    if (!singlePatient.diagnosis_history?.length) {
        currentPatient = new patientClass();
    } else {
        currentPatient = singlePatient;
    }

   

    // Use nullish coalescing to ensure `diagnosis_history` always has a fallback value
    const diagnosisHistory = currentPatient.diagnosis_history ?? [];
    return(
        <div className="resContainer">
            <div className="containerPadding">
                <img width={96} height={96} src={respitoryImg} alt=""/>
                <p>Respiratory Rate</p>
                <h2>
                {
                    diagnosisHistory[0]?.respiratory_rate?.value
                    ? diagnosisHistory[0]?.respiratory_rate?.value
                    : "defined"
                }</h2>
                <p>
                {
                    diagnosisHistory[0]?.respiratory_rate?.levels
                    ? diagnosisHistory[0]?.respiratory_rate?.levels
                    : "defined"
                }
                </p>
            </div>
        </div>
    )
}