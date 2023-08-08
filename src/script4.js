/* Sign Out for Page Food */

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"
import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"


 // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBW9AipD1q6ceRcHKTxwPWC4bMbmk8ySQ8",
    authDomain: "food-diary-a94ed.firebaseapp.com",
    databaseURL: "https://food-diary-a94ed-default-rtdb.firebaseio.com",
    projectId: "food-diary-a94ed",
    storageBucket: "food-diary-a94ed.appspot.com",
    messagingSenderId: "684247554950",
    appId: "1:684247554950:web:868a5d64e83a19c2b9aa07"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  
let btn_sign_out =  document.getElementById('btn_sign_out');
btn_sign_out.addEventListener('click', function(){
	signOut(auth).then(() => {
		// Sign-out successful.
		alert('Sign out success')
		window.location.replace("index.html");
	  }).catch((error) => {
		// An error happened.
	  });
})




