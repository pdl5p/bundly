import * as React from 'react';

const { Component } = React;

export default class Heading extends Component<any, any>{

    constructor(props){
        super(props);        
    }

    render() {
        return <h1>{this.props.text || "Default heading"}</h1>
    }
}