
import ajaxPost from "./ajaxPost";
import { BASE_URL } from '$lib/js/config.js';

/////////////////////////////////////////////////
export default class Agent {

//title :newPRojectName
static async create(route,despData={}){
const response = await ajaxPost(`${BASE_URL}/${route}/create` , {data:despData} );
return response;
}

static async update(route,despData={}){
const response = await ajaxPost(`${BASE_URL}/${route}/update` , {data:despData} );
return response;
}

static  async read(route,despData={}){
const response = await ajaxPost(`${BASE_URL}/${route}/read` , {data:despData} );
return response;
}

static async readone(route,despData={}){
const response = await ajaxPost(`${BASE_URL}/${route}/readone` , {data:despData} );
return response;
}

static async del(route,despData={}){
const response = await ajaxPost(`${BASE_URL}/${route}/delete` , {data:despData} );
return response;
}

}//class ends
