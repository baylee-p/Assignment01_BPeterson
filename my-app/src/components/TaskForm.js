import React, { useState } from 'react';

const TaskForm = () => {
    const [task, setTask] = useState(""); // Store input value

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("New Task:", task); // Log input to console
        setTask(""); // Clear input after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Task Name"
                value={task}
                onChange={(e) => setTask(e.target.value)} // Update state on input change
                />
                <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;