
export const INITIAL_STATE = {
  initaildata:'test',
  userState:{
    registrationSuccess:false,
    login:false,
    islogout:false,
		loading:false,
    type: '',
    message:'',
    formdata:{
      id :'',
      name:'',
      username:'',
      email:'',
      password:'',
      confirm:'',
    },
    errors: {
      name:false,
      username:false,
      email:false,
      password:false,
      confirm:false
    }
  },
};
