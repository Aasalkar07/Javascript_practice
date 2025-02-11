// First taking element from display id
let display = document.getElementById("display");

//Append function for adding values and operators
function appendValue(value) {
    display.value += value;
}

//ClearDisplay Function 
function clearDisplay() {
    display.value = "";
}

// deletefromlast function
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// final function for calculating values from user
function calculateResult() {
    try {
        display.value = eval(display.value);  // Evaluate the expression
    } catch (error) {
        alert("Invalid Expression");
        clearDisplay();
    }
}
