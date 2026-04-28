export default function GeneralInfo({ handleGeneral }) {

    return (<form onSubmit={() => handleGeneral(event)}>
        <h2>General Info</h2>
        <div className="field">
            <label htmlFor="firstName">First Name: </label>
            <input type="text" id="firstName" name="firstName" required></input>
        </div>
        <div className="field">
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" id="lastName" name="lastName" required></input>
        </div>
        <div className="field">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" required></input>
        </div>
        <div className="field">
            <label htmlFor="phone">Phone: </label>
            <input type="tel" id="phone" name="phone" required></input>
        </div>
        <button type="submit">Submit</button>
    </form>);
}