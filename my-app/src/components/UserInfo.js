import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            luckyNumber: this.generateRandomNumber(),
        };
    }

    generateRandomNumber = () => {
        return Math.floor(Math.random() * 100) + 1;
    };

    handleNewLuckyNumber = () => {
        this.setState({
            luckyNumber: this.generateRandomNumber(),
        });
    };

    render() {
        return (
            <div>
                <h2>Name: John Doe</h2>
                <p>Profession: Developer</p>
                <p>Your lucky number is: {this.state.luckyNumber}</p>
                <button onClick={this.handleNewLuckyNumber}>
                    Generate New Lucky Number
                </button>
            </div>
        );
    }
}

export default UserInfo;