var key = "testprep";

switch (key) {
    case "admin":
        console.log("gets Full Access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("gets access to consume content");
        break;
    default:
        console.log("Wrong Choice");
        break;
}