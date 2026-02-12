//use switch when you are comparing one value against multiple options/conditions
//or in other words multiple cases


/* 

switch (expression) {
    case value1:
      // code block
      break;
    case value2:
      // code block
      break;
    ...
    default:
      // default code block
  }

*/






let day;
let date = 0; 

/* if(date === 0) {
  day = 'Sunday'
} else if(date === 1) {
  day === 'Monday'
} else if(date === 2) {
  day === 'Tuesday'
} */

switch(date) {
  case 0:
  day="Sunday";
  break;
  case 1:
  day='Monday';
  break;
  case 3:
  day = 'Tuesday';
}

console.log(day);

