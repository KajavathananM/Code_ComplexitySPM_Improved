
var ctc_arr = [];
var count
var rIndex=0

var initializeRecursionArray=(lineArr)=>{
   count=0
   for(elem in lineArr){
      ctc_arr.push(count)
   } 
}
var identifyRecursion=(methodArr,lineArr,start,end)=>{
   // console.log(start+" || "+end)
   // console.log(methodArr[0])
   // console.log(methodArr)
   for(var k=start;k<=end;k++){
      // console.log(lineArr[k])
      if(lineArr[k]==methodArr[1]){
         rIndex=k
         break
      }
   }
   var methodName=methodArr[0].match(/([a-zA-Z][a-zA-Z0-9]+\()/g).pop();
   methodName=methodName.substring(0,methodName.indexOf("("));
   var i=1;

   // console.log("Recursion Index: "+rIndex)
   while(i<=methodArr.length-1)
   {
      if(methodArr[i].includes(methodName))
      {
         //console.log(methodArr[i]);
         count+=2;
         // ctc_arr.splice(rIndex,1,count)
         ctc_arr[rIndex]=count
      } 
      i++;
    }   
}

var complexityByRecursion=()=>{
   console.log("Complexity By Recursion Array Length: ", ctc_arr, ctc_arr.length)
   console.log("\n")
   return ctc_arr
}

module.exports={method1:identifyRecursion, method2:complexityByRecursion,method3:initializeRecursionArray}