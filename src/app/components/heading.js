import React, { Component } from 'react';

export default class Heading extends Component{

    constructor(props){
        super(props);
        
        this.text = props.text || "Default heading";
    }
    render() {
        return <h1>{this.text}</h1>
    }
}