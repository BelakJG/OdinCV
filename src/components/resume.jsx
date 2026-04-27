import "../styles/resume.css"

export default function Resume({ resumeData }) {
    const generalData = (Object.keys(resumeData.general).length !== 0 ? <div id="generalInfo">
        <h1>{resumeData.general.name}</h1>
        <h3>Email: {resumeData.general.email}</h3>
        <p>Phone: {resumeData.general.phone}</p>
    </div> : <></>);
    
    return(<>
        {generalData}
    </>);
}