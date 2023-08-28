{
    "divs": [
        {
            "id": "f8c5d256-2bda-45d8-a3f5-daa38e2a3385",
            "payload": "1234567",
            "type": "div",
            "bgColor": "gray",
            "fontColor": "white",
            "borderColor": "white",
            "textAlign": "left",
            "fontStyle": "italic",
            "fontWeight": "bold",
            "borderStyle": "solid",
            "borderWidth": 0,
            "fontSize": 16,
            "marginX": 0,
            "marginY": 0,
            "paddingX": 2,
            "paddingY": 2,
            "opacity": 1,
            "borderRadius": 0,
            "_id": "64e8d5125e84e19c0ee7c862"
        }
    ],
    "images": [],
    "lists": [],
    "pres": [],
    "tables": [],
    "youtubes": [],
    "sortOrder": [
        "f8c5d256-2bda-45d8-a3f5-daa38e2a3385"
    ],
    "_id": "64e8d5125e84e19c0ee7c861"
}

Here is a javascript object. it has 6 arrays (divs , images lists,pres
tables, youtubes) , each is an array of objects with each object has a field called "id" . 
This object also has an array called sortOrder which is an array of string containing the "ids" of each object in the abovementioned 6 arrays.

Write me a javascript function "arrangeContent" which loop through the ids in sortOrder array and find each id in the above mentioned 6 arrays. this function should return one single array with all the objects from the 6 arrays in order in which they have been placed in sortOrder array. 
