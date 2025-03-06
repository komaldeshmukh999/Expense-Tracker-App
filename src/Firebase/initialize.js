import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration

const firebaseConfig = {
   apiKey: "AIzaSyDmkBpgIOHdVS5BJpDthbsMm_krNstkT08",
  authDomain: "expensetracker-cba81.firebaseapp.com",
  databaseURL: "https://expensetracker-cba81-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "expensetracker-cba81",
  storageBucket: "expensetracker-cba81.firebasestorage.app",
  messagingSenderId: "334147413567",
  appId: "1:334147413567:web:694a76be0493a115e6ba8a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;