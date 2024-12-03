import { patientClass } from "../classes/patient"
import "../styling/patientInformation.css"
import birthIcon from "../images/BirthIcon@2x.png"
import femaleIcon from "../images/FemaleIcon@2x.png"
import insuranceIcon from "../images/InsuranceIcon@2x.png"
import phoneIcon from "../images/PhoneIcon@2x.png"


interface patient {
    singlePatient : patientClass
}

export default function PatientInformationCard({singlePatient} : patient){
    const picture = singlePatient.profile_picture?? "";
    return(
        <div className="infoContainer">
                <div className="profile">
                    <img width={200} height={200} src={`${picture}`} alt=""/>
                    <h2>{singlePatient.name}</h2>
                </div>
                <div>
                    <div className="flex">
                        <img className="marginImg" width={42} height={42} src={birthIcon} alt="birthIcon"/>
                        <div>
                            <ul>
                                <li>Date of Birth</li>
                                <li>{singlePatient.date_of_birth}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex">
                        <img className="marginImg" width={42} height={42} src={femaleIcon} alt="femaleIcon"/>
                        <div>
                            <ul>
                                <li>Gender</li>
                                <li>{singlePatient.gender}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex">
                        <img className="marginImg" width={42} height={42} src={phoneIcon} alt="phoneIcon"/>
                        <div>
                            <ul>
                                <li>Contact Info.</li>
                                <li>{singlePatient.phone_number}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex">
                        <img className="marginImg" width={42} height={42} src={phoneIcon} alt="phoneIcon"/>
                        <div>
                            <ul>
                                <li>Emergency Contacts</li>
                                <li>{singlePatient.emergency_contact}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex">
                        <img className="marginImg" width={42} height={42} src={insuranceIcon} alt="phoneIcon"/>
                        <div className="noMargin">
                            <ul>
                                <li>Insurance Provider</li>
                                <li>{singlePatient.insurance_type}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="buttonContainer">
                    <button className="patientBtn">Show All Information</button>
                </div>
        </div>
    )
}