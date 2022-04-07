import React, { Component } from "react";
import './PersonCard.css'

class PersonCard extends Component {
    constructor(props) {
        super(props);

        this.firstName = this.props.firstName;
        this.lastName = this.props.lastName;
        this.hairColor = this.props.hairColor;

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
                <p>Hair Color: {this.age}</p>
                <button className="btn" onClick={this.changeAge}>
                    Birthday button for {this.firstName} {this.lastName}
                </button>
            </div>
        );
    }

    changeAge = () => {
        let newAge = this.state.age;
        newAge++;
        this.setState({ age: newAge })
    }
}

export default PersonCard;