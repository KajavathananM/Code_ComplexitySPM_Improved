const identifyRecursion = require('./ComplexityByRecursion').method1;
const complexityByRecursion= require('./ComplexityByRecursion').method2
const initializeRecursionArray= require('./ComplexityByRecursion').method3


var count;
var mCount;
var start,end;


var keywords=["void[\s]","double[^\s]","int[^\s]","float[^\s]","String[^\s]",
    "(printf)","(println)","(cout)","(cin)","(if)","(for)","(while)","(do while)","(switch)","(case)"];



//Start and end index to extract methods
//Increase count  when iterating through elements in array by 1
var increaseCountBy1 = (result) => {
    for (elem of result) {
        //console.log(result);
        count++;
    }
}
//Increase count due to arithmetic operators.Increase  count for each arithmetic operator by 1.
var countAritmeticOp = (ch) => {
    // console.log(ch);
    var op = [];
    for (var x = 0; x < ch.length; x++) {
        if (ch[x] === '+' || ch[x] === '-' || ch[x] === '*' || ch[x] === '/') {
            if (ch[x + 1] === '+' || ch[x + 1] === '/') {
                op.push(ch[x] + ch[x + 1]);
                x++;
            } else {
                op.push(ch[x]);
            }
        }
    }
    increaseCountBy1(op);
}
 //Increase count due to relational operators.Increase count for each relational operator by 1.
var countRelationOp = (ch) => {
    //console.log(ch);
    var op = [];
    for (var x = 0; x < ch.length; x++) {
        if (ch[x] === '=' && ch[x + 1] === '=')
            op.push(ch[x])
        if (ch[x] === '>' || ch[x] === '<' || ch[x] === '!') {
            if (ch[x + 1] === '=') {
                op.push(ch[x] + ch[x + 1]);
                x++;
            } else {
                // if (ch[x] === '!') {
                //     countRelationOp(ch[x]);
                //     x++;
                // }
                op.push(ch[x]);
            }
        }
    }
    increaseCountBy1(op);
}
//Increase count due to logical operators.Increase  count for each logical operator by 1.
var countLogicalOp = (ch) => {
   //console.log(ch);
    //Increase count due to assignment operators
    var op = [];
    if (ch === '!')
        op.push(ch);
    else {
        for (var x = 0; x < ch.length; x++) {
            if (ch[x] === '&' && ch[x + 1] === '&' || ch[x] === '|' && ch[x + 1] === '|') {
                count++;
            }
        }
    }
    increaseCountBy1(op);
}
//Increase count due to bitwise operators.Increment count for each bitwise operator by 1
var countBitwiseOp = (ch) => {
    //console.log(ch);
    var op = [];
    if (ch === '|')
        op.push(ch);
    if (ch === '>>')
        op.push(ch);
    if (ch === '<<')
        op.push(ch);
    if (ch === '>>>')
        op.push(ch);
    if (ch === '<<<')
        op.push(ch);
    else {
        for (var x = 0; x < ch.length; x++) {
            if (ch[x] === '^' || ch[x] === '~') {
                op.push(ch[x] + ch[x + 1])
            }
        }
    }
    increaseCountBy1(op);
}
//Increase count due to assignment operators.Increase for each assignment operator by 1
var countAssignmentOp = (ch) => {
    //console.log(ch);
    //Increase count due to assignment operators.Increment each assignment operator by 1
    var op = [];
    for (var x = 0; x < ch.length; x++) {
        if (ch[x] === '=' && ch[x + 1] !== '=')
            op.push(ch[x])
        if (ch[x] === '+' || ch[x] === '-' || ch[x] === '*' || ch[x] === '/' || ch[x] === '&' || ch[x] === '|' || ch[x] === '%') {
            if (ch[x + 1] === '=') {
                op.push(ch[x] + ch[x + 1]);
                x++;
            }
        }
        if (ch[x] === '>' && ch[x + 1] === '>' || ch[x] === '<' && ch[x + 1] === '<') {
            if (ch[x + 2] === '=') {
                op.push(ch[x] + ch[x + 1] + ch[x + 2]);
                x++;
            } else if (ch[x + 2] === '>') {
                if (ch[x + 3] === '=') {
                    op.push(ch[x] + ch[x + 1] + ch[x + 2] + ch[x + 3]);
                    x++;
                } else {
                    var c = ch[x] + ch[x + 1]
                    countBitwiseOp(c);
                }
            } else {
                var c = ch[x] + ch[x + 1]
                countBitwiseOp(c);
            }
        }
    }
    increaseCountBy1(op);
}
//Increase count due to keywords.Increment  count for each keyword by 1
var countVariables = (line,lineArr) => {
      var i=0;
      while(i<5)
      {
        var regex = new RegExp(keywords[i],'g')
        if(regex.test(line))
        {   //console.log(line.match(regex).length)
            if(line.match(regex).length>1){
                count+=line.match(regex).length
            }else if(line.match(regex).length==1){
                //console.log(line.match(regex).length)
                count++ 
            } 
        }
        i++
      }     
    
}
var countMethodDefs = (line,lineArr,index) => {   
        //Check for method definition if line contains method with <method>(<arguments>)
        if((/String*[\s0-9]([A-Za-z0-9]*[A-Za-z0-9]*)*\(/g).test(line) && (/(\)[\s]*{)/g).test(line) )
        {
                findMethodDefs(lineArr,index);
        }
        else if((/double*[\s0-9]([A-Za-z0-9]*[A-Za-z0-9]*)*\(/g).test(line) && (/(\)[\s]*{)/g).test(line) )
        {
                    findMethodDefs(lineArr,index);
        } 
        else if((/float*[\s0-9]([A-Za-z0-9]*[A-Za-z0-9]*)*\(/g).test(line) && (/(\)[\s]*{)/g).test(line) )
        {
                    findMethodDefs(lineArr,index);
        }
        else if((/int*[\s0-9]([A-Za-z0-9]*[A-Za-z0-9]*)*\(/g).test(line) && (/(\)[\s]*{)/g).test(line) )
        {
                    findMethodDefs(lineArr,index);
        }
        else if((/void*[\s0-9]([A-Za-z0-9]*[A-Za-z0-9]*)*\(/g).test(line) && (/(\)[\s]*{)/g).test(line) )
        {
                    findMethodDefs(lineArr,index);
        }              
}
var countKeywords = (line) => {
    var i=6;
    while(i>=5 && i<keywords.length)
    {
      var regex = new RegExp(keywords[i],'g')
      if(regex.test(line))
      {
             count++
      }
      i++
    }     
}
//Counts endline character \n in Java
var countBreakLineJava = (line) => {
    var regexStart1=/("(.*?.n\.*[\s])")/g
    var regexStart2=/("(.*?.n\.*[^\s])")/g
    var regexMid = /("(.*?.n\.*[\s].*[^\s])")/g
    var regexEnd=/("(.*?.n)")/g

    if(regexStart1.test(line))
    {
           count++
    }
    if(regexStart2.test(line))
    {
        count++
    }
    if(regexMid.test(line))
    {
        count++
    }
    if(regexEnd.test(line))
    {
        count++
    }
}
//Increase count due to special keywords.Increment  count for each keyword by 2
var countSpecKeywords=(line)=>{
    var regSpecKeywords=null;
    //let regNew=/((n*ew\s*[A-Za-z0-9]*[A-Za-z0-9]*\(.*\)))/g
    // let regthrows=/((throws*\s*[^\s]*Exception,*))/g
    // let regthrow=/((throw*\s*new*\s*\w*Exception*\(.*\)))/g
    
    if(/((n*ew\s*[A-Za-z0-9]*[A-Za-z0-9]*\(.*\)))/g.test(line))
    {
        if(/((throw*\s*new*\s*\w*Exception*\(.*\)))/g.test(line))
        {
             regSpecKeywords=line.match(/((throw*\s*new*\s*\w*Exception*\(.*\)))/g)
             //console.log(regSpecKeywords);
             count+=2;
        }  
        regSpecKeywords=line.match(/((n*ew\s*[A-Za-z0-9]*[A-Za-z0-9]*\(.*\)))/g)
        //console.log(regSpecKeywords);
        count+=2;
    }
    else if(/((throws*\s*[^\s]*Exception,*))/g.test(line))
    {
        regSpecKeywords=line.match(/((throws*\s*[^\s]*Exception,*))/g)
        //console.log(regSpecKeywords);
        count+=2;
    }   
    return regSpecKeywords;  
}
//Increase count due to class keyword.Increment count for each special keyword by 1
var countClassWord = (line) => {
    if (line.includes('class')) {
        var classKeyword = line.match(/class/g);
        //console.log(classKeyword);
        count++;
        return true;
    }
}
//Increase count due to class keyword.Increment count for each special keyword by 1
var countNumbers = (line) => {
    //console.log(line);
    let regNum = /[+-]?\d+(\.\d+)?/g;;
    let numbers = line.match(regNum);
    //console.log(numbers);
    if (numbers != null) {
        numbers.forEach(function (element) {
            //console.log(element);
            count += 1;
        });
        return numbers;
    }
}
//Increase count due to Strings.Increment count for each String by 1
var countStrings = (line) => {
    let regString = /"(.*?)"/g;
    let quotes = line.match(regString);
    //console.log(quotes);
    if (quotes != null) {
        quotes.forEach(function (element) {
            //console.log(element);
            count += 1;
        });
        return quotes
    }
}

//Increase count for each method call.Increment count for each method call by 1
var findMethodCalls = (line) => {
      if((/[^\s0-9]([A-Za-z0-9]*[A-Za-z0-9]*)*\(/g).test(line) && (/(\))/g).test(line) && !(/(\)[\s]*{)/g).test(line) )
      {
         //console.log("===============Method call====================");
         //console.log(line);
         count++;
      }  
}
//Increase count for each method definition.Increment count for each method definition by 1
var findMethodDefs=(lineArr,index)=>{
    var methodArr=[]
    start=index;
    

    //console.log("===================Method Definition=================");
    for(var i=start;i<lineArr.length;i++)
   {    //console.log(lineArr[i])
        var regexSpace=/\s/g;
        var res=lineArr[i].match(regexSpace)
        var closeBSpaceCount=0
        if(res!=null){
            closeBSpaceCount=res.length
        }

        if(lineArr[i].includes("}") && !closeBSpaceCount<1)
        {       
            
            end=i
            // console.log("End Index: "+end)
            // console.log("Spaces before }: "+closeBSpaceCount)
        }else if(closeBSpaceCount<2){
            break
        }
    }

   count++
//    console.log(start+" || "+end)
   for(var k=start;k<=end;k++){
       methodArr.push(lineArr[k])
   }
    
   if(methodArr.length>0){
    //    console.log("Method Array Length: "+methodArr.length+"\n")
       mCount+=1
       //console.log("====================================================================================================\n")
       //console.log(methodArr+"\n=====================================End Of Method========================================\n")
       identifyRecursion(methodArr,lineArr,start,end)
   }
    
        
  
   start=0
   end=0
   methodArr=[]
}


var complexityBySize = (lineArr) => {
    initializeRecursionArray(lineArr)
    mCount=0;
    //Stores complexity size count for each line in this array
    var ctc_arr = [];
    for (i = 0; i < lineArr.length; i++) {
        count = 0;
        start=0;
        end=0;

        var line = lineArr[i]
        var ch = lineArr[i].split('');
        findMethodCalls(line);

        
       
        countAritmeticOp(ch);
        countAssignmentOp(ch);
        countRelationOp(ch); 
        countLogicalOp(ch);
        countBitwiseOp(ch);
        countClassWord(line); 
        countNumbers(line);
        countStrings(line);
        countVariables(line,lineArr);
        countMethodDefs(line,lineArr,i);
        countBreakLineJava(line);
        countKeywords(line);
        countSpecKeywords(line);

        ctc_arr.push(count)   
    }
    console.log("Number of Methods: "+mCount)
    console.log("Complexity By Size Array Length: ", ctc_arr, ctc_arr.length)
    console.log("\n")
    return [ctc_arr,complexityByRecursion()];
};
module.exports = complexityBySize;