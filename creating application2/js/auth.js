document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById('logout-btn');

  firebase.auth().onAuthStateChanged(user => {
    if (!user) {
      alert("You must be logged in to access this page.");
      window.location.href = "login.html";
    }
  });

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      firebase.auth().signOut()
        .then(() => {
          alert('Logged out successfully.');
          window.location.href = 'login.html';
        })
        .catch(error => {
          console.error('Logout error:', error);
          alert('Failed to logout. Try again.');
        });
    });
  }
});
