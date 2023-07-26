/* Show meals from FireStore*/

// Import the functions you need from the SDKs you need
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js"
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


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
  const db = getFirestore();

  const dbRef = collection(db, 'Meals');
  let list_food = document.querySelector('.list_food');
  let show_meals = document.getElementById('show_meals');
  show_meals.addEventListener('click', showAllMeals);
  
  function showAllMeals(){
  onSnapshot(dbRef, docsSnap => {
    docsSnap.forEach(doc => {
      console.log(doc.data().caption);
      console.log(doc.data().calories);
      console.log(doc.data().date)
  
      let new_meal = document.createElement('div');
      new_meal.classList.add('new_meal')

      let new_meal_caption = document.createElement('div');
      new_meal_caption.classList.add('new_meal_caption')
      new_meal_caption.innerHTML = doc.data().caption;

      let new_meal_calories = document.createElement('div');
      new_meal_calories.classList.add('new_meal_calories')
      new_meal_calories.innerHTML = doc.data().calories

      let new_meal_date = document.createElement('div');
      new_meal_date.classList.add('new_meal_date')
      new_meal_date.innerHTML = doc.data().date
      
      new_meal.appendChild(new_meal_caption);
      new_meal.appendChild(new_meal_calories);
      new_meal.appendChild(new_meal_date);

      list_food.appendChild(new_meal);

      setTimeout(()=>{
        location.reload()
      },10000)
    })

  })
 
  }