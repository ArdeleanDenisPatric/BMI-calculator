`use strict`

// bmi = weight / height^2
// bmi <18.5 => underweight
// bmi = 18.5 - 25 => normal weight
// bmi = 25 - 30 => overweight
// bmi > 30 => obesity


const weightInputElement = document.querySelector("#weight")
const heightInputElement = document.querySelector("#height")
const calculateBMIButton = document.querySelector("#button")
const resultBMI = document.querySelector("#result")

function buttonClicked() {
    
    const weight = weightInputElement.value;
    const height = heightInputElement.value;

    if (weight == "" || height == "") {
        alert("Please input values")
    }
    let bmi = weight / (height * height);
    console.log(bmi);
    let result;
    if (bmi < 18.5) {
        result = "Underweight";
    } else if
        (bmi > 18.5 && bmi < 25) {
        result = "Normalweight";
    } else if
        (bmi > 25 && bmi < 30) {
        result = "Overweight";
    } else {
        result = "Obesity";
    }
    resultBMI.innerText = result;
}

calculateBMIButton.addEventListener("click", buttonClicked)

