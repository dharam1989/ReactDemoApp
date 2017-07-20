import { INITIAL_STATE } from './initial-state';
import { userReducer } from './user-reducer';
import * as SITE_CONSTANT from './../lib/constants/site-constant.js';/* Import file where defined all site consant there */
export default function(state = INITIAL_STATE, action) {
      if (typeof action.meta !== "undefined") {
			if(action.meta.reducerName === SITE_CONSTANT.USER_REDUCER){
					return userReducer( state, action );
				} 
		
	  } else {
			return state;
		}

}
