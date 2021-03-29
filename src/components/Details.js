import React, { Component } from 'react'

class Details extends Component {
    state = {
        name: '',
        age: '',
        gender: '',
        location: '',
        phone: ''
    }

    render() {
        return (
            <div id='details'>
                <div>Name: </div>
                <div>Age: </div>
                <div>Gender: </div>
                <div>Location: </div>
                <div>Phone: </div>
            </div>
        )
            
    }
}

export default Details