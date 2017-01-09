import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as moment from 'moment';
import * as Rx from '@reactivex/rxjs';
import { default as C } from './Heading/Heading';

const { Observable } = Rx;

export default class AppOne extends React.Component<any, any>{

    componentWillMount(){
        console.log("App mounting...");

        let n = moment();
        let o$ = Observable.interval(1000).take(5);

        o$.subscribe((i) => {
            let m = moment().format("hh:mm:ss:ttt");

            console.log("Next", m);
        });
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
                <C text="abc" />
                <input type='text' />
            </div>
        );
    }
}

const Init = (element) => {
    ReactDOM.render(<AppOne />, element);
}
export { Init };