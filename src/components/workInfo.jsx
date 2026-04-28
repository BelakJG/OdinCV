export default function WorkInfo({ handleWork }) {

    return (<form onSubmit={handleWork} id="workInfoForm">
        <h2>Work Experience</h2>
        <input type="hidden" id="uuID" name="uuID" value={crypto.randomUUID()}></input>
        <div className="field">
            <label htmlFor="company">Company Name: </label>
            <input type="text" id="company" name="company"></input>
        </div>
        <div className="field">
            <label htmlFor="position">Title of Position: </label>
            <input type="text" id="position" name="company"></input>
        </div>
        <div className="field">
            <label htmlFor="responsibilities">Job Responsibilities:</label>
            <textarea id="responsibilities" name="responsibilities" rows={6} cols={30}></textarea>
        </div>
        <div className="field">
            <label htmlFor="dateFrom">Worked From: </label>
            <input type="date" id="dateFrom" name="dateFrom"></input>
        </div>
        <div className="field">
            <label htmlFor="dateTo">Worked To: </label>
            <input type="date" id="dateTo" name="dateTo"></input>
        </div>
        <button type="submit">Add Work</button>
    </form>);
}