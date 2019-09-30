import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
	
	const assignedClasses= [''];
	let btnClass = '';
	if(props.ShowPersons){
		btnClass = classes.red;
	}
    if (props.persons.length <=2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

	return(
		<div className={classes.Cockpit}>
		<h1> Hello World</h1>
        <p className={assignedClasses.join(' ')}> Learning React </p>
        <button 
        className={btnClass}
        onClick={props.clicked}>Toggle Names</button>
        </div>
		);
}

export default cockpit;