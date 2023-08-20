//@ts-nocheck
import getDivData from './fn/getDivData.js';

//////////////////////////////////////
export default class Content {

constructor(){
this.divs = [];
this.images = [];
this.lists = [];
this.pres = [];
this.tables = [];
this.youtubes = [];
this.sortOrder = [];
}


addDiv(){
const data = getDivData();
this.divs.push(data);
this.sortOrder.push(data.id);
}
//This will return a single item 
findInDivs(id){
    for (let i = 0; i < this.divs.length; i++) {
        const item = this.divs[i];
        if (item.id == id){
            return  item;
        } 
    }
    return null;
}

getContent() {
    const rez = [];
    for (let i = 0; i < this.sortOrder.length; i++) {
        const sortOrderId = this.sortOrder[i];
        const temp = this.findInDivs(sortOrderId);
        if (temp != null) {
            rez.push(temp);
        }
    }
    return rez;
}

//=============|
}//============|
//=============|