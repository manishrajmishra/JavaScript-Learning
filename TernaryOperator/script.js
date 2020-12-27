//For Beginner

var authenticated = true;

if(authenticated){
    console.log("Show Signout Button");
}else{
    console.log("Show Login Option");
}

//Other Method
authenticated ? console.log("SignOut Button") : console.log("Login Button");