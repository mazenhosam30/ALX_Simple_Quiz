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

    // Compare the user's answer to the correct answer
    if (userAnswer.value === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
