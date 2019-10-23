import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary'
import WithClass from '../hoc/withClass'
import AuthContext from '../auth-context/auth-context'


class App extends Component {
state= {
  persons:[
     {id: 'hjvj', name:"Umair", age: 30},
     {id:'jbkb', name:"Sun", age: 29},
     {id:'jjn', name: "Sundas", age: 28} 
  ],
  otherperson: "Sumbal",
  showPersons: false,
  changeCounter: 0,
  authenticated: false
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
this.setState((prevState, props)=>{
  return {
  persons: persons,
  changeCounter: prevState.changeCounter + 1
    };
  });
};

loginHandler = () => {
  this.setState({authenticated: true})
};


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

      <Aux>
      <AuthContext.Provider 
      value={{authenticated: this.state.authenticated, 
        login: this.loginHandler }}>
        <Cockpit showPersons= {this.state.showPersons}
        personsLength={this.state.persons.length}
        clicked= {this.togglePersonHandler}
        />
        {persons}
        </AuthContext.Provider>
      </Aux>
 
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Welcome to React'));
  }
}

export default WithClass(App, classes.App);
