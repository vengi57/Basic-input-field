import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      number:0
    };
  }
onButtonClick = () =>{
  this.setState({ number: this.state.number + 1})
}
  render() {
    return (
      <div>
      <h2>{this.state.number}</h2>
      <button onClick={this.onButtonClick}>Click</button>
      <br/>
      <br/>
      <h2>Hello Component</h2>
        <Hello no ={this.state.number}/>
        
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
