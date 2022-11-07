import React from 'react';

const ParentToChild1 = (props) => {
    return (
        <h1>
            hello i am from {props.name}
        </h1>
    );
}

export default ParentToChild1;





export class ParentToChild2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name1: this.props.name
        };
    }
    render() {
        return (

            <h1>Hello i am fron {this.state.name1}</h1>

        )
    }
}
