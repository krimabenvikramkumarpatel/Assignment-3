// Handle the form submission event
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Basic validation to check if all fields are filled
    if (name && email && date && time) {
        // Show confirmation message
        document.getElementById('confirmationMessage').style.display = 'block';

        // Optionally, you can reset the form after successful submission
        document.getElementById('bookingForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
