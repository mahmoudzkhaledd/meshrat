import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0bdsKvYPXbXF1EKrkMH_crnqqupN4u7U",
  authDomain: "meshrat-fc8fa.firebaseapp.com",
  projectId: "meshrat-fc8fa",
  storageBucket: "meshrat-fc8fa.appspot.com",
  messagingSenderId: "476673257214",
  appId: "1:476673257214:web:6c99851cbd4ee1bef57faf",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export {
    storage,
}