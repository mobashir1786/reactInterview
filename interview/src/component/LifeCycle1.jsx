import React, { Component } from 'react';

class LifeCycle1 extends Component {
    componentDidMount(){
        console.log("componentDidMount : when rendor first time");
    }

    componentDidUpdate(props){
        console.log(props.number);
        console.log(this.props.number);
        if(props.number !== this.props.number){
            console.log("componentDidUpdate: when component updaded");
        }
    }

    componentWillUnmount(){
        console.log("componentWillUnmount: when component removed");
    }
    render(props) {
        return (
            <div>
                <h1>count:{this.props.number}</h1>
            </div>
        );
    }
}

export default LifeCycle1;

