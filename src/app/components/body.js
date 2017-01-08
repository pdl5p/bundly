import React from 'react';
import List from './list';
import Randomiser from './randomizer';

const Body = (props) => {

    var y = Randomiser();

    return (<div>
        <h2>This is the body of the app</h2>
        <p>This is a list of stuff {y}</p>
        <List />
    </div>)
}

export default Body;