
// register.js
const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    alert('Registration successful! Please log in.');
    window.location.href = 'login.html';
  } catch (error) {
    alert('Registration failed: ' + error.message);
  }
});
