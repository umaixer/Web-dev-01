import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.css'
import AuthContext from '../../auth-context/auth-context'

const cockpit = (props) => {
	
	const toggleref=useRef(null);
	const authContext = useContext(AuthContext);

	useEffect (() =>{
    console.log('useEffect')    

    setTimeout(()=>{
    alert('Saved data to Cloud');
    },1000);
    toggleref.current.click();
    return()=>{
    	console.log('Cleanup work in useEffect')
    };
    },[]);
	

	const assignedClasses= [''];
	let btnClass = '';
	if(props.ShowPersons){
		btnClass = classes.red;
	}
    if (props.personsLength <=2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <=1) {
      assignedClasses.push(classes.bold);
    }

	return(
		<div className={classes.Cockpit}>
		<h1> Hello World</h1>
        <p className={assignedClasses.join(' ')}> Learning React </p>
        <button 
        className={btnClass}
        ref={toggleref}
        onClick={props.clicked}>Toggle Names</button>
       <button onClick={authContext.login}> Log in </button>
        </div>
		);
}

export default React.memo(cockpit);