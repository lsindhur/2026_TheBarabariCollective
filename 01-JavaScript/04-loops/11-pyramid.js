/*
    
    *
   ***
  *****
 *******
*********

*/


/*
    
1111*1111
111***111
11*****11
1*******1
*********

*/
let temp = 5;
let star = '*';
for(let i=1; i<=temp; i++) {
    let space = ''
    for(let j=1; j<=temp-i; j++) {
        space+=' '
    }
    
    console.log(space+star+space);
    star+='*'+'*'
 }






/*
let star = '*'
let pattern = ''
for(let i=4; i>=0; i--) {
    for(let j=0; j<i; j++) {
        pattern += ' ';
    }
    console.log(pattern+star+pattern);
    star=star+"*"+"*"
    pattern = '';
} 
 */