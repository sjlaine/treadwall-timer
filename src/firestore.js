import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.apiKey,
  authDomain: "gp81timerapp.firebaseapp.com",
  databaseURL: "https://gp81timerapp.firebaseio.com",
  projectId: "gp81timerapp",
  storageBucket: "gp81timerapp.appspot.com",
  messagingSenderId: "303271024966"
};

// const settings = {
//   timestampsInSnapshots: true
// };

// firestore.settings(settings);

firebase.initializeApp(config);

const db = firebase.firestore();

const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export const saveTimer = (title, timer) => {
  db.collection("Timers").doc().set({
    title: title,
    timer: timer
  })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}
