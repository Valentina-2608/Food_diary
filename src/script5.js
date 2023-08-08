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
      },20000)
    })

  })
 
  }




  let list_calories= document.querySelector('.list_calories');
  let show_calories = document.getElementById('show_calories');
  show_calories.addEventListener('click', showCalories);

  function showCalories(){
  let new_meals_date=document.querySelectorAll('.new_meal_date');
  let s1=0;
  let s2=0;
  let s3=0;
  let s4=0;
  let s5=0;
  let s6=0;
  let s7=0;
  for(let elem of new_meals_date){
    let date_parent=elem.parentElement;
    let new_meal_calories=date_parent.children[1].innerHTML;
    if (elem.innerHTML==='Monday'){
      s1=s1+Number(new_meal_calories);
    }
    else if (elem.innerHTML==='Tuesday'){
      s2=s2+Number(new_meal_calories);
    }
    else if (elem.innerHTML==='Wednesday'){
      s3=s3+Number(new_meal_calories);
    }
    else if (elem.innerHTML==='Thursday'){
      s4=s4+Number(new_meal_calories);
    }
    else if (elem.innerHTML==='Friday'){
      s5=s5+Number(new_meal_calories);
    }
    else if (elem.innerHTML==='Saturday'){
      s6=s6+Number(new_meal_calories);
    }
    else if (elem.innerHTML==='Sunday'){
      s7=s7+Number(new_meal_calories);
    }
  
    }

    let elem_monday=list_calories.children[0];
    elem_monday.children[0].innerHTML=s1;

    let elem_tuesday=list_calories.children[1];
    elem_tuesday.children[0].innerHTML=s2;

    let elem_wednesday=list_calories.children[2];
    elem_wednesday.children[0].innerHTML=s3;

    let elem_thursday=list_calories.children[3];
    elem_thursday.children[0].innerHTML=s4;

    let elem_friday=list_calories.children[4];
    elem_friday.children[0].innerHTML=s5;

    let elem_saturday=list_calories.children[5];
    elem_saturday.children[0].innerHTML=s6;

    let elem_sunday=list_calories.children[6];
    elem_sunday.children[0].innerHTML=s7;

  
    }
   


 
  

 
  