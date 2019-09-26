import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
state = {
  userText: '' 

}

inputChangedHandler=(event) => {
  this.setState({userText: event.target.value});
}

  render() {
   
   const charList = this.state.userText.split('').map(ch => {
    return (<Char character={ch}/>);
   });

   return (
      <div className="App">
        <input type="text" 
        onChange={this.inputChangedHandler} 
        value={this.state.userText} />
        <p>{this.state.userText}</p>
        <Validation inputLength={this.state.userText.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
