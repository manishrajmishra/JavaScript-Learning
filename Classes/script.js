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
}

module.exports = User;