import {
	combineReducers
} from 'redux';
import AppReducer from './app-reducer';

import {
	reducer as formReducer
} from 'redux-form';

const rootReducer = combineReducers({
	form: formReducer, // <-- redux-form
	AppReducer 			   : AppReducer
});

export default rootReducer;
