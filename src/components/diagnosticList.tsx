
import { patientClass } from "../classes/patient";
import "../styling/patients.css"

interface patient{
    singlePatient: patientClass
}


export default function DiagnosticList({singlePatient}: patient){
    const renderDiagnosticComponents = singlePatient.diagnostic_list?.map((item) => {
        return(
            <div className="listContainer">
                <div className="problemRow">
                    {item.name}
                </div>

                <div className="descriptionRow">
                    {item.description}
                </div>

                <div className="statusRow">
                    {item.status}
                </div>
            </div>
        )
    })
    return(
        <div className="diagnosticMainContainer">
            <div>
                <header className="diagnostic-header">Diagnostic List</header>
                <div className="diagnostic-Container">
                    <div className="listTopContainer">
                        <div className="problemRowTop">
                            Problem/Diagnosis
                        </div>
                        <div className="descriptionRowTop">
                            Description
                        </div>
                        <div className="statusRow">
                            Status
                        </div>
                    </div>
                    <div className="listContainerMain">
                        {renderDiagnosticComponents}
                    </div>
                </div>
            </div>
        </div>
    )
    }
