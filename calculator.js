// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Check for division by zero
    if (number2 === 0) {
        return "Cannot divide by zero!";
    }
    return number1 / number2;
}

// Function to get input values and update result
function performOperation(operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    let result;

    // Perform the correct operation based on the button clicked
    if (operation === 'add') {
        result = add(number1, number2);
    } else if (operation === 'subtract') {
        result = subtract(number1, number2);
    } else if (operation === 'multiply') {
        result = multiply(number1, number2);
    } else if (operation === 'divide') {
        result = divide(number1, number2);
    }

    // Display the result in the calculator
    document.getElementById('calculation-result').textContent = result;
}

// Event listeners for the buttons
document.getElementById('add').addEventListener('click', function() {
    performOperation('add');
});

document.getElementById('subtract').addEventListener('click', function() {
    performOperation('subtract');
});

document.getElementById('multiply').addEventListener('click', function() {
    performOperation('multiply');
});

document.getElementById('divide').addEventListener('click', function() {
    performOperation('divide');
});
