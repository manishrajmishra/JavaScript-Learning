var myMap = new Map();

myMap.set(0, "Uno");
myMap.set(1, "Kno");
myMap.set(2, "dno");
myMap.set(3, "zno");

console.log(myMap);

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`Value is ${value}`);
}

for(let [key, value] myMap){
    console.log(`Key is : ${key} and Value is ${value}`);
}

myMap.forEach((key) => console.log(`${key}`)); //value gets printed

myMap.forEach((value) => console.log(`${value}`)); //value gets printed

myMap.forEach((v, k) => console.log(`${v} and key is ${k}`)); //now key and value will be printed

myMap.delete(2);

console.log(myMap);
