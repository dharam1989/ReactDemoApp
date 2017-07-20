/* Config constant of api calling */
if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}
/* Back END Base URL */
export const BASE_URL = window.location.origin;

/* Config constant of api calling */

export const BASE_PATH 							= (BASE_URL==='http://localhost:8080') ? 'http://developer-pinky.callout-dev.dev.bsd.net' : BASE_URL.replace('8080','');
//export const BASE_PATH 						    = (BASE_URL=='http://localhost:8080') ? 'http://localhost:8080' : BASE_URL.replace('8080','');
export const ROOT_URL 							= 'http://localhost/test/reactapi';
//export const ROOT_URL 							= `${BASE_PATH}/spotlight-api/index.php/admin/api/v1`;
export const GET_METHOD 						= 'GET';
export const POST_METHOD 						= 'POST';
export const DELETE_METHOD  					= 'DELETE';
/* Fornt End Port  */
const FRONTEND_PORT	= 8000;
const BACKEND_PORT	= 8080;

/* Front END Base URL */
export const FRONT_END_BASE_URL = BASE_URL.replace(BACKEND_PORT, FRONTEND_PORT);

/* CONSTANT OF API URL */
export const API_ADDUSER          = 'user.php?action=adduser'
export const API_AUTH							= 'user.php?action=login';
export const API_LOGOUT							= 'user.php?action=logout';
export const API_USERLIST         = 'user.php?action=getalluser';
/* Defined all reducer name here  */
export const USER_REDUCER				 		 = 'USER_REDUCER';

/* Clone module */
