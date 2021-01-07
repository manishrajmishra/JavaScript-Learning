function init(){
    var firstName = "Manish";
    console.log("I am Init");

    function sayfirstName(){
        console.log(firstName);
    }
    rerurn sayfirstName;
}

var name = init();

name();


function doAddition(x){
    return function(y){
        return x + y;
    }
}

var add5 = doAddition(4);
console.log(add5(4));