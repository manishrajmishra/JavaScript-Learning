var returnedValue = Math.max(1,5,2,8,3,7);
console.log(returnedValue);

var myObj = {};

Object.assign(myObj, {a:1, b:2, c:3}, {z:26, y:25, x:24});
console.log(myObj);

function sumOne(a, b){
    return a + b;
}

console.log(sumOne(5, 4));

function sumTwo(a, b){
    return a + b;
}

var myArr = [5, 4];
console.log(sumTwo(...myArr)); //spread Operator

//rest operator
function sumThree(...myArr){
    console.log(myArr);
    let sum = 0;
    for(const arg of myArr){
        sum += arg;
    }
    return sum;
}

console.log(sumThree(2,3,4,1,3,6,7,8,9));

function sumFour(a, b, ...args){
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for(arg of args){
        sum += arg;
    }
    return [multi, sum];
}

console.log(sumFour(2,3,4,1,3,6,7,8,9));