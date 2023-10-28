document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('tel').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const proficiency = document.getElementById('profeciency').value;
    const termsAgreed = document.getElementById('scales').checked;

    // Validate form inputs
    if (name && email && phone && dob && gender && proficiency && termsAgreed) {
        displayMessage("success", "Form submitted successfully!");
    } else {
        displayMessage("error", "Please fill out all fields and agree to the terms and conditions.");
    }
});

function displayMessage(type, message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = type;
    setTimeout(function() {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 3000); // Clear message after 3 seconds
}
