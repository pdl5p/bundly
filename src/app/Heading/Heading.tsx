import * as React from 'react';

const Heading = (props) => {

    let text = props.text || "Default heading";

    return <h1>{text}</h1>
}

export default Heading;