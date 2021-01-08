const user = ["Manish", 3, "admin"];

// var name = user[0];
// var role = user[2];
// console.log(role);
// var [name, courseCount, role] = user;

const MyUser = {
    name: "Manish",
    courseCount: 5,
    role: "Admin",
};

console.log(MyUser.courseCount);

const {name, courseCount, role} = MyUser;
console.log(courseCount);

// to have desctructing the type and name should be same 