//@ts-nocheck
import getDivData from './fn/getDivData.js';
import tableData from './fn/tableData.js';
import imageData from './fn/imageData.js';
import preData from './fn/preData.js';
import listData from './fn/listData.js';
import youtubeData from './fn/youtubeData.js';

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

getDivs(){return this.divs;}
getImages(){return this.images;}
getLists(){return this.lists;}
getPres(){return this.pres;}
getTables(){return this.tables;}
getYoutubes(){return this.youtubes;}

addDiv(payload){
    // debugger;
const data = getDivData(payload);
this.divs.push(data);
this.sortOrder.push(data.id);
}

addTable(){
    const data = tableData();
    this.tables.push(data);
    this.sortOrder.push(data.id);
    // console.log(this.tables);
}
addImage(){
    const data = imageData();
    this.images.push(data);
    this.sortOrder.push(data.id);
}
addPre(){
    const data = preData();
    this.pres.push(data);
    this.sortOrder.push(data.id);
}
addList(){
    const data = listData();
    this.lists.push(data);
    this.sortOrder.push(data.id);
}

addYoutube(){
    const data = youtubeData();
    this.youtubes.push(data);
    this.sortOrder.push(data.id);
}

//=============|
}//============|
//=============|