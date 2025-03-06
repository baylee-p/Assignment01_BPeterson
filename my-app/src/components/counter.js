import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0); // Initialize State

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Click Me!</button>
        </div>
    );
};

export default Counter;