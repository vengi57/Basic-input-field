import React, { Component } from 'react';
import { render } from 'react-dom';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      arr:[],
      number: this.props.no,
      count: this.props.no
    };
  }
componentDidUpdate(prevProps,prevState)
{
  if(prevProps.no!==prevState.number)
  {
    this.setState({number:prevProps.no})
  }
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
  handleIncrement = () => {
  this.setState({ count: this.state.count + 1 })
}
inc = () =>{
  this.setState({ number: this.state.number + 1})
}
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <br/>
        <h4>{this.state.number}</h4>
        <button onClick={this.inc}>Click</button>
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
