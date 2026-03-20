//https://www.w3schools.com/js/js_array_methods.asp#mark_splice

//The splice() method can be used to add new items to an array:
//it modifies the original array
//returns the deleted items

const fruits = ["Banana", "Orange","Apple", "Mango"];

fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits)