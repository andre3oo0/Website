function showConfirmation(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Show confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.innerText = 'Thank you! Your reservation has been submitted.';
    confirmationMessage.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Display the confirmation message
        confirmationMessage.innerText = 'Thank you! Your message has been sent successfully.';
        confirmationMessage.style.display = 'block';

        // Optionally, clear the form fields
        form.reset();
    });
});



