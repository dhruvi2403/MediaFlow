import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx9OXCsGoYwYSj0P34oUVDQn9Ky5f9V1U",
  authDomain: "usersignup-9926c.firebaseapp.com",
  projectId: "usersignup-9926c",
  storageBucket: "usersignup-9926c.firebasestorage.app",
  messagingSenderId: "706773291190",
  appId: "1:706773291190:web:baa4183c9aca89d4295617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Create error message element
const errorDiv = document.createElement("div");
errorDiv.style.color = "red";
errorDiv.style.marginTop = "10px";
errorDiv.style.fontSize = "14px";

// Add it to the signin form
const signinForm = document.getElementById("signinForm");
signinForm.appendChild(errorDiv);

//submit
const submit = document.getElementById("signin-submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  //inputs
  const email = document.getElementById("signinEmail").value;
  const password = document.getElementById("signinPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      window.location.href = "home.html";

      // ...
    })
    .catch((error) => {
      // Handle specific error cases
      switch (error.code) {
        default:
          errorDiv.textContent =
            "Login failed. Please check your credentials and try again.";
      }
      document.getElementById("signinPassword").value = "";
    });
});
