import * as React from 'react';
//import * as moment from 'moment';
import ListItem from './listItem';

const List = () => {

    //const b:any = moment().format('YYYY-MM-DD');
    // console.log(b);
    

    let a: string = "ABC";
    let jsx = (Array.apply(null, Array((Math.random() * 10 | 0) + 1)))
                .map((o, i) => <ListItem key={i} index={i} />);

    return (
        <ul>
            {jsx}
        </ul>
    )
}

export default List;