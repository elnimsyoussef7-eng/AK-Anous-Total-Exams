import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxCeUoJxVoNUgissbQL8WcbahNm_PvLjc",
  authDomain: "ak-anous-platform.firebaseapp.com",
  projectId: "ak-anous-platform",
  storageBucket: "ak-anous-platform.firebasestorage.app",
  messagingSenderId: "110342213199",
  appId: "1:110342213199:web:d21209d0aaf599fce3e43a",
  measurementId: "G-WHL9RF5PS5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
