import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "softeng-2fe4a.firebaseapp.com",
  projectId: "softeng-2fe4a",
  storageBucket: "softeng-2fe4a.firebasestorage.app",
  messagingSenderId: "643886211897",
  appId: "1:643886211897:web:0185bcf4f111134f4a7ee8"
};

export const app = initializeApp(firebaseConfig);
