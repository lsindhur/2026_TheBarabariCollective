//activity2
//Write a function repeatString(str, times) 
// that returns the string str repeated number of times.

//ex repeatString("hello",2); //hello hello

function repeatString(str,num) {
    let temp = '';
    for(let i=1; i<=num; i++) {
        temp+=str+ ' '
    }
    console.log(temp)
}
repeatString('hello',3)














