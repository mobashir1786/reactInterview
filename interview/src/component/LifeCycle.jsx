import React, { Component } from 'react'
import LifeCycle1 from './LifeCycle1';

export default class LifeCycle extends Component {
    constructor(){
        super();
            this.state={
                count:0
            }
        
    }
    increment(){
        this.setState({count: this.state.count + 1})
    }
  render() {
    return (
      <div>
      <h1>LIFE CYCLE METHOD</h1>
        <LifeCycle1 number={this.state.count}/>
        <button onClick={()=>{this.increment()}}>inc</button>
      </div>
    )
  }
}
