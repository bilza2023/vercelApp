

export default async function  getTableData() {
return {
bgColor : "#293749",
fontSize : 1,
rows : [
    // one row is an array of cell objects
         [
                    {content : "2^4" ,startTime : 2,endTime : 0 , bt : true,bl:false,br:true,bb:false , bt : true,bl:false,br:true,bb:false},
                    {content : "\\frac{3}{4}",startTime : 4,endTime : 0 , bt : true,bl:false,br:true,bb:false},
                    {content : "\\sqrt{345345}",startTime : 6,endTime : 0 , bt : true,bl:false,br:true,bb:false},
        ],
          
        [
                    {content : "\\frac{3}{\\sqrt{333}}" ,startTime : 8,endTime : 0 , bt : true,bl:false,br:true,bb:false , bt : true,bl:false,br:true,bb:false},
                    {content : "\\frac{44}{88}",startTime : 10,endTime : 0 , bt : true,bl:false,br:true,bb:false},
                    {content : "\\sqrt{555}",startTime : 12,endTime : 0 , bt : true,bl:false,br:true,bb:false},
        ]
            
]

};


}