type diagnosisHistory = {
    month?: String;
    year?: number;
    blood_pressure?:{
        systolic?:{
            value?: number;
            levels?: String;
        };
        diastolic?: {
            value?: number;
            levels?: String;
        };
    };
    heart_rate?:{
        value?: number;
        levels?: String;
    };
    respiratory_rate?:{
        value?: number;
        levels?: String;
    };
    temperature?:{
        value?: number;
        levels?: String;
    };
}

type DiagnosticList = {
    name?: String;
    description?: String;
    status?: String;
}

export class patientClass {
        name?: String
        gender?: String
        age?: number
        profile_picture?: String
        date_of_birth?: String
        phone_number?: String
        emergency_contact?: String
        insurance_type?: String
        diagnosis_history?: diagnosisHistory[]
        diagnostic_list?: DiagnosticList[]
        lab_results?: String[]
        
    constructor(
        name?: String,
        gender?: String,
        age?: number,
        profile_picture?: String,
        date_of_birth?: String,
        phone_number?: String,
        emergency_contact?: String,
        insurance_type?: String,
        diagnosis_history?: diagnosisHistory[],
        diagnostic_list?: DiagnosticList[],
        lab_results?: String[]

    ) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.profile_picture = profile_picture;
        this.date_of_birth = date_of_birth;
        this.phone_number = phone_number;
        this.emergency_contact = emergency_contact;
        this.insurance_type = insurance_type;
        this.diagnosis_history = diagnosis_history;
        this.diagnostic_list = diagnostic_list;
        this.lab_results = lab_results;
    }
}

export class diagnosisHistoryC {
        month?: String
        year?: number
        blood_pressure?:{
            systolic?:{
                value?: number
                levels?: String
            }
            diastolic?: {
                value?: number
                levels?: String
            }
        }
        heart_rate?:{
            value?: number
            levels?: String
        }
        respiratory_rate?:{
            value?: number
            levels?: String
        }
        temperature?:{
            value?: number
            levels?: String
        }

        constructor(
            month?: String,
            year?: number,
            blood_pressure?:{
                systolic?:{
                    value?: number,
                    levels?: String,
                },
                diastolic?: {
                    value?: number,
                    levels?: String,
                },
            },
            heart_rate?:{
                value?: number,
                levels?: String,
            },
            respiratory_rate?:{
                value?: number,
                levels?: String,
            },
            temperature?:{
                value?: number,
                levels?: String,
            },
        ){
            this.month = month;
            this.year = year;
            this.blood_pressure = blood_pressure;
            this.heart_rate = heart_rate;
            this.respiratory_rate = respiratory_rate;
            this.temperature = temperature;
        }
    }