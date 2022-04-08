import React, { Component } from "react";
import './PersonCard.css'

class PersonCard extends Component {
    constructor(props) {
        super(props);

        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.hairColor = props.hairColor;
        //const {firstName, lastName, hairColor, age} = this.props;

        // this.state = {
        //     firstName, lastName, hairColor, age
        // }
        this.state = {
            age: props.age
        }
    }

    render() {
        // Obtiene las variables de forma individual.
        //const {firstName, lastName, hairColor} = this.props;

        return (
            <div>
                <h1>{this.firstName}, {this.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.hairColor}</p>
                <button className="btn" onClick={this.changeAge}>
                    Birthday button for {this.firstName} {this.lastName}
                </button>
                {/* <h1>{this.state.firstName}, {this.state.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.state.hairColor}</p>
                <button className="btn" onClick={this.changeAge}>
                    Birthday button for {this.state.firstName} {this.state.lastName}
                </button> */}
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