import React from "react";
//import ReactDOM from "react-dom/client";
import Greeting from './components/greeting.js'; // Import Greeting
// import Counter from './components/counter.js'; // Import Counter
import UserInfo from './components/UserInfo.js'; // Import User Info
import TaskComponent from './components/TaskComponent.js'; // Import Task Form

function App() {
    return (
        <div className="App">
            <Greeting username="Baylee" />
            <UserInfo />
            <TaskComponent />
        </div>
    );
}

export default App;

    //const root = ReactDOM.createRoot(document.getElementById("root"));
    //root.render(<App />);
