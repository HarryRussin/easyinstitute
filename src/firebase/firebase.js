import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDxw3REepPnDNijB45Ys9Mduoyo2Cq-wa4",
  authDomain: "easyinstitute-1d2d4.firebaseapp.com",
  projectId: "easyinstitute-1d2d4",
  storageBucket: "easyinstitute-1d2d4.appspot.com",
  messagingSenderId: "894303915036",
  appId: "1:894303915036:web:394c4d453a4cfc085d23d9",
  measurementId: "G-1V8CZ5W5H3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);