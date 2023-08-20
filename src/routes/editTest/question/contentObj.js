//@ts-nocheck
export default class ContentObj {

constructor(data){
//--These are Collections Arrays
// debugger;
this.divs       = data.divs;
this.images     = data.images;
this.lists      = data.lists;
this.pres       = data.pres;
this.tables     = data.tables;
this.youtubes   = data.youtubes;
//This is soert order array
this.sortOrder   = data.sortOrder;
}

getSortOrder(){
return this.sortOrder;
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

formatQs() {
    const rez = [];
    for (let i = 0; i < this.getSortOrder().length; i++) {
        const sortOrderId = this.getSortOrder()[i];
        const temp = this.findInDivs(sortOrderId);
        if (temp != null) {
            rez.push(temp);
        }
    }
    return rez;
}
 
} //-- 