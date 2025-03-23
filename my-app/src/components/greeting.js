import React, { useState } from 'react';

const Greeting = ({ username }) => {
    const [greeting, setGreeting] = useState(`Hello, ${username}!`);

    const changeGreeting = () => {
        setGreeting(`Hi there, ${username}!`);
    };

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div>
            <h1>{greeting}</h1>
            <p>Today's date: {currentDate}</p>
            <button onClick={changeGreeting}>Change Greeting</button>
        </div>
    );
};

export default Greeting;