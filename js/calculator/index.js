let inputField = document.getElementById("input");

function appendToInput(value) {
    inputField.value += value;
}

function clearInput() {
    inputField.value = "";
}

function calculateResult() {
    try {
        inputField.value = eval(inputField.value);
    } catch (error) {
        inputField.value = "Error";
    }
}
