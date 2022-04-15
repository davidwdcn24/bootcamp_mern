import React, { Component } from "react";
import './PersonCard.css'

class PersonCard extends Component {
    constructor(props) {
        super(props);

        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.hairColor = props.hairColor;
        
        this.state = {
            age: props.age
        }
    }

    render() {
        return (
            <div>
                <h1>{this.firstName}, {this.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.hairColor}</p>
                <button className="btn" onClick={this.changeAge}>
                    Birthday button for {this.firstName} {this.lastName}
                </button>
            </div>
        );
    }

    changeAge = () => {
        let newAge = this.state.age;
        newAge++;
        this.setState({ age: newAge });
    }
}

export default PersonCard;