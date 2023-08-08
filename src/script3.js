/* Add meals to FireStore DataBase */

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, addDoc, collection} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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
  const db = getFirestore(app);

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

  
let choose_btns = document.querySelectorAll('.choose_btn');
for(let i=0; i<choose_btns.length; i++){
  choose_btns[i].addEventListener('click',addMeal);
}

/* Add orders */
function addMeal(event){
  let choose_btn=event.target;
  let choose_btn_parent = choose_btn.parentElement;
  let meal_caption = choose_btn_parent.children[1].innerHTML;
  let meal_calories = choose_btn_parent.children[3].innerHTML;
  let date = new Date();
  /* let meal_date= date.getFullYear() +'-'+(date.getMonth()+1) + '-'+date.getDate(); */

  function getWeekDay(date) {
  let days=['Sunday','Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  let meal_day=getWeekDay(date);

  const dbRef = collection(db, 'Meals')
    const data = {
        caption: meal_caption,
        calories:meal_calories,
        date:meal_day
      };
     addDoc(dbRef, data)
    .then(()=>{
      alert('Meal was added successfully')
    })
    .catch((error)=>{
      alert('Error')
    });

}

