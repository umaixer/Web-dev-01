import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
state= {
  persons:[
     {name:"Umair", age: 30},
     {name:"Sun", age: 29},
     {name: "Sundas", age: 28} 
  ],
  otherperson: "Sumbal"
}

switchNameHandler = () =>{
  //console.log('was clicked');
  // Don't Do This this.state.persons[0].name="Umair Aslam"
this.setState({
  persons:[
     {name:"Umair Aslam", age: 30},
     {name:"Sun", age: 29},
     {name: "Sundas", age: 45} 
  ]
})
}

  render() {
    return (
      <div className="App">
        <h1> Hello World</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}/>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}>  </Person>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Welcome to React'));
  }
}

export default App;
