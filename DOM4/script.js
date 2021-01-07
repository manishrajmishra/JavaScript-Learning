const courses = [
    {
        name: "Complete C++ Courses",
        price: 2.1,
    },
    {
        name: "Complete JS Courses",
        price: 1.9,
    },
    {
        name: "Complete ReactJS Courses",
        price: 2.5,
    },
    {
        name: "Complete MERN Courses",
        price: 2.4,
    },
];

function generateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.append(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);
        
        li.appendChild(span);
        ul.appendChild(li);
    })
}

window.addEventListener("load", generateLIST);

const button_asc = document.querySelector(".sort-btn-asc");

button_asc.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price )
    generateLIST();
});

const button_dsc = document.querySelector(".sort-btn-dsc");
button_dsc.addEventListener("click", () => {
    courses.sort( (a,b) => b.price - a.price)
    generateLIST();
})