import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.person['age'],
            hairColor: this.props.person['hairColor'],
            fName: this.props.person['firstName'],
            lName: this.props.person['lastName']
        };
    }
    render() {
        return (
            <div>
                <h1>{ this.state.lName }, { this.state.fName }</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { this.state.hairColor }</p>
                <button onClick={ () => this.setState({ age: this.state.age+1 }) }>
                    Birthday Button for { this.state.fName } { this.state.lName }
                </button>
            </div>
        );
    }
}
    
export default PersonCard;