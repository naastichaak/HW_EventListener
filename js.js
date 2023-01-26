let change1 = document.querySelector(".change1");
let change2 = document.querySelector(".change2");
let change3 = document.querySelector(".change3");

change1.style.background = `darkslategray`;
change2.style.background = `darkslategray`;
change3.style.background = `darkslategray`;


const div1 = () => {
    if (change1.style.background == `darkslategray`) {
        change1.style.background = `tomato`;
    } else if (change1.style.background == `tomato`) {
        change1.style.background = `darkslategrey`;
    } else if (change1.style.background == `darkslategrey`) {
        change1.style.background = `limegreen`;
    } else if (change1.style.background = `limegreen`) {
        change1.style.background = `darkslategray`;
    }
};

change1.addEventListener("click", div1);

const div2 = () => {
    if (change2.style.background == `darkslategray`) {
        change2.style.background = `tomato`;
    } else if (change2.style.background == `tomato`) {
        change2.style.background = `darkslategrey`;
    } else if (change2.style.background == `darkslategrey`) {
        change2.style.background = `limegreen`;
    } else if (change2.style.background = `limegreen`) {
        change2.style.background = `darkslategray`;
    }
};

change2.addEventListener("click", div2);

const div3 = () => {
    if (change3.style.background == `darkslategray`) {
        change3.style.background = `tomato`;
    } else if (change3.style.background == `tomato`) {
        change3.style.background = `darkslategrey`;
    } else if (change3.style.background == `darkslategrey`) {
        change3.style.background = `limegreen`;
    } else if (change3.style.background = `limegreen`) {
        change3.style.background = `darkslategray`;
    }
};

change3.addEventListener("click", div3);