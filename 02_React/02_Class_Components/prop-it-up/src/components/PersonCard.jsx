import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    render() {
        return (
            <div>
                <h1>{ this.props.person['lastName'] }, { this.props.person['firstName'] }</h1>
                <p>Age: {this.props.person['age']}</p>
                <p>Hair Color: {this.props.person['hairColor']}</p>
            </div>
        );
    }
}
    
export default PersonCard;