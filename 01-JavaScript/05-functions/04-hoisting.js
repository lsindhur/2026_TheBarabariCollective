//guess the output
//temporal dead zone
//summary

greetUser();
function greetUser() {
    console.log('Hi')
}
console.log(city);
var city = 'hyderabad';

console.log(city);








//summary
// 1. Memory Allocation Phase:
//    - JS scans the code and reserves memory for:
//       • Variable declarations (but does not assign values yet)
//       • Function declarations (the whole function is stored in memory)
//    - This process is called **Hoisting**.

// 2. Execution Phase:
//    - JS runs the code line by line.


//The Temporal Dead Zone is the gap between when the variable is hoisted (during memory phase) and when it is declared (during execution).
//They're in a Temporal Dead Zone (TDZ) from the start of the scope until their declaration line.


