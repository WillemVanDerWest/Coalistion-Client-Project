import "../styling/patients.css";
import "../classes/patient.tsx";
import { patientClass} from "../classes/patient";
import { useEffect, useState } from "react";
import { LineGraph } from "./Line";
import ExtraCards from "./extraDataCards";
import PatientInformationCard from "./patientInformationCard";
import RespitoryRate from "./respitory";
import Temperature from "./temperatureCard";
import HeartRate from "./heartRate";
import DiagnosticList from "./diagnosticList";
import LabResultsCard from "./labResults";

export type allPatientDetails = {
  allPatients: Array<patientClass>;
};

export type singlePatientDetails = {
  singlePatient: patientClass;
};

interface patientCard {
  singlePatient: patientClass;
  simpleFunction: (singlePatient: patientClass) => void;
}

export function PatientCard({ singlePatient, simpleFunction }: patientCard) {
  return (
    <div className="bigDiv" onClick={() => simpleFunction(singlePatient)}>
      <div>
        <img
          className="profileIcon"
          src={`${singlePatient.profile_picture}`}
          alt=""
        />
      </div>
      <div>
        <p className="patientName">{singlePatient.name}</p>
        <p className="patientGenderAge">
          {singlePatient.gender}, {singlePatient.age}
        </p>
      </div>
    </div>
  );
}

export function DiagnosisHistoryCard({ singlePatient }: singlePatientDetails) {
  let currentState: String;
  
  const findHigherSystolicValue = () => {
    let currentHigh: number =
      singlePatient.diagnosis_history?.at(0)?.blood_pressure?.systolic?.value ??
      0;

    
    if (singlePatient === undefined) {
      singlePatient = new patientClass();
    }
    const diagnosisHistory = singlePatient?.diagnosis_history || [];
    currentState = diagnosisHistory[0]?.blood_pressure?.systolic?.levels?? 'Undefined';
    for (let i = 1; i < diagnosisHistory.length; i++) {
      if (currentHigh < diagnosisHistory[i]?.blood_pressure?.systolic?.value!) {
        currentHigh = diagnosisHistory[i]?.blood_pressure?.systolic?.value!;
        currentState = diagnosisHistory[i]?.blood_pressure?.systolic?.levels!;
      }
    }

    return [currentHigh, currentState];
  };

  const findHigherDiastolicValue = () => {
    
    let currentHigh: number =
      singlePatient.diagnosis_history?.at(0)?.blood_pressure?.systolic?.value ??
      0;
    if (singlePatient === undefined) {
      singlePatient = new patientClass();
    }
    const diagnosisHistory = singlePatient?.diagnosis_history || [];
    let otherCurrentState: String = diagnosisHistory[0]?.blood_pressure?.diastolic?.levels ?? 'undefiend'
    for (let i = 1; i < diagnosisHistory.length; i++) {
      if (
        currentHigh < diagnosisHistory[i]?.blood_pressure?.diastolic?.value!
      ) {
        currentHigh = diagnosisHistory[i]?.blood_pressure?.diastolic?.value!;
        otherCurrentState = diagnosisHistory[i]?.blood_pressure?.diastolic?.levels!;
      }
    }

    return [currentHigh,otherCurrentState];
  };
  return (
    <div className="diagnosisContainer">
      <div className="padding">
        <header className="diagnosisHeader">Diagnosis History</header>
        <div className="bloodPressureContainer">
          <div className="graphContainer">
            <header>Blood Pressure</header>
            <LineGraph singlePatient={singlePatient} />
            <ExtraCards singlePatient={singlePatient} />
          </div>
          <div>
            <div>
              <div className="sysMain">
                <div className="systolicDiv"/>
                <header className="systolicHeader">Systolic</header>
              </div>
              <p className="systolicValue">{findHigherSystolicValue()[0]}</p>
              <div>
                <p className="levelsText">{findHigherSystolicValue()[1]}</p>
              </div>
              
            </div>
            <div className="margintop">
              <div className="sysMain">
                <div className="diastolicDiv"/>
                <header className="systolicHeader">Diastolic</header>
              </div>
              <p className="systolicValue">{findHigherDiastolicValue()[0]}</p>
              <div>
                <p className="levelsText">{findHigherDiastolicValue()[1]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="marginLeft"> 
        <RespitoryRate singlePatient={singlePatient} />
        <Temperature singlePatient={singlePatient}/>
        <HeartRate singlePatient = {singlePatient}/>
      </div>
      <div>
      <DiagnosticList singlePatient = {singlePatient}/>
      </div>
    </div>
  );
}

export function Patients({ allPatients }: allPatientDetails) {
  let singlePatient = new patientClass(
    "name",
    "gender",
    10,
    "picture",
    "dateofbirth",
    "075123214",
    "13245124"
  );
  const [component, setComponent]: Array<any> = useState(
    <PatientCard
      singlePatient={singlePatient}
      simpleFunction={onPatientClick}
    />
  );
  const [selectedPatient, setSelectedPatient] = useState<patientClass>(
    new patientClass()
  );

  function onPatientClick(singlePatient: patientClass) {
    setSelectedPatient(singlePatient);
  }

  useEffect(
    () =>
      setComponent(
        allPatients.map((item) => {
          return (
            <div className="patientContainer">
              <PatientCard
                singlePatient={item}
                simpleFunction={onPatientClick}
              />
            </div>
          );
        })
      ),
    [allPatients]
  );
  return (
    <div className="flex">
      <div className="main">
        <div className="innerContainer">
          <header className="patientsHeader">Patients</header>
        </div>
        <div className="overflow">{component}</div>
      </div>

      <div>
        <DiagnosisHistoryCard singlePatient={selectedPatient} />
      </div>
      <div>
        <PatientInformationCard singlePatient={selectedPatient} />
        <LabResultsCard singlePatient={selectedPatient} />
      </div>
    </div>
  );
}
