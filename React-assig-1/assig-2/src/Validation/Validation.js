import React from 'react';

const Validation = (props) => {

	let validationMessage = "text too short";

	if (props.inputLength >= 5){
	validationMessage = "text long enough!!";
}
return (
	<div>
		<p>{validationMessage}</p>
	</div>
	);
};

export default Validation;
