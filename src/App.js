import React, { Component } from 'react'
import './App.css'
//51790-9ikmIvm0ufb6Z9X

const defaultState={
  value:0,
  display: ""
}
class App extends Component {
    constructor() {
        super();
        this.state = {
          value:"",
          display: "",
          input:0}
    }

    handleclick=(event)=>{
      const userInput = event.target.value;
      const operators=["+", "-", "/", "x"].


            if (operators.includes(userInput))
        {
          this.setState(state => ({display: `${state.display} ${state.input} ${userInput}`}))
          console.log()
        }
          
        else{
                this.setState({input:`${input} ${userInput}`});}

    }
    render() {
        return (
            <div className="calculator-container">
      <div className="formula">{this.state.display}</div>
      <div id="display">{this.state.input}</div>
      <div className="buttons-container">
        <button className="wide clear"  id="clear" value="clear"  onClick={this.handleclick}>AC</button>
        <button className="regular operator" id="divide" value="/" type="operator" onClick={this.handleclick}>/</button>
        <button className="regular operator" id="multiply" value="x" type="operator"  onClick={this.handleclick}>X</button>
        <button className="regular" id="seven" value="7"  onClick={this.handleclick}>7</button>
        <button className="regular" id="eight" value="8"  onClick={this.handleclick}>8</button>
        <button className="regular" id="nine" value="9"  onClick={this.handleclick}>9</button>
        <button className="regular operator" id="add" value="+" type="operator" onClick={this.handleclick}>+</button>
        <button className="regular" id="subtract" value="-" type="operator" onClick={this.handleclick}>-</button>
        <button className="regular" id="four" value="4"  onClick={this.handleclick}>4</button>
        <button className="regular" id="five" value="5"  onClick={this.handleclick}>5</button>
        <button className="regular" id="six" value="6"  onClick={this.handleclick}>6</button>
        <button className="regular" id="one" value="1"  onClick={this.handleclick}>1</button>
        <button className="regular" id="two" value="2"  onClick={this.handleclick}>2</button>
        <button className="regular" id="three" value="3"  onClick={this.handleclick}>3</button>
        <button className="wide"    id="zero" value={Number(0)}  onClick={this.handleclick}>0</button>
        <button className="regular" id="decimal" value="."  onClick={this.handleclick}>.</button>
        <button className="long"    id="equals"  value="=">=</button>
      </div>
      </div>
        )
    }
}

export default App;