import { useState } from "react";
import GeneralInfo from "./components/generalInfo.jsx";
import EducationInfo from "./components/educationInfo.jsx";
import Resume from "./components/resume.jsx";

import "./styles/app.css"
import "./styles/forms.css"

export default function App() {

    const[resume, setResume] = useState({
        general: {},
        education: []
    });

    const generalSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const dataObject = {
            name: `${data.get("firstName")} ${data.get("lastName")}`,
            phone: data.get("phone"),
            email: data.get("email")
        }
        setResume({...resume, general: dataObject});
    }

    const educationSubmit = (event) => {
        event.preventDefault();
        const data = event.target;
        const dataObject = {
            id: data.uuID.value,
            school: data.school.value,
            major: data.major.value,
            dateFrom: data.dateFrom.value,
            dateTo: data.dateTo.value
        }

        const eduIndex = resume.education.findIndex(e => e.id === dataObject.id);
        if (eduIndex === -1) {
            setResume({...resume, education: [...resume.education, dataObject]});
        } else {
            setResume({...resume, education: resume.education.map((entry, index) => index === eduIndex ? dataObject : entry)})
        }
        data.reset();
    }

    return(<>
        <div id="sidebar">
            <GeneralInfo handleGeneral = {generalSubmit} />
            <EducationInfo handleEducation= {educationSubmit}/>
        </div>
        <div id="resume">
            <Resume resumeData = { resume } />
        </div>
    </>);
}