var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    }
}

User.prototype.getFirstName = function(){
    console.log(`Your FirstName is : ${this.firstName}`);  
}

var manish = new User("Manish", 3);
manish.getCourseCount();
if(manish.hasOwnProperty("firstName")){
    manish.getFirstName();
}
//console.log(manish);

var avnish = new User("Avnish", 5);
avnish.getCourseCount();
if(avnish.hasOwnProperty("firstName")){
    avnish.getFirstName();
}
//console.log(avnish);