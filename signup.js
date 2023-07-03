const signupForm = document.getElementById('signupForm');
const signupMessageDiv = document.getElementById('message');
window.addEventListener('DOMContentLoaded', function () {
  var dobInput = document.getElementById('dob');

  flatpickr(dobInput, {
    dateFormat: 'd-m-Y'
  });
});

signupForm.addEventListener('submit', (event) => {
  // Prevent form submission
  event.preventDefault(); 

  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;
  const dob = document.getElementById('dob').value;

  // Create an object with form data
  const formData = {
    name,
    phoneNumber,
    email,
    gender,
    dob
  };

  // Storing the form data in local storage
  localStorage.setItem('formData', JSON.stringify(formData));

  alert('Sign up successful. Welcome!');

  // Clear the input fields
  signupForm.reset();
  window.location.href='login.html'
});
