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

    function editWork(workID) {
        const workIndex = resumeData.work.findIndex(w => w.id === workID);
        const workData = resumeData.work[workIndex];
        const workForm = document.querySelector("#workInfoForm");
        workForm.company.value = workData.company;
        workForm.position.value = workData.position;
        workForm.responsibilities.value = workData.responsibilities;
        workForm.dateFrom.value = workData.dateFrom;
        workForm.dateTo.value = workData.dateTo;
        workForm.uuID.value = workData.id;
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
                <h2>{schoolEntry.school}</h2>
                <h3>Major of study: {schoolEntry.major}</h3>
                <p>Attended from {schoolEntry.dateFrom} to {schoolEntry.dateTo}</p>
                <button type="button" onClick={() => editSchool(schoolEntry.id)}>Edit Info</button>
            </div>
            )}
        </div>
    );

    const workData = (resumeData.work.length === 0 ? <></> :
        <div id="workInfo">
            <h1>Work Experience</h1>
            {resumeData.work.map((workEntry) => <div className="work" key={workEntry.id}>
                <h2>Company: {workEntry.company}</h2>
                <h3>Position: {workEntry.position}</h3>
                <p>Responsibilities: {workEntry.responsibilities}</p>
                <p>Worked from {workEntry.dateFrom} to {workEntry.dateTo}</p>
                <button type="button" onClick={() => editWork(workEntry.id)}>Edit Work Info</button>
            </div>)}
        </div>
    )
    
    return(<>
        {generalData}
        {educationData}
        {workData}
    </>);
}