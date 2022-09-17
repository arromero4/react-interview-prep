import React, { Component } from 'react'
class StateWithClass extends Component{
    constructor(){
        super()
        this.state = {
            name: 'Stark',
            age: 0,
            array: [1,2,3,4,5]
        }
    }
    changeStatus = () => {
        this.setState({
            age: this.state.age + 2
        })
    }

    render(){
        return(
            <div className='container'>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <h2>
                    {this.state.array.map((e, i) => 
                    <div key={i}>{e}</div>
                    )}
                </h2>
                <button onClick={this.changeStatus}>
                    Change
                </button>
            </div>
        )
    }
}

export default StateWithClass

