import "../styles/resume.css"

export default function Resume({ resumeData }) {
    function editSchool(schoolID) {
        const eduIndex = resumeData.education.findIndex(e => e.id === schoolID);
        const schoolData = resumeData.education[eduIndex];
        const schoolForm = document.querySelector("#educationForm");
        schoolForm.school.value = schoolData.school;
        schoolForm.major.value = schoolData.major;
        schoolForm.dateFrom.value = schoolData.dateFrom;
        schoolForm.dateTo.value = schoolData.dateTo;
        schoolForm.uuID.value = schoolData.id;
    }

    const generalData = (Object.keys(resumeData.general).length !== 0 ? <div id="generalInfo">
        <h1>{resumeData.general.name}</h1>
        <h3>Email: {resumeData.general.email}</h3>
        <p>Phone: {resumeData.general.phone}</p>
    </div> : <></>);

    const educationData = (resumeData.education.length === 0 ? <></> :
        <div id="educationInfo">
            <h1>Education</h1>
            {resumeData.education.map((schoolEntry) => <div className="school" key={schoolEntry.id}>
                <h1>{schoolEntry.school}</h1>
                <h3>Major of study: {schoolEntry.major}</h3>
                <p>Attended from {schoolEntry.dateFrom} to {schoolEntry.dateTo}</p>
                <button type="button" onClick={() => editSchool(schoolEntry.id)}>Edit Info</button>
            </div>
            )}
        </div>
    );
    
    return(<>
        {generalData}
        {educationData}
    </>);
}