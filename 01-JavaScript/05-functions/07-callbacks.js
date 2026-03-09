//https://www.w3schools.com/js/js_callback.asp
//a callback function is a function which is passed
//as an argument to another function
//sign up button
//write a callback function to say bye only after saying hi

function sayBye() {
    console.log('bye!')
}

function greetUser(callback) {
    console.log('hi');
    callback()  
}

greetUser(sayBye)


















