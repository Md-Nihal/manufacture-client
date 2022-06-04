// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // const firebaseConfig = {
// //   apiKey:process.env.REACT_APP_API_KEY ,
// //   authDomain:process.env.REACT_APP_AUTH_DOMAIN ,
// //   projectId:process.env.REACT_APP_PROJECT_ID ,
// //   storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
// //   messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID ,
// //   appId:process.env.REACT_APP_APP_ID,
// // };

// const firebaseConfig = {
//   apiKey: "AIzaSyDNwivNclgVl8jj6qFoteH0-SnNI629xpc",
//   authDomain: "tools-manufacture-afb84.firebaseapp.com",
//   projectId: "tools-manufacture-afb84",
//   storageBucket: "tools-manufacture-afb84.appspot.com",
//   messagingSenderId: "191137120570",
//   appId: "1:191137120570:web:aae70b6388d900129b5003"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth= getAuth(app)
// export default auth



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth
