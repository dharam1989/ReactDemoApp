const ADD_USER = 'ADD_USER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USERLIST = 'USERLIST';
export function userReducer(state = {}, action) {
	switch (action.type) {
      case `${ADD_USER}_PENDING`:
			return { ...state,
					userState: { ...state.userState,
								loading: true,
								type : 'info',
								message : 'Waitting.....'
					}
			};
    case `${ADD_USER}_FULFILLED`:
			return { ...state,
					userState: { ...state.userState,
						    registrationSuccess:action.payload.data.status,
								loading: false,
								type : (action.payload.data.status) ? 'info': 'danger',
								message : 'Congratulation.....'
					}
			};

			case `${LOGIN}_FULFILLED`:
				return { ...state,
						userState: { ...state.userState,
									
									loading: false,
									type : (action.payload.data.status) ? 'info': 'danger',
									message : action.payload.data.message,
									formdata:(action.payload.data.status) ? action.payload.data.userdata:{}
						},
						login:true,
				};
			
			case `${LOGOUT}_FULFILLED`:
				return { ...state,
						userState: { ...state.userState,
									
									loading: false,
									message : action.payload.data.message,
									formdata:{
											id :'',
											name:'',
											username:'',
											email:'',
											password:'',
											confirm:'',
											}
						},
						login:false,
						islogout:true
				};
			
			case `${USERLIST}_FULFILLED`:
				return { ...state,
						alluserlist:(action.payload.data.status) ? action.payload.data.userlist:{}
				};

   	default:
		return state;
  }
}
