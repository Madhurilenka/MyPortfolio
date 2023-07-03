import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//  const firebaseConfig = {
//   apiKey: "AIzaSyCrvcV4DYNRKVO1mS6VW1WCWgL6yjRbWyI",
//   authDomain: "madhuri-portfolio.firebaseapp.com",
//   projectId: "madhuri-portfolio",
//   storageBucket: "madhuri-portfolio.appspot.com",
//   messagingSenderId: "1024087812590",
//   appId: "1:1024087812590:web:19b118ac30a70c4b4f46ff",
//   measurementId: "G-04NCCV3T42"
// };
const firebaseConfig = {
  apiKey: "AIzaSyCrvcV4DYNRKVO1mS6VW1WCWgL6yjRbWyI",
  authDomain: "madhuri-portfolio.firebaseapp.com",
  projectId: "madhuri-portfolio",
  storageBucket: "madhuri-portfolio.appspot.com",
  messagingSenderId: "1024087812590",
  appId: "1:1024087812590:web:2b1eec4f25cf9e084f46ff",
  measurementId: "G-JE8ZBN8NV6"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();





// Import the functions you need from the SDKs you need





// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCrvcV4DYNRKVO1mS6VW1WCWgL6yjRbWyI",
//   authDomain: "madhuri-portfolio.firebaseapp.com",
//   projectId: "madhuri-portfolio",
//   storageBucket: "madhuri-portfolio.appspot.com",
//   messagingSenderId: "1024087812590",
//   appId: "1:1024087812590:web:19b118ac30a70c4b4f46ff",
//   measurementId: "G-04NCCV3T42"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);