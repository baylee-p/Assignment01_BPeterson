import React, { useState } from 'react';
import TaskForm from './TaskForm.js';

const TaskComponent = () => {
    const [tasks, setTasks] = useState([
        { name: 'Go to the grocery store', description: 'Milk, Cereal, Bread' },
        { name: 'Clean kitchen', description: 'Do Dishes, Wipe Counters' }
    ]);
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSort = () => {
        const sorted = [...tasks].sort((a, b) => a.name.localeCompare(b.name));
        setTasks(sorted);
    };

    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };

    const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleDeleteTask = (index) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this task?');
        if (confirmDelete) {
            const updatedTasks = tasks.filter((_, i) => i !== index);
            setTasks(updatedTasks);
        }
    };

    return (
        <div>
            <TaskForm onAddTask={handleAddTask} />
            <input
                type="text"
                placeholder="Search Tasks"
                value={searchText}
                onChange={handleSearchChange}
            />
            <button onClick={handleSort}>Sort by Name</button>

            <ul>
                {filteredTasks.map((task, index) => (
                    <li key={index}>
                        <strong>{task.name}</strong>: {task.description}{' '}
                        <button onClick={() => handleDeleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskComponent;