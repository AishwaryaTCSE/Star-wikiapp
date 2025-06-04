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

 ## 💡 Challenges Faced & How I Overcame Them

1. **Integrating Firebase Authentication with Role-Based Access Control**
   - **Challenge:** It was initially difficult to implement both login/signup and role-based user permissions (like user/admin access).
   - **Solution:** I used Firebase Authentication for email/password login and stored user roles in Firestore. During login, I fetched the user's role and applied UI access restrictions accordingly.

2. **Handling Pagination and API Fetching**
   - **Challenge:** The Rick and Morty API paginates character data, and I had to manage "Next" and "Previous" page logic correctly.
   - **Solution:** I used the `info.next` and `info.prev` URLs from the API response and updated the UI dynamically when the user clicked the buttons.

3. **Displaying Episode Names in Character Details**
   - **Challenge:** The API only provides episode URLs, not names directly.
   - **Solution:** I used `Promise.all()` to fetch each episode’s data concurrently and displayed either episode names or the total count.

4. **Live Updating Clock on Both Pages**
   - **Challenge:** Ensuring that the live clock worked and updated accurately every second on both the gallery and detail pages.
   - **Solution:** Created a reusable `updateClock()` function with `setInterval`, shared across both HTML pages.

5. **Theme Toggle Implementation**
   - **Challenge:** Toggling between Dark and Light themes while maintaining styles cleanly with no external CSS.
   - **Solution:** Applied conditional class toggling in JavaScript and used internal `<style>` tags within HTML for custom themes.

6. **Responsive Design Without External CSS**
   - **Challenge:** Designing a grid layout that is responsive on different screen sizes without using frameworks like Bootstrap.
   - **Solution:** Used Flexbox and media queries inside internal CSS to ensure clean layout and responsiveness.

7. **Deployment**
   - **Challenge:** Ensuring Firebase Authentication and Firestore work properly when deployed (CORS, login errors).
   - **Solution:** Configured Firebase project properly, ensured rules were correct, and deployed using Netlify/GitHub Pages after testing on localhost.
  

## Screenshots
 - Sign-up(Signup.png)
 -After Signup form the pop-up message signup successful!(After-Signup.png)
 - Login- Form (Login.png)
 - Dashboard-View(Dashboard.png)
 - Pagination! (Paignation.png)
 - When we click any of the card it show the deatils of character View deatils (Character-Details.png)
 - we can change Theme Colour ie white or dark mode!(Theme-Toggle.png)
 -Logout-Form!(Logout.png)
