const loginForm = document.getElementById('loginForm');
const getOTPButton = document.getElementById('getOTP');
const verifyOTPButton = document.getElementById('verifyOTP');
const phoneNumberInput = document.getElementById('phoneNumber');
const otpInput = document.getElementById('otp');
const messageDiv = document.getElementById('message');
const messageDiv1 = document.getElementById('message1');


  getOTPButton.addEventListener('click', () => {
    const phoneNumber = phoneNumberInput.value;
  
    fetch('https://prune.co.in/api/accounts/get_otp/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone_number: phoneNumber,
        country_code: '+91'
      })
    })
    .then(response => response.json())
    .then(data => {
     console.log(data)
     if(!data.Error){
      if (data.status!=='fail') {
        // Displaying the OTP value in the messageDiv element
        messageDiv.textContent = `OTP sent successfully.`;
      } else {
        messageDiv.textContent = `${data.status}: Failed to send OTP.`;
      }}
      else{
        messageDiv.textContent = `${data.Error}`;
      }

    })
    .catch(Error => {
      messageDiv.textContent = 'Error occurred while sending OTP.';
      console.log(Error);
    });
  });
  
verifyOTPButton.addEventListener('click', () => {
    const phoneNumber = phoneNumberInput.value;
    const otp = otpInput.value;
  
    fetch('https://prune.co.in/api/accounts/verify/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone_number: phoneNumber,
        country_code: '+91',
        otp: otp
      })
    })
    .then(response => response.json())
    .then(data => {
    console.log(data)
      if (data.Error!=='Invalid Data') {
        messageDiv1.textContent = 'OTP verification successful. Welcome!';
        messageDiv.textContent = '';
        // Redirecting to the welcome page 
        window.location.href = 'welcome.html';
      } else {
        messageDiv1.textContent = 'OTP verification failed.';
        messageDiv.textContent = '';
      }
    })
    .catch(error => {
      messageDiv1.textContent = 'Error occurred while verifying OTP.';
      messageDiv.textContent = '';
      console.log(error);
    });
  });
  