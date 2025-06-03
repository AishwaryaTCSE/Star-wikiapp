# Rick & Morty Wiki App with Firebase Authentication and Role-Based Access

## Features
- User Sign-up and Login with Firebase Email/Password Authentication
- Role assignment ('user' by default), stored in Firestore
- Role-based page access control
- Rick & Morty API character gallery with pagination
- Random character button
- Dark/Light theme toggle (persisted in localStorage)
- Character details page
- Live updating footer clock
- Logout functionality

## Setup

1. **Create a Firebase project**:  
   Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.

2. **Enable Authentication**:  
   - In your project, navigate to **Authentication → Sign-in method → Email/Password → Enable**.

3. **Enable Firestore Database**:  
   - Go to **Firestore Database → Create database → Start in test mode** (for development).

4. **Copy Firebase config**:  
   - In **Project Settings → Your Apps → Add Web App**, register a new web app and copy its config object.

5. **Replace placeholders** in `auth.js` with your actual Firebase config.

6. Serve these files via a local HTTP server (e.g., VSCode Live Server, or Firebase Hosting).

7. Open `signup.html` in your browser, create a user, then login.

8. Explore the app:
   - Browse characters
   - Toggle dark/light theme
   - View random character
   - Click any card to see details
   - Logout

## Screenshots
 - Sign-up(Signup.png)
 -After Signup form the pop-up message signup successful!(After-Signup.png)
 - Login- Form (Login.png)
 - Dashboard-View(Dashboard.png)
 - Pagination! (Paignation.png)
 - When we click any of the card it show the deatils of character View deatils (Character-Details.png)
 - we can change Theme Colour ie white or dark mode!(Theme-Toggle.png)
 -Logout-Form!(Logout.png)