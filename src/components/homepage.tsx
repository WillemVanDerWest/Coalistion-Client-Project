import React, {  useState } from "react"
import NavBar from "./topBar"
import { Patients } from "./patients"
import axios from 'axios'
import { patientClass } from "../classes/patient";
// import { patientDetails } from "./patients";


let envPass = process.env.REACT_APP_PASSWORD??'';
let envUserName = process.env.REACT_APP_USERNAME??'';

const auth = btoa(`${envUserName}:${envPass}`);


let wasTheDataRetrieved: boolean = false;
export default function HomePage(){
    const [callData, setCallData] = useState<Array<patientClass>>( [new patientClass()]);
    function handleData(){
        axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
            headers: {
                'Authorization': `Basic ${auth}`
        }})
            .then(res => {
                    setCallData(res.data)
                    console.log("Data received")    
                    wasTheDataRetrieved = true;
                }
                )
            .catch(error => setCallData(error))
    }

    if (wasTheDataRetrieved){
        console.log('The data was received')
    } else {
        handleData()
    }

    return(
        <div>
            {callData
            ?   <div>
                <NavBar/>
                    <div className="flex">
                    <Patients
                    allPatients= {callData}/>
                    </div>
                </div>
            :   <div>Contact the administrator for the username and password</div>}
        </div>
    )
}