import React from 'react';

const UserInfo = ({ handleClick }) => {
    return (
        <div>
            <h2>Name: John Doe</h2>
            <h3>Profession: Developer</h3>
            <button onClick={handleClick}>Show Alert</button>
        </div>
    );
};

export default UserInfo;