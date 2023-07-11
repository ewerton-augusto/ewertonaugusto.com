import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    storageBucket: 'gs://birthday-e8c7e.appspot.com'
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
