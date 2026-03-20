// Write an algorithm to find the second largest element/number in an array.

const data = [50, 10, 40, 60, 30, 20];
let highest = data[0];  //50 //60
let second = data[1];  //10 //40
let swap;
//1st iteration
//50<40 //false
//10<40 //second = 40

//2nd iteration data[3]
//50<60; highest = 60

for(let i=2; i<data.length; i++) {
    if(highest<data[i]) {
        swap = highest;
        highest = data[i];
        second = swap;
    } else if(second<data[i]) {
        second = data[i]
    }
}

console.log(highest); //60
console.log(second); //40 //right answer is 50

















