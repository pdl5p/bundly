import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Heading from './Heading/Heading';
import List from './List/List';

export default class AppTwo extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.handleStuff = this.handleStuff.bind(this);
    }

    handleStuff(){
        console.log("handle i");
    }

    render() {
        console.log("App2 rendering");

        const stylz = {
            backgroundColor: 'Orange'
        };

        return (
            <div style={stylz}>
                <Heading />
                <List />
                <button onClick={this.handleStuff} value="Click" >Clickity</button>

            </div>
        );
    }
}

const Init = (element) => {
    ReactDOM.render(<AppTwo />, element);
}
export { Init };