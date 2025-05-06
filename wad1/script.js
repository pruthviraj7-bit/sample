document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');
  
    if (password !== confirmPassword) {
      message.textContent = 'Passwords do not match.';
      return;
    }
  
    if (password.length < 6) {
      message.textContent = 'Password must be at least 6 characters.';
      return;
    }
  
    message.style.color = 'green';
    message.textContent = 'Registration successful!';
    // You can send data to a server here
  });
  