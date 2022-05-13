import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7LjX9JcRNyT0Re-E8Rb7-8KPNtwS2jyU",
    authDomain: "fireblogs-35fe8.firebaseapp.com",
    projectId: "fireblogs-35fe8",
    storageBucket: "fireblogs-35fe8.appspot.com",
    messagingSenderId: "569731690014",
    appId: "1:569731690014:web:bf1680c1e7324abd30480f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();