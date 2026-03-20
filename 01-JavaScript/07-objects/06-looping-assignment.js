const data = [{a:1, b:2},{aa:11,bb:12},{aaa:111,bbb:222}];

//get sum of values

let sum=0;
data.forEach(obj => {
    for(let key in obj) {
        sum+=obj[key]
    }
})
console.log(sum);





















