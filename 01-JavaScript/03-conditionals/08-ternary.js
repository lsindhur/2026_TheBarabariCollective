//voting result

//when not to use => when it hurts readability
//activity - 2 //year //character


//if conditions
let text;
let age = 17;
/* if(age<18) {
    text = 'Minor'
} else {
    text = 'Major'
} */
/* text = (age<18) ? "Minor" : "Major"
console.log(text); */



/* let age = 20;

let result = age>18? " Vote" : "Can not vote"
console.log(result); */





//activity1
//Write a Javascript program to check whether a year is 
// leap year or not.

//divisible by 400 or
//divisible by 4 and not divisible by 100

let year = 2025;
if(year%400 ===0 || (year%4===0 && year%100 !== 0)) {
    console.log('It is a leap year')
} else {
    console.log('It is not a leap year!')
}

//activity 2
// Write a Javascript program to check whether a character 
// is an alphabet, digit or a special character

//NaN => when we perform numerical operation
//A to Z or a to z => alphabet
let char = '*';

if((char>='A' && char<='Z') || (char>='a' && char<='z')) {
    console.log('It is an alphabet');
} else if(char>='0' && char<='9') {
    console.log('it is a number')
} else {
    console.log('It is a special character')
}





