import React, { Component } from 'react';
import Heading from './components/heading';
import Body from './components/body';

export default class App extends Component{

    componentWillMount(){
        console.log("App mounting");
    }

    componentDidMount(){
        console.log("App mounted");
    }

    componentWillUnmount(){
        console.log("App unmounting");
    }

    render(){
        console.log("App rendering");
        return (
            <div>
                <Heading />
                <p>Sweet as bro</p>
                <input type='text' />
                <Body />
            </div>
        );
    }
}