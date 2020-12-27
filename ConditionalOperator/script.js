
var temperature = 29;

if(temperature <= 20){
    console.log("It's Cold Outside");
}


if(temperature < 30){
    console.log("It's Moderate Outside");
}else{
    console.log("It's really Hot Outside");
}


var email = true;
var facebook = false;
var google = false;

if(email || facebook || google){
    console.log("Login Success");
}else{
    console.log("Login Fails");
}