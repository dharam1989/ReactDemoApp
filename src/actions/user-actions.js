import * as API   from './../lib/api/api.js'; /* Import file to make an access on server */
import * as SITE_CONSTANT from './../lib/constants/site-constant.js'; /* Import file where defined all site consant there */

export function addUser(requestData){
     /*request object create */
    const requestObject = {
        action: SITE_CONSTANT.API_ADDUSER,
        method: SITE_CONSTANT.POST_METHOD,
        requestData
    }
     /*calling campaignApiCall to method with request paremeters */
    const responseData = API.Call(requestObject);
    
    /*fetch promise responseData handle throw thunk */
    return {
        type     : 'ADD_USER',
        payload: responseData,
        meta     : { reducerName:SITE_CONSTANT.USER_REDUCER }
     };
}

export function checkAuth(requestData){
	 /*request object create */
    const requestObject = {
        action: SITE_CONSTANT.API_AUTH,
        method: SITE_CONSTANT.POST_METHOD,
        requestData
    }
    /*calling campaignApiCall to method with request paremeters */
    const responseData = API.Call(requestObject);
    /*fetch promise responseData handle throw thunk */
    return {
        type: 'LOGIN',
        payload: responseData,
        meta: { reducerName:SITE_CONSTANT.USER_REDUCER }
    };
}

export function logout(){
  /* Create Request object to get Campaign Records */
    const requestObject  = {
            action:SITE_CONSTANT.API_LOGOUT,
            method: SITE_CONSTANT.POST_METHOD
    }
   /*calling campaignApiCall to method with request paremeters */
   const responseData = API.Call(requestObject);
   return {
        type     : 'LOGOUT',
        payload  : responseData,
        meta     : { reducerName:SITE_CONSTANT.USER_REDUCER }
     };
}

export function userlist(){
  /* Create Request object to get Campaign Records */
    const requestObject  = {
            action:SITE_CONSTANT.API_USERLIST,
            method: SITE_CONSTANT.GET_METHOD
    }
   /*calling campaignApiCall to method with request paremeters */
   const responseData = API.Call(requestObject);
   return {
        type     : 'USERLIST',
        payload  : responseData,
        meta     : { reducerName:SITE_CONSTANT.USER_REDUCER }
     };
}

