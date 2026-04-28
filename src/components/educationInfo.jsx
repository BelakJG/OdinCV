export default function EducationInfo({ handleEducation }) {
    return(<form onSubmit={handleEducation} id="educationForm">
        <h2>Education Info</h2>
        <input type="hidden" name="uuID" value={crypto.randomUUID()}></input>
        <div className="field">
            <label htmlFor="school">School Name: </label>
            <input type="text" id="school" name="school"></input>
        </div>
        <div className="field">
            <label htmlFor="major">Major Studied: </label>
            <input type="text" id="major" name="major"></input>
        </div>
        <div className="field">
            <label htmlFor="dateFrom">Date From: </label>
            <input type="date" id="dateFrom" name="dateFrom"></input>
        </div>
        <div className="field">
            <label htmlFor="dateTo">Date To: </label>
            <input type="date" id="dateTo" name="dateTo"></input>
        </div>
        <button type="submit">Add Education</button>
    </form>);
}