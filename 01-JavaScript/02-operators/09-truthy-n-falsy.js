//guess the output
//mdn
//examples
console.log(0&&20);
//falsy vs truthy //0
//0 is false 
console.log(""&&20);//falsy vs truthy
//""

console.log(false && true); //false





//https://developer.mozilla.org/en-US/docs/Glossary/Falsy
//JS doesn't require true or false to perform logical operations

//it treats some values as falsy and rest as truthy;
//falsy values are 
/*
""
NaN
undefined
false
0
null
*/

//rest are truthy




//examples
/* console.log(""&&5); //falsy vs truthy //""
console.log(5&&20);  //20 
console.log(5 || 20); //5
console.log(5&&7&&20);//20
console.log(10&&0&&30);//0
 */


//examples 
console.log(""||5);  //5
console.log(5||20); //5
console.log(5||7||20);  //5
console.log(10||0||30); //10
 

