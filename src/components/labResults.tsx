import { patientClass } from "../classes/patient"

interface patient{
    singlePatient: patientClass
}

export default function LabResultsCard({singlePatient} : patient){

    const labResultComponent = singlePatient.lab_results?.map((item)=> {
        return(
            <div className="labResult-Item">
                {item}
            </div>
        )
    })
    return(
        <div className="labResults-Container">
            <header className="labResultsHeader">Lab Results</header>
            <div className="labResults-Items">
                {labResultComponent}
            </div>
        </div>
    )
}