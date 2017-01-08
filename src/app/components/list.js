import React from 'react';

const List = () => {

    var jsx = (Array.apply(null, Array((Math.random() * 10 | 0) + 1)))
                .map((o, i) => <li key={i}>Cool Item {i}</li>);
    return (
        <ul>
        {jsx}
        </ul>
    )
}

export default List;
