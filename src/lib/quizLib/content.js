//@ts-nocheck
import getDivData from './fn/getDivData.js';
import tableData from './fn/tableData.js';

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

//This will return a single item 
findIn( arrayName, id,rez ){
    for (let i = 0; i < this[arrayName].length; i++) {
        const item = this[arrayName][i];
        if (item.id == id){
            rez.push(item);
            return;
        } 
    }
    return;
}

sortContent() {
    const rez = [];
    for (let i = 0; i < this.sortOrder.length; i++) {
        const sortOrderId = this.sortOrder[i];
        this.findIn( 'divs' ,sortOrderId ,rez);
        this.findIn( 'images' ,sortOrderId ,rez);
        this.findIn( 'lists' ,sortOrderId ,rez);
        this.findIn( 'pres' ,sortOrderId ,rez);
        this.findIn( 'tables' ,sortOrderId ,rez);
        this.findIn( 'youtubes' ,sortOrderId ,rez);

    }
    return rez;
} 

//=============|
}//============|
//=============|