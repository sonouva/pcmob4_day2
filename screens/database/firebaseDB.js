import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
const firebaseConfig = {
        apiKey: "AIzaSyAxxs-Bonz4g_eLVSSHKZL3uUFQjOTyEqI",
        authDomain: "fireapp-learn.firebaseapp.com",
        projectId: "fireapp-learn",
        storageBucket: "fireapp-learn.appspot.com",
        messagingSenderId: "428329755813",
        appId: "1:428329755813:web:8d7ad320b2e55cc48c994c"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;