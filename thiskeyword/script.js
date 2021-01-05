console.log(this);

var user = {
    firstName: "Manish",
    lastName: "Raj",
    courseCount: 4,
    getCourseCount: function(){
        console.log("LINE 8", this);
        //this is regualr function which returns window object
        function sayHello(){
            console.log("Hello");
            console.log("Line 11", this);
        }
        sayHello();
    }
};

user.getCourseCount();

//Regular Function will return window object
function sayHello(){
    console.log("Hello");
}

sayHello();