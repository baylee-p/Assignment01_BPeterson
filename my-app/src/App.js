import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from './components/greeting.js'; // Import Greeting
import Counter from './components/counter.js'; // Import Counter
import UserInfo from './components/UserInfo.js'; // Import User Info
import TaskForm from './components/TaskForm.js'; // Import Task Form

function App() {
    // Alert Function from UserInfo
    const handleAlert = () => {
        alert("Hello! This is an alert from UserInfo.");
    };

    // Task Array
    const tasks = [
        "Do the Dishes",
        "Finish Homework Assignment",
        "Put Away Clothes",
        "Take the Dog for a Walk",
        "Get Groceries"
    ];

// Greeting Function
    return (
        <div>
            <Greeting username="Alice" />
            <Greeting username="Bob" />

            {/* Counter Component */}
            <Counter />

            {/* Task List */}
            <h2>Task List</h2>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li> // Key for unique identity
                ))}
            </ul>

            { /* User Info Component with handleClick */ }
            <UserInfo handleClick={handleAlert} />

            {/* TaskForm Component*/}
            <h2>Add a New Task</h2>
            <TaskForm />
        </div>
    );
};

export default App;

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
