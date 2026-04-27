import { useState } from "react";
import GeneralInfo from "./components/generalInfo.jsx";
import Resume from "./components/resume.jsx";

import "./styles/app.css"
import "./styles/forms.css"

export default function App() {

    const[resume, setResume] = useState({
        general: {}
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

    return(<>
        <div id="sidebar">
            <GeneralInfo handleGeneral = {generalSubmit} />
        </div>
        <div id="resume">
            <Resume resumeData = { resume } />
        </div>
    </>);
}