// find the largest element.

const data = [1,23,4,33,2,23,52,5,215,6,64572,5,52];
//highest=64572
let highest = data[0]
for(let i=1; i<data.length; i++) {
    if(highest<data[i]) {
        highest = data[i]
    } 
}

console.log(highest)




//correct
//highest = 1; 1>23; highest = 23
//highest >4; highest = 23
//highest>33; highest = 33;
//highest>2; highest = 33;
//highest>23; highest = 33

//incorrect
//data[0]>data[1] ; highest = 23
//data[1]>data[2]; highest = 23
//data[2]>data[3]; highest = 33;
//data[3]>data[4];highest = 33;
//data[4]>data[5];highest = 23



























/* let highest= data[0];
for(let i=1; i<data.length; i++) {
    if(highest<data[i]) {
        highest = data[i]
    }
}
 */