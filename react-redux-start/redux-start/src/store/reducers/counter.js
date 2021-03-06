import * as actionTypes from '../actions/actionTypes'

const initialState = {
	counter: 0,
}

const reducer = (state=initialState, action) => {
	
	switch( action.type ){
		case actionTypes.INCREMENT:
			return {
			...state,	
			counter: state.counter + 1
		}
		case 'DECREMENT':
			return {
			...state,	
			counter: state.counter - 1
		}
		case 'ADD':
			return {
			...state,
			counter: state.counter + action.val
		}
		case 'SUBTRACT':
			return {
			...state,	
			counter: state.counter - action.val
		}
	}

	return state;
};

export default reducer;