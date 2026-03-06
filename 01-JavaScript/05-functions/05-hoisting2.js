/* console.log(city); 

let city = "Delhi"; 

console.log(city);  */

//output?? //undefined?? //error??

///////////////////////////////////////////////

/* console.log(course);  

let course = "Web Development";  */ 


//output??

/////////////////////////////////////////////

/* greet();

function greet() {
  console.log("Good morning!");
}    */


//output??

///////////////////////////////////////////////////////////

/* var language = "JavaScript";

function test() {
  console.log(language); 
  var language = "Python";
  console.log(language); 
}

test();   */

//output??




//Explanation: Inside the function, 
// var language is hoisted to the top of the function scope
// , shadowing the outer variable. 
// It's undefined at first, then assigned "Python".


//////////////////////////////////////////////


/* var language = "JavaScript";

function test() {
  var language = 'python'
  console.log(language); 
  
}

test(); */    

//output??




//This is because of lexical scope in JavaScript. 
// Functions have access to variables in their outer scope — the scope in which they were defined.
//There’s no language defined locally in the test function, 
// so it “reaches out” to the global scope and finds it.

//////////////////////////////////////


 /* let language = "JavaScript";

function test() {
  console.log(language); 
  let language = "python"
}

test();  */   


//output??
//explanation??


/* test();  
var language;

function test() {
  console.log(language); //language is not defined //undefined
  
}   */

//output??
//explanation??



test();    

let language;

function test() {
  console.log(language); // ??
  
}   


  //output??
//explanation??