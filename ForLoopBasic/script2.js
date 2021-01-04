const names = [
    "Youtube",
    "Amazon",
    "Facebook",
    "Instagram",
    "Netflix"
];

for (const n of names){
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline.in",
};

for(const n in symbols){
    console.log(n); //For accessing key
    console.log(symbols[n]); //For accessing symbols
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}