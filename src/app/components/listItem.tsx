import * as React from 'react';

class ListItem extends React.Component<any, any>{

    constructor(props: any){
        super(props);
    }

    public render(){
        const i:number = this.props.index;
        const a:string = "A";

        return (
            <li>{this.props.index} Cool Item {i} ({a})</li>
        )
    }
}

export default ListItem;