/* api config file */
import axios from 'axios';
import * as SITE_CONSTANT from './../constants/site-constant.js';
export function Call(data) {
	/* set header request */
	let headers = {
		//"Content-Type": "application/x-www-form-urlencoded"
		"Content-Type": "JSONP",
		//"auth-token": localStorage.getItem('authToken') ? localStorage.getItem('authToken') : ''
		//'Access-Control-Allow-Origin': 'http://localhost:3000',
        //'Access-Control-Allow-Credentials':'true',
		//'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, X-Requested-With',
		//'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
		//'x-requested-with': 'XMLHttpRequest'
	};

	/* check empty request */
	if (!data.method || !data.action) {
		return;
	}
	let method = SITE_CONSTANT.GET_METHOD;
	let params = {};
	let reqData = '';
	/* check method */
	if (data.method === SITE_CONSTANT.GET_METHOD) {
		method = data.method;
		if (data.requestData) {
			for (let key in data.requestData) {
				if (Array.isArray(data.requestData[key])) {
					data.requestData[key] = data.requestData[key].join();
				}
			}
			params = data.requestData;
		}
	} else if (data.method === SITE_CONSTANT.POST_METHOD || data.method === SITE_CONSTANT.DELETE_METHOD) {
		method = data.method;
		if (data.requestData)
			reqData = JSON.stringify(data.requestData);

	}
	/* api callin method */
	return axios({
		method: method,
		url: `${SITE_CONSTANT.ROOT_URL}/${data.action}`,
		data: reqData,
		params: params,
		// `headers` are custom headers to be sent
		headers: headers,
        withCredentials: true,
		onUploadProgress: function (progressEvent) {
             //console.log('onUploadProgress');
    // Do whatever you want with the native progress event
			//console.log(progressEvent,'dvsvvdsv');
	  },
		onProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
            //console.log('onProgress');
			//console.log(progressEvent,'dvsvdsv');
	  },
		on: function (progressEvent) {
    // Do whatever you want with the native progress event
           // console.log('on');
			//console.log(progressEvent,'dvsvdsv');
	  }

	});
}
