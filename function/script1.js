function getUserRole(name, role){
    switch (role) {
        case "admin":
            console.log(`${name} have all the access`);
            break;
        case "subadmin":
            console.log(`${name} with access to create/delete courses`);
            break;
        case "testprep":
            console.log(`${name} with access to create/delete tests`);
            break;
        case "user":
            console.log(`${name} consume all the contents`);
            break;
        default:
            console.log("Trail User");
            break;
    }
}

getUserRole("Manish Raj", "admin");