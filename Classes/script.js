class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    //declaring as private variable
    #courseList = [];

    getInfo(){
        return {name: this.name, email: this.email}
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }

    getCourseList(){
        return this.#courseList;
    }

    login(){
        return "You are Logged In";
    }
}

class SubAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    getAdminInfo(){
        return "I am SubAdmin";
    }
}

module.exports = User;

const tom = new SubAdmin("tom", "tom@gmail.com");
console.log(.getAdminInfo());
console.log(tom.login());

console.log(tom.getInfo());