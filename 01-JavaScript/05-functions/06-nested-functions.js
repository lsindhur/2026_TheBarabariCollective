

//https://www.geeksforgeeks.org/javascript/javascript-nested-functions/


function outer() {
  let a = 10;
  
  function inner() {
    console.log(a);
    
  }
  inner();
}

outer();