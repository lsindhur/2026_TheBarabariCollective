//copying the value
//copying the reference


let city1 = 'hyd';

let city2 = city1; //hyd //the value got assigned

 city2 = 'blr'; //blr

console.log(city2); //blr
console.log(city1); //hyd  




let arr1 = [1,2,3];
let arr2 = arr1; 
 //[1,2,3]; //reference gets copied
let arr3 = arr1; 
arr2[0] = 2;
console.log(arr2); //[ 2, 2, 3 ]
console.log(arr1); //[ 2, 2, 3 ]



















