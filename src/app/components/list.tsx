import * as React from 'react';
import * as moment from 'moment';
import * as Rx from 'rxjs/Rx';
import ListItem from './listItem';

class List extends React.Component<any, any> {

    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    public componentDidMount(){
        let o$: Rx.Observable<string> = Rx.Observable.of<number>(1,2,3)
                                        .map<number, string>((v, i) => v.toString());

        let t$: any = Rx.Observable.interval(500).take(10);

        t$.subscribe((i) => {
            this.setState({ count: this.state.count + 1});
           const b:moment.Moment = moment();
            console.log("I", i, b.toISOString());
        });
    }

    public render(){

        let jsx = (Array.apply(null, Array((Math.random() * 10 | 0) + 1)))
                    .map((o, i) => <ListItem key={i} index={i} />);

        var style={
            display: 'block',
            backgroundColor: 'lightGreen'
        };

        return (
            <div>
            <p>Counter: {this.state.count}</p>
            <ul style={style}>
                {jsx}
            </ul>
            </div>
        )
    }
}

export default List;