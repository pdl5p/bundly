import React, { Component } from 'react';
import Heading from './components/heading';
import Body from './components/body';

export default class AppTwo extends Component{

    render(){
        console.log("App2 rendering");
        return (
            <div>
                <Heading text="Hello there from app 2" />
            </div>
        );
    }
}