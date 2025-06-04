// login.js
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    alert('Login successful!');
    window.location.href = 'index.html';  // redirect to main page
  } catch (error) {
    alert('Login failed: ' + error.message);
  }
});
