import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Heading from './components/heading';
import Body from './components/body';

export default class AppOne extends Component{

    componentWillMount(){
        console.log("App mounting...");
        
    }

    componentDidMount(){
        console.log("App mounted");
    }

    render(){
        console.log("App rendering");
        const a= ~~(Math.random() * 100);

        const style = {
            backgroundColor: 'Green',
            padding: '20px'
        };

        return (
            <div style={style}>
                <Heading />
                <p>Sweet {a}</p>
                <input type='text' />
                <Body />
            </div>
        );
    }
}

const Init = (element) => {
    ReactDOM.render(<AppOne />, element);
}
export { Init };