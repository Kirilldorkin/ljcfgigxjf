import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGnhi0COdfzhH7iRXCt_rfU9sJlyj1548",
  authDomain: "wdfgyhjjmvj.firebaseapp.com",
  projectId: "wdfgyhjjmvj",
  storageBucket: "wdfgyhjjmvj.appspot.com",
  messagingSenderId: "1051382165813",
  appId: "1:1051382165813:web:85ce1128191198be519c7c",
  measurementId: "G-P4M63VWWGZ",
  databaseURL: "https://wdfgyhjjmvj-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); 

export { db, auth };

export const getAllUsers = async () => {
  const usersCollection = collection(db, "users");
  const querySnapshot = await getDocs(usersCollection);
  const userList = [];

  querySnapshot.forEach((doc) => {
    userList.push({ id: doc.id, ...doc.data() });
  });

  return userList;
};

export const updateUser = async (userId, updatedData) => {
  const userDoc = doc(db, "users", userId);
  await updateDoc(userDoc, updatedData);
};
