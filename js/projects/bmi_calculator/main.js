// var bmi = weight / Math.pow(height / 100, 2);

let height=document.getElementById("height");
let weight=document.getElementById("weight");
let btn=document.getElementById("btn");


function calculateBMI(){

    let bmi = weight.value / Math.pow(height.value / 100, 2);
    bmi = Math.round(bmi * 10) / 10;

    if (bmi < 18.5) {
        document.getElementById("result").innerHTML = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("result").innerHTML = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("result").innerHTML = "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
        document.getElementById("result").innerHTML = "Obese";
    } else if (bmi >= 35) {
        document.getElementById("result").innerHTML = "Extremely Obese";
    }



}

btn.addEventListener("click",calculateBMI);

