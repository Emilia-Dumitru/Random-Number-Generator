const answerElement = document.getElementById("answer");
const clearBtn = document.getElementById("clear-btn");
const generateBtn = document.getElementById("generate-btn");
let min = document.getElementById("min-value");
let max = document.getElementById("max-value");
let numItemsList = document.getElementById("numItems");
let repeatsOption = document.getElementById("repeats-items");
let sortOption = document.getElementById("sort-items");

const getRandomNumbers = () => {
    let minValue = parseInt(min.value);
    let maxValue = parseInt(max.value);
    let count = parseInt(numItemsList.value);
    let allowRepeats = repeatsOption.value === "yes";
    let sortType = sortOption.value;

    if (isNaN(minValue) || isNaN(maxValue) || isNaN(count) || minValue >= maxValue || count < 1) {
        answerElement.textContent = "Please enter valid values!";
        return;
    }

    let numbers = [];
    while (numbers.length < count) {
        let randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        if (allowRepeats || !numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    if (sortType === "high") {
        numbers.sort((a, b) => b - a);
    } else if (sortType === "low") {
        numbers.sort((a, b) => a - b);
    }

    answerElement.textContent = numbers.join(", ");
};

generateBtn.addEventListener("click", getRandomNumbers);

clearBtn.addEventListener("click", function () {
    min.value = "1";
    max.value = "10";
    numItemsList.value = "1";
    repeatsOption.value = "no";
    sortOption.value = "not";
    answerElement.textContent = "";
});
