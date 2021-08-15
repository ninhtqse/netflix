import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBhZM7EO1ULdGzzdJHHIaYaKFA_LNxK934",
    authDomain: "netflix-93377.firebaseapp.com",
    projectId: "netflix-93377",
    storageBucket: "netflix-93377.appspot.com",
    messagingSenderId: "699430055714",
    appId: "1:699430055714:web:136bbf2fe13bdd72a9ff7b",
    measurementId: "G-M88CQNJP08"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;