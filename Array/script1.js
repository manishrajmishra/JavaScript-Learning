function isEven(element){
    // if(element % 2 === 0){
    //     return true;
    // }
    // return false;

    return element % 2 === 0;
}

console.log(isEven(2));

var isEvenTwo = (element) => {
    // if(element % 2 === 0){
    //     return true;
    // }
    // return false;

    return element % 2 === 0;
}

console.log(isEvenTwo(2));

var result = [2, 4, 6, 8, 9].every(isEvenTwo);
console.log(result); // true, true, true, true, false

var result1 = [2, 4, 6, 8].every((e) => {
    return e%2 === 0;
});
console.log(result1);


var result2 = [2, 4, 6, 8].every((e) => e%2 === 0)
console.log(result2);

var result3 = [2, 4, 6, 8].every((e) => (e%2===0))
console.log(result3);