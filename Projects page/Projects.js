

let currentOperator = "+"; // declaring current operator as + using a Let variable so it can be changed

function toggleOperator() {
    const operatorDisplay = document.getElementById('operator');
    const operators = ['+', '-', '*', '/']; // declaring operator variables

    const currentIndex = operators.indexOf(currentOperator); // declaring operator varaibles as an index called "currentIndex"

    const nextIndex = (currentIndex + 1) % operators.length; // cycling though index

    currentOperator = operators[nextIndex];

    operatorDisplay.textContent = currentOperator;
}

function calculate() {
    const num1 = parseFloat(document.querySelector('.num1').value); // parse float converts the values the user has entered into numbers
    const num2 = parseFloat(document.querySelector('.num2').value);
    const resultDisplay = document.getElementById('result'); // this is where the calculator outputs those values

    if (!isNaN(num1) && !isNaN(num2)) {
        // Check if input 1(num1) !isNaN = false which checks if input box is empty or not same with num2
        let result;
        switch (currentOperator) { // using a switch statement to switch between the operators
            case '+': // the first case is "+"
                result = num1 + num2; // which returns num 1 + num2
                break;
            case '-':// second case is "-"
                result = num1 - num2; //which returns num1 - num2
                break;
            case '*':// third class is * or multiplied by
                result = num1 * num2; // which returns num1 * num2
                break;
            case '/':// fourth class is / or divided by
                if (num2 !== 0) { // using an if statement to see if num 2 is strictly inequal to zero
                    result = num1 / num2; // if it is the num 1 divided by num 2
                } else {
                    result = '0'; // if it isnt inequal then return 0
                }
                break;
        }
        resultDisplay.textContent = "Result = " + result; // then in the "results" it displays "results =" followed by the results output
    } else {
        resultDisplay.textContent = "Please enter valid numbers."; // or if input is empty or filled incorrectly it displays this string
    }
}

//Light dark mode script
document.addEventListener("DOMContentLoaded", function() {
    const Light_Mode = document.getElementById("Lightmode");
    const Dark_Mode = document.getElementById("Darkmode");
    const elementToChange = document.getElementById("elementToChange");
   

    
    function setModeToLocalStorage(mode) {
        localStorage.setItem("selectedMode", mode);
    }

   
    function applySelectedMode() {
        const selectedMode = localStorage.getItem("selectedMode");

        if (selectedMode === "Lightmode") {
            elementToChange.classList.remove("Darkmode");
            elementToChange.classList.add("Lightmode");
          
        } else if (selectedMode === "Darkmode") {
            elementToChange.classList.remove("Lightmode");
            elementToChange.classList.add("Darkmode");
         
        }
    }

  
    applySelectedMode();

    Light_Mode.addEventListener("change", function() {
        console.log("Light Mode clicked");
        setModeToLocalStorage("Lightmode");
        applySelectedMode();
    });

    Dark_Mode.addEventListener("change", function() {
        console.log("Dark Mode clicked");
        setModeToLocalStorage("Darkmode");
        applySelectedMode(); 
    });
});

