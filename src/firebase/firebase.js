 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-analytics.js";
 import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-auth.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAVIag8p2BAo-XXaSvKsYFGKJz13CpqYKs",
   authDomain: "tiendax-6feb5.firebaseapp.com",
   projectId: "tiendax-6feb5",
   storageBucket: "tiendax-6feb5.appspot.com",
   messagingSenderId: "156881002152",
   appId: "1:156881002152:web:ea4028c9ae0ef91f182c9d",
   measurementId: "G-GVJPV5T09D"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 const analytics = getAnalytics(app);
 
