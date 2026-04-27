import GeneralInfo from "./components/generalInfo.jsx";

import "./styles/app.css"

export default function App() {

    const testSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data);
    }
    return(<>
        <div id="sidebar">
            <GeneralInfo generalTest = {testSubmit} />
        </div>
        <div id="resume"></div>
    </>);
}