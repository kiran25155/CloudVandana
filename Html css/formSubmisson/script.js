document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    const submitButton = document.getElementById('submit-button');
    const resetButton = document.getElementById('reset-button');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const popupResults = document.getElementById('popup-results');

    submitButton.addEventListener('click', function() {
        if (form.checkValidity()) {
            // Gather the selected values
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const dob = document.getElementById('date-of-birth').value;
            const country = document.getElementById('country').value;
            const gender = Array.from(document.getElementsByName('gender'))
                .filter(input => input.checked)
                .map(input => input.value)
                .join(', ');
            const profession = document.getElementById('profession').value;
            const email = document.getElementById('email').value;
            const mobile = document.getElementById('mobile').value;

            // Display results in the popup
            popupResults.innerHTML = `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Profession:</strong> ${profession}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile Number:</strong> ${mobile}</p>
            `;

            // Display the popup
            popup.style.display = 'block';
        }
    });

    resetButton.addEventListener('click', function() {
        // Reset the form and close the popup
        form.reset();
        popup.style.display = 'none';
    });

    closePopup.addEventListener('click', function() {
        // Close the popup
        popup.style.display = 'none';
    });
});
