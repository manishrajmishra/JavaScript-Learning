var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    }
}

var manish = new User("Manish", 3);

console.log(manish);

var avnish = new User("Avnish", 5);

console.log(avnish);