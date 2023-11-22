// Exercise 6
function validate() {
  // Get the input fields
  var fName = document.getElementById('fName');
  var fEmail = document.getElementById('fEmail');
  var fPhone = document.getElementById('fPhone');
  var fPassword = document.getElementById('fPassword');

  // Get the error elements
  var errorName = document.getElementById('errorName');
  var errorEmail = document.getElementById('errorEmail');
  var errorPhone = document.getElementById('errorPhone');
  var errorPassword = document.getElementById('errorPassword');

  // Initialize the error count
  var error = 0;

  // Validate fields entered by the user: name, email, phone, and password
  if (!/^[a-zA-Z]+$/.test(fName.value.trim()) || fName.value.length < 3) {
    error++;
    // Show an error message for the name field
    errorName.textContent = 'Name is required, must be at least 3 characters long, and can only contain letters';
    // Highlight the name input in red
    fName.classList.add('is-invalid');
  } else {
    // Clear the error message and remove the red highlight for the name field if it's not empty
    errorName.textContent = '';
    fName.classList.remove('is-invalid');
  }

  if (!/^[a-zA-Z]+$/.test(fEmail.value.trim()) || fEmail.value.length < 3) {
    error++;
    // Show an error message for the email field
    errorEmail.textContent = 'Email is required, must be at least 3 characters long, and can only contain letters';
    // Highlight the email input in red
    fEmail.classList.add('is-invalid');
  } else {
    // Clear the error message and remove the red highlight for the email field if it's not empty
    errorEmail.textContent = '';
    fEmail.classList.remove('is-invalid');
  }

  if (!/^\d+$/.test(fPhone.value.trim())) {
    error++;
    // Show an error message for the phone field
    errorPhone.textContent = 'Phone must contain only numbers';
    // Highlight the phone input in red
    fPhone.classList.add('is-invalid');
  } else {
    // Clear the error message and remove the red highlight for the phone field if it's not empty
    errorPhone.textContent = '';
    fPhone.classList.remove('is-invalid');
  }

  if (!/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(fPassword.value.trim())) {
    error++;
    // Show an error message for the password field
    errorPassword.textContent = 'Password must include both letters and numbers, and be at least 6 characters long';
    // Highlight the password input in red
    fPassword.classList.add('is-invalid');
  } else {
    // Clear the error message and remove the red highlight for the password field if it's not empty
    errorPassword.textContent = '';
    fPassword.classList.remove('is-invalid');
  }

  // Check if there are any errors
  if (error > 0) {
    alert('Error: Please fill in all required fields with valid formats. See error messages for details.');
  } else {
    alert('OK');
    // Submit the form or perform other actions as needed
  }
}
