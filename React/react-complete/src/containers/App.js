import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
state= {
  persons:[
     {id: 'hjvj', name:"Umair", age: 30},
     {id:'jbkb', name:"Sun", age: 29},
     {id:'jjn', name: "Sundas", age: 28} 
  ],
  otherperson: "Sumbal",
  showPersons: false
}

deletePersonHandler = (personIndex) => {
const persons= this.state.persons.slice();
persons.splice(personIndex, 1);
this.setState({persons: persons});
}
nameChangedHandler = (event, id) =>{

  const personIndex = this.state.persons.findIndex(p =>{
    return p.id ===id;
  });

  const person = {...this.state.persons[personIndex]};

  person.name=event.target.value;
  const persons =[...this.state.persons];
  persons[personIndex]=person;



  //console.log('was clicked');
  // Don't Do This this.state.persons[0].name="Umair Aslam"
this.setState({
  persons: persons})
}
togglePersonHandler=()=>{
const doesShow = this.state.showPersons;
this.setState({
  showPersons: !doesShow
});
}

  render() {
    let persons=null;
    if (this.state.showPersons) {
         persons =  
          <Persons persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }

    
    return (

      <div className={classes.App}>
        <Cockpit showPersons= {this.state.showPersons}
        persons={this.state.persons}
        clicked= {this.togglePersonHandler}/>
        {persons}
      </div>
 
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Welcome to React'));
  }
}

export default App;
