/* Registration page */

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";

  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"
	
  import { getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

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
  const db = getDatabase();

  let form_sign_in = document.getElementById('form_sign');
  form_sign_in.addEventListener('submit', (e) => {
    e.preventDefault();
    var email = document.getElementById('user_email').value;
    var password =  document.getElementById('user_password').value;
    createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
    // Signed in 
        const user = userCredential.user;
        // ...
        set(ref(db, 'users/' + user.uid), {
                email: email,
                password:password
          })
          .then(() => {
          // Data saved successfully!
        alert('User created successfully')
        window.location.replace("food.html");
        })
        .catch((error) => {
          // The write failed...
    alert('Error')
});
  })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
     alert(errorMessage);
});


});



let btn_clear = document.getElementById('btn_clear');
btn_clear.addEventListener('click', function(){
let email = document.getElementById('user_email');
var password =  document.getElementById('user_password');
email.value = '';
password.value = ''
});
