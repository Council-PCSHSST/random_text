// Function to generate random position
const randomPos = () => {
    let num = Math.floor(Math.random() * 10);
    while (num > allPos) {
        num = Math.floor(Math.random() * 10);
    }
    return num;
}

const changeTextRandom = () => {
    let numPos = randomPos();
    randomTextHtml.innerHTML = "is... " + TextClues[numPos];

    return numPos;
}

const btn_submit = () => {
    press_time++;
    active = 1;
}

const addText = () => {
    let data = document.getElementById("clues").value;
    let data_split = data.split("\n");
    for (posText in data_split) {
        console.log(data_split[posText])
        TextClues.push(data_split[posText])
    }
    console.log(TextClues);
    allPos = TextClues.length - 1;
    status_btn.disabled = false;
    status_btn.innerHTML = "Stop/Start";
}


let TextClues = [];
let btn_add = document.getElementById("btn_add");
let randomTextHtml = document.getElementById("randomText");
let status_btn = document.getElementById("switch");
let press_time = 0;
let active = 0;
status_btn.disabled = true;
status_btn.innerHTML = "Disabled btn!!";



// Asynchronus function to random text position
setInterval(() => {
    if (press_time % 2 == 1) {
        if (allPos === -1) {
            randomTextHtml.innerHTML = "Out of range random text!";
            status_btn.innerHTML = "Disabled btn!!";
            status_btn.disabled = true;
            return false;
        }
        nums = changeTextRandom();
    } else {
        if (active === 1) {
            TextClues.splice(nums, 1);
            allPos--;
            console.log(TextClues);
            active = 0;
            console.log(`allPos have are : ${allPos}`);
        }
    }
}, 10)

