import * as React from 'react';

class x extends React.Component<any, any>{
    constructor(props){
        super(props);
    }
}

const Randomiser = () => {
    
    
    return ~~(Math.random() * 100 | 0); 
};

export default Randomiser;