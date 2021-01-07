const manish = {
    firstName: "Manish",
    lastName: "Raj",
    role: "Admin",
    courseCount: 3,
    getInfo: function(){
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.lastName}
        His Role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    }
}

const avnish = {
    firstName: "Avnish",
    lastName: "Raj",
    role: "Sub-Admin",
    courseCount: 4
};

manish.getInfo();

//binding the manish getinfo method to avnish which provides the refference
var avnishInfo = manish.getInfo.bind(avnish);
console.log(avnishInfo);

//call method do the same as bind but it directly calls the method
manish.getInfo.call(avnish);