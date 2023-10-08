
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBwwp1nKflrtwtQIGMoNClZOMKshJB8C-M",
  authDomain: "wedding-management-d80dc.firebaseapp.com",
  projectId: "wedding-management-d80dc",
  storageBucket: "wedding-management-d80dc.appspot.com",
  messagingSenderId: "326925917020",
  appId: "1:326925917020:web:8090c61261e0ee9c3bbf99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;