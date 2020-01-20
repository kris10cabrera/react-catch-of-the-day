import Rebase from 're-base';
// React firebase specific package that allows us to mirror our base to our react state
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcSoXNdZsXIJrbhxbGyHps4LVdCZiyXbs",
  authDomain: "catch-of-the-day-kris10cabrera.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-kris10cabrera.firebaseio.com",
});

// created our firebase app ☝ and our rebase binding 👇
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
// this is a named export

export default base;
// this is a default export