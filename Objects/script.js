var user = {
    firstName: "Manish",
    lastName: "Raj",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true
};

console.log(user.firstName);

console.log(user["lastName"]); //other way of accessing the properties of objects


user.loginCount = 44;
console.log(user.loginCount);

console.table(user);