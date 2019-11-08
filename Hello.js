import React, { Component } from 'react';
import { render } from 'react-dom';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      arr:[]
    };
  }

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      arr:[...this.state.arr,this.state.term]
    });
  }

  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
         <div>
          {
            this.state.arr.map((item,index)=>{
              return(
              <p key={index}>{item}</p>
              );
            })
          }
          </div>
      </div>
    );
  }
}

export default Hello;
