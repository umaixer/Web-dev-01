import React, {Component} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import WithClass from '../../../hoc/withClass';
import PropTypes from 'prop-types'
import AuthContext from '../../../auth-context/auth-context'


class Person extends Component {

	constructor(props){
		super(props);
		this.inputElementRef = React.createRef();
	}

	componentDidMount(){
		this.inputElementRef.current.focus();
		console.log(this.context.authenticated);
	}

	static contextType = AuthContext;

render(){
return (
	<Aux>
	 {this.context.authenticated ? (<p> Authenticated </p> ) 
		: (<p> Please Log in </p>)}
	<p key="1" onClick={this.props.click}>
	I am {this.props.name} 
	and I am {this.props.age} years old!</p>,
	<p key="2">{this.props.children}</p>,
	<input key="3" type="text" 
	ref= {this.inputElementRef}
	onChange={this.props.changed} 
	value={this.props.name}/>
	
	</Aux>
	);
}
}



Person.propTypes = {
	click:PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
}

export default WithClass(Person, classes.Person);