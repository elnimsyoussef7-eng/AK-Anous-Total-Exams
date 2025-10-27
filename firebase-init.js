// Firebase setup
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// إنشاء حساب
async function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    document.getElementById('status').innerText = "تم إنشاء الحساب بنجاح";
  } catch (error) {
    document.getElementById('status').innerText = "خطأ: " + error.message;
  }
}

// تسجيل الدخول
async function signIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    document.getElementById('status').innerText = "تم تسجيل الدخول بنجاح";
  } catch (error) {
    document.getElementById('status').innerText = "خطأ: " + error.message;
  }
}

// تسجيل الخروج
async function signOutUser() {
  try {
    await signOut(auth);
    document.getElementById('status').innerText = "تم تسجيل الخروج";
  } catch (error) {
    document.getElementById('status').innerText = "خطأ أثناء تسجيل الخروج";
  }
}
