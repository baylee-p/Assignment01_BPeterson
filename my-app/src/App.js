import React from "react";
import ReactDOM from "react-dom/client";

// Functional Component with JSX
const Greeting = () => {
    const currentDate = new Date().toDateString();
    return (
        <div>
            <h1>Hello, Welcome to React!</h1>
            <p style={{ color: "black", fontSize: "18px", fontWeight: "bold"}}>Today's date is {currentDate}</p>
        </div>
    );
};

// Class Component with JSX 
class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Baylee Peterson",
            profession: "Web Developer",
        };
    }

    render() {
        const luckyNumber = Math.floor(Math.random() * 100) +1;
        return (
            <div>
                <h2>User Info</h2>
                <p>Name: {this.state.name}</p>
                <p>Profession: {this.state.profession}</p>
                <p>Your lucky number is {luckyNumber}</p>
            </div>
        );
    }
}

// Dynamic Context Using JSX and React Components
const TaskComponent = () => {
    const tasks = ["Go to work", "Complete Homework", "Play Video Games", "Watch the Super Bowl", "Cook dinner"];

    const getRandomTask = () => {
        return tasks[Math.floor(Math.random() * tasks.length)];
    };

    return <h3>Random Task: {getRandomTask()}</h3>;
};

// Parent and Child Components Using JSX
const App  = () => {
        return (
            <div>
                <Greeting />
                <UserInfo />
                <TaskComponent />
            </div>
        );
    };

export default App;

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
