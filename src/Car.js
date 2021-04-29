import React from 'react';

class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color: props.color,
            doors: props.doors
        }

    }

    render(){
        return <h2>I am a {this.props.color} car with {this.state.doors} doors.</h2>;
    }
}

export default Car;