//what it a function and why do we need it?
//https://www.w3schools.com/js/js_functions.asp
//how to write a function - function syntax
//with params, without params
//technical terms
//2 activities













//function to sayHello
//without params

function sayHello() {
    console.log('hello');
}

//console.log('sindhura');
/* sayHello();
sayHello();
sayHello();
 */




//function to sayName
// with params

/* function sayName(name) {
    console.log('hi',name,'!')
}

sayName('sindhura');
sayName('Ajay') */





//technical terms related to function

//function definition - a function defined to perform a specific task
//function invokation - a function called to be executed

//function parameters - variables listed in function defintion
//function arguments -values passed in the function invokation






//activity 1
//write a function called welcomeUser that takes two arguments 
// :name and age
//When the function is invoked, it should print a message 
// with the given name and age

//"Welcome Alice, you are 25 years old!"

function welcomeUser(name,age) {
    console.log('Hi',name, 'you are',age,'years old!')
}

welcomeUser('Gayathri',20);





//activity 2
//write a function to calculate the 
// area of rectangle with length and breadth as parameters
//it should print a message like 
// 'The area of the rectangle is 180cm'.

function getArea(length,breadth) {
    console.log('The area of the rectangle is',length*breadth,'cm');
}

getArea(10,20)












