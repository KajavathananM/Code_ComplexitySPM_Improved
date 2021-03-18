const assert=require('chai').assert;


//Global variables
var count;
var keywords=["(printf)","(println)","(cout)","(cin)","(if)","(for)","(while)","(do while)","(switch)","(case)"];

//Inputs for each function as a program statement
var l1="kilometers=26*1.609+(1.609/1760)*385;";
var l2='System.out.println("Hello");';
var l4='String s="Welcome";';

//Inputs to test countClassWord method
var l3="class Person";

//Inputs to test countSpecKeywords method
var l5=" MyClass myObj1 = new MyClass();";
var l6='throw new NullPointerException("demo");';

//Inputs to test countVariables method
var l7="int number=2;";
var l8="float price=125.25;";
var l9="int ";
var l10="System.out.println('TEST')"

//Methods that are going to be tested
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

//Check for Strings in Program code
var countStrings = (line) => {
  let regString = /"(.*?)"/g;
  let quotes = line.match(regString);
  //console.log(quotes);
  if (quotes != null) {
      quotes.forEach(function (element) {
          //console.log(element);
          count += 1;
      });
      return quotes;
  }
}

//Check for class keyword in Program code
var countClassWord = (line) => {
  if (line.includes('class')) {
      var classKeyword = line.match(/class/g);
      //console.log(classKeyword);
      count++;
      return true;
  }
}

//Check for special keyword in Program code which are keywords for exception and new keyword
var countSpecKeywords=(line)=>{
  var regSpecKeywords=null;
  //let regNew=/((n*ew\s*[A-Za-z0-9]*[A-Za-z0-9]*\(.*\)))/g
  // let regthrows=/((throws*\s*[^\s]*Exception,*))/g
  // let regthrow=/((throw*\s*new*\s*\w*Exception*\(.*\)))/g
  //  console.log(line);
  //  console.log(typeof line);
  if(/((n*ew\s*[A-Za-z0-9]*[A-Za-z0-9]*\(.*\)))/g.test(line))
  {
      // console.log(/((n*ew\s*[A-Za-z0-9]*[A-Za-z0-9]*\(.*\)))/g.test(line))
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
//Check for data types 
var countVariables=(line)=>{
  //console.log(keywords[i]);
  var regInt=/((int*\s*[A-Za-z0-9]*[A-Za-z0-9]*[^\s(\(.*\)))]))/g;
  var regFloat=/((float*\s*[A-Za-z0-9]*[A-Za-z0-9]*[^\s(\(.*\)))]))/g;
  var regString=/((string*\s*[A-Za-z0-9]*[A-Za-z0-9]*[^\s(\(.*\)))]))/g;
  if((regInt).test(line))
  {
      //console.log(line);
      count++
      return true
  }
  else if((regFloat).test(line)){
      count++
      return true
  }
  else if((regString).test(line)){
       count++
       return true
  }else{
    return false
  }
  
}
var countKeywords=(line)=>{
  var i=0;
  while(i<keywords.length)
  {
    var regex = new RegExp(keywords[i],'g')
    
    if(regex.test(line))
    {
        count++
        return true
    }
    else{
      i++
    }
    
  } 
}
/*Results that are returned from the method*/
countNumbersResult1=countNumbers(l1);
countNumbersResult2=countNumbers(l8);
countNumbersResult3=countNumbers(l7);
countStringsResult1=countStrings(l2);
countStringsResult2=countStrings(l4);
countClassResult=countClassWord(l3);
countSpecKeywordsResult1=countSpecKeywords(l5);
countSpecKeywordsResult2=countSpecKeywords(l6);
countVariablesResult1=countVariables(l7);
countVariablesResult2=countVariables(l4);
countVariablesResult3=countVariables(l9);
countKeywordsResult=countKeywords(l10);

//This is where assertion takes place for Complexity For Size Algorithms
describe('TestComplexityForSize',function(){
     describe('Function countNumbers(line)',function(){
        it('function countNumbers should return an array',function(){
          assert.isArray(countNumbersResult1,'array');
          assert.isArray(countNumbersResult2,'array');
          assert.isArray(countNumbersResult3,'array');
        })
        it('An array  contains elements of number type',function(){
          countNumbersResult1.forEach(function(element){
            assert.typeOf(parseFloat(element),'number')
          });  
          countNumbersResult2.forEach(function(element){
            assert.typeOf(parseFloat(element),'number')
          })
          countNumbersResult3.forEach(function(element){
            assert.typeOf(parseInt(element),'number')
          })    
        })
        it('Check if array does not contain null character',function(){
          countNumbersResult1.forEach(function(element){
             assert.isNotNull(element,'element is not of null type');
          });
          countNumbersResult2.forEach(function(element){
            assert.isNotNull(element,'element is not of null type');
          }); 
          countNumbersResult3.forEach(function(element){
            assert.isNotNull(element,'element is not of null type');
          });   
        })
     })
      describe('Function countStrings(line)',function(){
        it('function countStrings should return an array',function(){
           assert.isArray(countStringsResult1,'array');
           assert.isArray(countStringsResult2,'array');
        })
        it('Check if array does not contain null character',function(){
          countStringsResult1.forEach(function(element){
            assert.isNotNull(element,'element is not of null type');
          });
          countStringsResult2.forEach(function(element){
            assert.isNotNull(element,'element is not of null type');
          });    
        })
      })
     describe('Function countClassWord(line)',function(){
      it('function countClassWord returns boolean result when it matches class keyword',function(){
        assert.isTrue(countClassResult,'Line matches class keyword')
      }) 
    })
    describe('Function countSpecKeywords(line)',function(){
      it('function countSpecKeywords should return an array for l5',function(){
        assert.isArray(countSpecKeywordsResult1,'array');
      }) 
    })
    describe('Function countSpecKeywords(line)',function(){
      it('function countSpecKeywords should return an array for l6',function(){
        assert.isArray(countSpecKeywordsResult2,'array');
      }) 
    })
    describe('Function countVariables(line)',function(){
      it('function should return true if it matches data type',function(){
        assert.isTrue(countVariablesResult1,'It has a data type');
        assert.isTrue(countVariablesResult2,'It has a data type');
        assert.isTrue(countVariablesResult3,'It has a data type');
      }) 
    })
    describe('Function countKeywords(line)',function(){
      it('function should return true if it contains keywords',function(){
        assert.isTrue(countKeywordsResult,'It has a relevant keyword');
      }) 
    })
})
