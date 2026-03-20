//multiply all the values in the array with 10
//summary 
//method chaining

const numbers = [65, 44, 12, 4];

/* const result = numbers.map(num => {
    return num*10
})

console.log(result); */

/* numbers.forEach(num => {
    console.log(num*10) 
}) */











//summary 
//both methods do not modify the original array
//map  ALWAYS returns a new array of same length
//forEach does NOT return an array, it is useful to perform some
//operations on the elements inside an array



/* const result = arr.map(ele => {
    if(ele>1) {
        return ele*2
    }
})

console.log(result) */

//solve the problem
//if number >1, multiply with 2 and return a new array
//what method will you use?

const arr = [1, 2, 3];
const result = arr
                .filter(ele => ele>1)
                .map(ele => ele*2)

console.log(result);


