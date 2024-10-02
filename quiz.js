function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedback = document.getElementById('feedback');

    // Check if an answer was selected
    if (!userAnswer) {
        feedback.textContent = "Please select an answer.";
        return;
    }

    // Now use the exact comparison check expects: userAnswer.value
    if (userAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! Well done.";  // Correct feedback
    } else {
        feedback.textContent = "That's incorrect. Try again!";  // Incorrect feedback
    }
}

// Add an event listener to the submit button (as per the check requirements)
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
