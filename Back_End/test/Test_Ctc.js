const assert=require('chai').assert;

const prettier = require("prettier");
const fs = require('fs');

const complexityByType = require('../Complexity_Algorithm/ComplexityByType');

// Complexity For Size
const countClassWord = require('../Complexity_Algorithm/ComplexityBySize').Cs_Classword;
const countNumbers = require('../Complexity_Algorithm/ComplexityBySize').Cs_countNumbers;
const countStrings = require('../Complexity_Algorithm/ComplexityBySize').Cs_countStrings;
const countSpecKeywords = require('../Complexity_Algorithm/ComplexityBySize').Cs_SpecKeywords;



//Read from the file
var data = fs.readFileSync('./test/Main.java', 'utf8');


//Format according to the Syntax
const formattedText = prettier.format(data, {
  parser: "java",
  tabWidth: 2
});


var lineArr = formattedText.split(/(?:\r\n|\r|\n)/g);
//console.log(complexityByType(lineArr))

let resultArr = complexityByType(lineArr);

var sum = 0;
for (let i = 0; i < resultArr.length; i++) {
  sum += resultArr[i];
}

//Test case :1
describe('Correct Complexity By Type', function () {
  describe('#complexityByType()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal(sum, 15);
    });
  });
});

//Test Case :2
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});




//Inputs for each function as a program statement

var l2='System.out.println("Hello");';
var l10="System.out.println('TEST')"


//Inputs for countNumbers method 
var l1="kilometers=26*1.609+(1.609/1760)*385;";


//Inputs to test countClassWord method
var l3="class Person";
var l11="public class Dog"
var l12="class FactorialExample"

//Inputs to test countSpecKeywords method
var l5=" MyClass myObj1 = new MyClass();";
var l6='throw new NullPointerException("demo");';

//Inputs to test countVariables method
var l7="int number=2;";
var l8="float price=125.25;";
var l9="int ";
var l4='String s="Welcome";';
var l13="if (n == 0) return 1; else return (n * factorial(n - 1));"

//Endline Chars
var l14="System.out.println('Welcome \n');"
var l15="System.out.println('\n Welcome');"
var l16="System.out.println('\n Welcome \n');"
var l17="System.out.println('Welcome \n\n');"

//Global variables
count=0
var keywords=["(printf)","(println)","(cout)","(cin)","(if)","(for)","(while)","(do while)","(switch)","(case)"];

//Methods for Complexity for Size
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
var countBreakLineJava = (line) => {
  var regexStart1=/(.*?.*\\n\.*[\s]+)/g
  var regexStart2=/(.*?.*\\n\.*[^\s]+)/g
  var regexMid = /(.*?.n\.*[\s].*[^\s])/g
  var regexEnd=/(.*?.n)/g


  var checkBreakLineJavaMatch=false
  if(regexStart1.test(line))
  {
         count++
         checkBreakLineJavaMatch=true
  }
  else if(regexStart2.test(line))
  {
      count++
      checkBreakLineJavaMatch=true
  }
  else if(regexMid.test(line))
  {
      count++
      checkBreakLineJavaMatch=true
  }
  else if(regexEnd.test(line))
  {
      count++
      checkBreakLineJavaMatch=true
  }
  return checkBreakLineJavaMatch
}

/*Results that are returned from the method*/
countNumbersResult1=countNumbers(l1);
countNumbersResult2=countNumbers(l8);
countNumbersResult3=countNumbers(l7);
countNumbersResult4=countNumbers(l13);
countStringsResult1=countStrings(l2);
countStringsResult2=countStrings(l4);
countClassResult1=countClassWord(l3);
countClassResult2=countClassWord(l11);
countClassResult3=countClassWord(l12);
countSpecKeywordsResult1=countSpecKeywords(l5);
countSpecKeywordsResult2=countSpecKeywords(l6);
countVariablesResult1=countVariables(l7);
countVariablesResult2=countVariables(l4);
countVariablesResult3=countVariables(l9);
countKeywordsResult=countKeywords(l10);
countBreakLineJavaResult1 =countBreakLineJava(l14)
countBreakLineJavaResult2 =countBreakLineJava(l15)
countBreakLineJavaResult3 =countBreakLineJava(l16)
countBreakLineJavaResult4 =countBreakLineJava(l17)


console.log(countBreakLineJavaResult1)
//This is where assertion takes place for Complexity For Size Algorithms
describe('Testing_Complexity_For_Size Methods',function(){
     describe('Function countNumbers(line)',function(){
        it('function countNumbers should return an array',function(){
          assert.isArray(countNumbersResult1,'array');
          assert.isArray(countNumbersResult2,'array');
          assert.isArray(countNumbersResult3,'array');
          assert.isArray(countNumbersResult4,'array');
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
          countNumbersResult4.forEach(function(element){
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
          countNumbersResult4.forEach(function(element){
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
        assert.isTrue(countClassResult1,'Line matches class keyword for l3')
        assert.isTrue(countClassResult2,'Line matches class keyword for l11')
        assert.isTrue(countClassResult3,'Line matches class keyword for l12')
      }) 
    })
    describe('Function countSpecKeywords(line)',function(){
      it('function countSpecKeywords should return an array for l5',function(){
        assert.isArray(countSpecKeywordsResult1,'array');
      }) 
    })
    describe('Function countBreakLineJava(line)',function(){
      it('function should return true if it contains endline character',function(){
        assert.isTrue(countBreakLineJavaResult1,'Contains endline for l14');
        assert.isTrue(countBreakLineJavaResult2,'Contains endline for l15');
        assert.isTrue(countBreakLineJavaResult3,'Contains endline for l16');
        assert.isTrue(countBreakLineJavaResult4,'Contains endline for l17');
      }) 
    })
    describe('Function countSpecKeywords(line)',function(){
      it('function countSpecKeywords should return an array for l6',function(){
        assert.isArray(countSpecKeywordsResult2,'array');
      }) 
    })
    describe('Function countVariables(line)',function(){
      it('function should return true if it matches data type',function(){
        assert.isTrue(countVariablesResult1,'It has a data type for l7');
        assert.isTrue(countVariablesResult2,'It has a data type for l4');
        assert.isTrue(countVariablesResult3,'It has a data type for l9');
      }) 
    })
    describe('Function countKeywords(line)',function(){
      it('function should return true if it contains keywords',function(){
        assert.isTrue(countKeywordsResult,'It has a relevant keyword');
      }) 
    })
})


