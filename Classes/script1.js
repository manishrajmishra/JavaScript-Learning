const User = require("./script.js");

const manish = new User("Manish", "manish@gmail.com");

console.log(manish.getInfo());
manish.enrollCourse("React BootCamp");
manish.enrollCourse("JS BootCamp");

console.log(manish.getCourseList());

let courses = manish.getCourseList();

courses.forEach((c) => console.log(c));